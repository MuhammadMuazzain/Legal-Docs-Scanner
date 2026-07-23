export const faqs = [
  {
    question: "What types of legal documents can Legal Docs Scanner analyze?",
    answer:
      "Legal Docs Scanner can analyze contracts, agreements, leases, NDAs, employment agreements, terms of service, privacy policies, and similar legal texts. Models are trained on diverse legal corpora and understand domain-specific terminology across practice areas.",
  },
  {
    question: "How does key information extraction work?",
    answer:
      "Documents are processed with NLP and machine learning pipelines that locate entities and clauses, classify them into legal categories, and return structured fields with source references. Results are designed for human review to maintain accuracy and compliance.",
  },
  {
    question: "How accurate is the AI analysis?",
    answer:
      "On standard commercial contracts, extraction quality is typically high, but critical legal decisions should always include expert review. The system is built to assist legal professionals, not replace them.",
  },
  {
    question: "Is my data secure and confidential?",
    answer:
      "Documents are handled with encryption in transit and at rest. Client data is not used to train shared models without explicit permission, and workflows can be configured for GDPR/CCPA-aligned handling.",
  },
  {
    question: "Can risk and extraction parameters be customized?",
    answer:
      "Yes. You can tune which fields to extract, adjust risk weights, and maintain organization-specific clause libraries in collaboration with legal experts.",
  },
  {
    question: "How does the document chat feature work?",
    answer:
      "Document chat uses natural language processing over the uploaded text to answer questions, explain legal terms, locate clauses, and summarize sections with references to the source.",
  },
  {
    question: "Can Legal Docs Scanner integrate with existing systems?",
    answer:
      "Yes. The platform can be extended with APIs for document management systems such as SharePoint, Dropbox, and enterprise DMS tools, including custom integrations for private deployments.",
  },
  {
    question: "How long does extraction take?",
    answer:
      "Most standard documents (under 50 pages) complete within about a minute. Larger or denser documents may take longer; multiple uploads can be processed in parallel.",
  },
];
