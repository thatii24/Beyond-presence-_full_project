import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import AvatarBubble from './AvatarBubble'
import TranscriptBubble from './TranscriptBubble'

export default function MeetingRoom({ onEnd }) {
  const [question, setQuestion] = useState('')
  const [transcript, setTranscript] = useState([])
  const [loading, setLoading] = useState(false)
  const [ending, setEnding] = useState(false)

  const scrollRef = useRef(null)

  useEffect(() => {
    const el = scrollRef.current
    if (el) {
      el.scrollTop = el.scrollHeight
    }
  }, [transcript, loading])

  function handleInputKeyDown(e) {
    if (e.key !== 'Enter' || e.shiftKey || e.nativeEvent.isComposing) return
    e.preventDefault()
    if (!question.trim() || loading || ending) return
    void handleAsk(e)
  }

  async function handleAsk(e) {
    e.preventDefault()
    const q = question.trim()
    if (!q || loading || ending) return

    setTranscript((prev) => [
      ...prev,
      { role: 'participant', text: q, audioUrl: null },
    ])
    setLoading(true)
    try {
      const { data } = await axios.post('http://localhost:3001/api/ask', {
        question: q,
      })
      const { response_text, audio_url } = data
      setTranscript((prev) => [
        ...prev,
        {
          role: 'standin',
          text: response_text ?? '',
          audioUrl: audio_url ?? null,
        },
      ])
      setQuestion('')
    } catch {
      setTranscript((prev) => [
        ...prev,
        {
          role: 'standin',
          text: 'Sorry, something went wrong. Please try again.',
          audioUrl: null,
        },
      ])
      setQuestion('')
    } finally {
      setLoading(false)
    }
  }

  async function handleEndMeeting() {
    if (ending) return
    setEnding(true)
    try {
      const { data } = await axios.get('http://localhost:3001/api/summary')
      onEnd(data)
    } catch (err) {
      onEnd({
        error: true,
        message: err.response?.data?.message ?? err.message ?? 'Failed to load summary',
      })
    } finally {
      setEnding(false)
    }
  }

  const inputDisabled = loading || ending

  return (
    <div className="flex h-screen min-h-0 flex-col bg-gray-950 text-white">
      <header className="flex shrink-0 items-center justify-between border-b border-gray-700 bg-gray-900 px-6 py-4">
        <h1 className="font-bold text-white">StandIn — Live Meeting</h1>
        <div className="flex items-center gap-2">
          <span
            className="h-2 w-2 shrink-0 rounded-full bg-green-500"
            aria-hidden
          />
          <span className="text-sm text-white">Live</span>
        </div>
      </header>

      <div
        ref={scrollRef}
        className="min-h-0 flex-1 overflow-y-auto px-4 py-4"
      >
        {transcript.map((entry, index) =>
          entry.role === 'standin' ? (
            <AvatarBubble
              key={index}
              text={entry.text}
              audioUrl={entry.audioUrl ?? null}
            />
          ) : (
            <TranscriptBubble
              key={index}
              text={entry.text}
              role="participant"
            />
          ),
        )}
        {loading && (
          <div className="my-3 max-w-2xl text-sm italic text-gray-400">
            Thinking...
          </div>
        )}
      </div>

      <div className="sticky bottom-0 flex shrink-0 gap-3 border-t border-gray-700 bg-gray-900 p-4">
        <form onSubmit={handleAsk} className="flex min-w-0 flex-1 gap-3">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={handleInputKeyDown}
            disabled={inputDisabled}
            placeholder="Ask a question..."
            className="min-w-0 flex-1 rounded-xl border border-gray-600 bg-gray-800 px-4 py-3 text-white focus:border-blue-500 focus:outline-none disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={inputDisabled || !question.trim()}
            className="shrink-0 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50"
          >
            Ask
          </button>
        </form>
        <button
          type="button"
          onClick={handleEndMeeting}
          disabled={ending}
          className="shrink-0 rounded-xl bg-red-600 px-4 py-3 font-semibold text-white hover:bg-red-700 disabled:pointer-events-none disabled:opacity-50"
        >
          {ending ? 'Ending...' : 'End Meeting'}
        </button>
      </div>
    </div>
  )
}
