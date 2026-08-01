# Legal Docs Scanner

**AI-powered document management and knowledge search for legal documents**

I built an AI-powered document management and knowledge search platform using **Next.js**, **Convex**, **Clerk**, **LangChain**, and **Google Generative AI**. Users can upload PDFs and documents, which are processed through the backend pipeline for text extraction, AI analysis, embedding-oriented retrieval, and indexing into searchable application state. Next.js handles the product UI and API surface, Convex stores application and document data (uploads tied to analyses and results), Clerk manages accounts, and LangChain + Gemini power extraction and document Q&A.

Portfolio project by **Muhammad Muazzain** — delivered for a private legal-tech engagement, shared here as shipped work in document intelligence.

[![Author](https://img.shields.io/badge/Author-Muhammad%20Muazzain-0A66C2)](https://github.com/MuhammadMuazzain)
[![Stack](https://img.shields.io/badge/Stack-Next.js%20%7C%20Convex%20%7C%20LangChain-111827)](#technology-stack)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

## Interface preview

![Legal Docs Scanner analysis interface — plain-English summary, clause risk flags, and extracted key fields](./docs/legal-docs-scanner-ui.png)

*Analysis results view: uploaded document context, plain-English summary, clause-level risk flags, and key extracted fields.*

---

## What this platform does

1. **Upload** — users upload PDF or text documents into an authenticated workspace  
2. **Process** — document text is extracted and passed through AI analysis actions  
3. **Extract & index** — parties, clauses, summaries, and risk signals are structured and stored  
4. **Search & ask** — users query documents in natural language and review grounded answers  
5. **Manage** — dashboard, history, and analytics keep uploads and results tied to each account  

## Core capabilities

- PDF / document upload with account-scoped storage  
- Asynchronous-style processing via Convex actions (extraction → analysis → persist results)  
- Plain-English summaries and clause-level risk flags  
- Key-field extraction (parties, dates, obligations, governing law, and related terms)  
- Document chat / knowledge search over uploaded content  
- Auth, document history, and analysis results linked per user  

## Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Web Frontend  │    │  AI Processing  │    │   Data Storage  │
│   (Next.js 15)  │◄──►│ (LangChain/LLM) │◄──►│   (Convex DB)   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  Authentication │    │ Model Training  │    │ Document Store  │
│     (Clerk)     │    │   (Jupyter)     │    │ uploads+results │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

**Pipeline (high level):** upload → text extraction (`pdf-parse` / document actions) → LLM analysis (LangChain + Google Generative AI) → structured results written to Convex → UI for summary, risk flags, chat, and history.

## Project structure

```
legal-docs-scanner/
├── ai-model/                 # Optional ML fine-tuning (CUAD / Jupyter)
│   ├── Fine_tuning_code.ipynb
│   └── data-set/
├── apps/
│   ├── web/                  # Main Next.js + Convex application
│   └── admin/                # Admin scaffold
├── docs/                     # UI preview assets
├── CONTRIBUTORS.md
├── LICENSE
└── README.md
```

## Getting started

### Prerequisites
- Node.js 18+
- Python 3.8+ (optional, for `ai-model` notebooks)
- Clerk, Convex, and Google Generative AI credentials

### Run the web app

```bash
git clone https://github.com/MuhammadMuazzain/Legal-Docs-Scanner.git
cd Legal-Docs-Scanner/apps/web
npm install
```

Create `apps/web/.env.local`:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CONVEX_URL=your_convex_url
GOOGLE_GENERATIVE_AI_API_KEY=your_google_ai_key
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Optional model training

```bash
cd ai-model
jupyter notebook Fine_tuning_code.ipynb
```

Download CUAD resources locally into `ai-model/data-set/` (see that folder’s README). Large corpus files are not committed.

## Technology stack

| Layer | Tools |
|---|---|
| Frontend | Next.js 15, React 19, TypeScript, Tailwind CSS, Radix UI |
| Backend / data | Convex (documents, analyses, users, real-time state) |
| Auth | Clerk |
| AI / NLP | LangChain, Google Generative AI (Gemini), pdf-parse, react-pdf |
| Optional ML | Python, Jupyter, CUAD-oriented fine-tuning |
| UX | Zustand, Recharts, Sonner |

## Author

| Role | Name | Contact |
|---|---|---|
| Author / sole contributor | **Muhammad Muazzain** | [muhammadmuazzain07@gmail.com](mailto:muhammadmuazzain07@gmail.com) |

- GitHub: [github.com/MuhammadMuazzain](https://github.com/MuhammadMuazzain)  
- Repository: [Legal-Docs-Scanner](https://github.com/MuhammadMuazzain/Legal-Docs-Scanner)

See [CONTRIBUTORS.md](./CONTRIBUTORS.md).

## Acknowledgments

- The Atticus Project (CUAD)  
- Next.js, Clerk, Convex, LangChain, and the open-source ML ecosystem  

## License

MIT License — see [LICENSE](./LICENSE).

---

Built by **Muhammad Muazzain** · document management, extraction, and knowledge search for legal content
