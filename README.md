# Beyond Presence – Full Project

Beyond Presence is a chatbot prototype built for meetings.  
The idea is simple: when you are busy, the bot can answer basic meeting questions on your behalf.

This project was started during a hackathon, so the current version is still a work in progress with known bugs and limited functions.

## Project Status

- Prototype stage
- Basic chatbot flow available in concept
- API integration approach updated (see below)
- More fixes and features are planned

## API Update (Changed for This Project)

This project now targets an **OpenAI-compatible Chat Completions API** instead of the earlier test API approach.

Use these environment variables in your implementation:

```env
API_BASE_URL=https://api.openai.com/v1
API_KEY=your_api_key_here
MODEL_NAME=gpt-4o-mini
```

If you use another OpenAI-compatible provider, keep the same request format and only change `API_BASE_URL`, `API_KEY`, and `MODEL_NAME`.

## How to Run

> Note: this repository currently contains project documentation only.  
> Add your chatbot source files, then use the run flow below.

1. Clone the repository:
   ```bash
   git clone https://github.com/thatii24/Beyond-presence-_full_project.git
   cd Beyond-presence-_full_project
   ```
2. Create a `.env` file with your API settings (see API section).
3. Install your project dependencies (example for Node.js):
   ```bash
   npm install
   ```
4. Start the app:
   ```bash
   npm run dev
   ```

## Hackathon Context

This project was prepared for **CursorSriLanka 24h Buildathon**, held on **16–17 May 2026**.

## Acknowledgements

Special thanks to **Team Nexa** for planning this project, gathering information, and making this possible under hackathon time limits.

Also, huge thanks to all team members for their effort, collaboration, and support.
