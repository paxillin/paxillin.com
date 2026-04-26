"use client";

import { useState } from "react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "When will Paxillin be available for download?",
      answer:
        "We're launching in phases: Alpha testing (Q1 2025) for 100 users, Beta testing (Q2 2025) for 1,000 users, and Public Release (Q3 2025) for everyone. Sign up now to get early access based on your preferred testing phase.",
    },
    {
      question: "Is Paxillin free to use?",
      answer:
        "Yes, Paxillin will offer a free tier with core networking features. We'll also provide premium features for advanced users and organizations. All features will be available to use at no cost.",
    },
    {
      question: "What is the Impact Score system?",
      answer:
        "Impact Score is our proprietary metric that measures the quality and meaningfulness of professional and social interactions. It goes beyond likes and comments to evaluate genuine engagement, helping users build authentic relationships.",
    },
    {
      question: "Will my data be secure on Paxillin?",
      answer:
        "Absolutely. We implement enterprise-grade security measures, end-to-end encryption for communications, and give users full control over their privacy settings. We never sell user data to third parties.",
    },
    {
      question: "Can I use Paxillin on multiple devices?",
      answer:
        "Yes, Paxillin will sync across all your devices. While we're starting with mobile, web and desktop applications are planned for future releases to ensure seamless professional and social networking wherever you are.",
    },
    {
      question: "How can I provide feedback?",
      answer:
        "Users will have direct access to our feedback channels, including in-app reporting tools, dedicated support chat, and regular surveys. Your input will directly shape the platform's development.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="border-t border-paxillin-mist/30 bg-white py-16 sm:py-20"
    >
      <div className="content-container">
        <div className="mx-auto max-w-3xl">
          <header className="border-b border-paxillin-mist/60 pb-6">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-paxillin-secondary md:text-3xl">
              Questions
            </h2>
            <p className="mt-2 font-montserrat text-base leading-relaxed text-paxillin-ink/70">
              Straight answers — no hype.
            </p>
          </header>

          <ul className="list-none p-0">
            {faqs.map((faq, index) => {
              const isOpen = openFAQ === index;
              return (
                <li
                  key={faq.question}
                  className="border-b border-paxillin-mist/60 last:border-b-0"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-trigger-${index}`}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:bg-paxillin-mist/15 md:py-6"
                  >
                    <span className="font-montserrat text-base font-normal leading-snug text-paxillin-ink md:text-[1.0625rem]">
                      {faq.question}
                    </span>
                    <span
                      className="shrink-0 select-none font-montserrat text-xl font-light leading-none text-paxillin-ink/55"
                      aria-hidden
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:duration-0 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <section
                        id={`faq-answer-${index}`}
                        aria-labelledby={`faq-trigger-${index}`}
                        aria-hidden={!isOpen}
                        className="pb-6"
                      >
                        <p className="max-w-none font-serif text-base leading-relaxed text-paxillin-ink/80 md:text-lg">
                          {faq.answer}
                        </p>
                      </section>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-12 text-center">
            <p className="font-montserrat text-paxillin-ink/65">
              Still have questions?
            </p>
            <a
              href="mailto:support@Paxillin.com"
              className="mt-2 inline-block font-montserrat font-medium text-paxillin-primary underline-offset-2 hover:underline"
            >
              Contact our team.
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
