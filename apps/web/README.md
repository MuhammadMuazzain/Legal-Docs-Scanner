# Legal Docs Scanner — Web App

Next.js application for AI-assisted **key information extraction** from legal documents.

**Author:** Muhammad Muazzain ([muhammadmuazzain07@gmail.com](mailto:muhammadmuazzain07@gmail.com))

## Stack

- Next.js 15 / React 19 / TypeScript
- Clerk (auth), Convex (backend)
- LangChain + Google Generative AI
- Tailwind CSS, Radix UI, Zustand

## Setup

```bash
cd apps/web
npm install
```

Configure `.env.local` with Clerk, Convex, and Google AI keys, then:

```bash
npm run dev
```

See the root [README](../../README.md) for architecture, training, and portfolio context.
