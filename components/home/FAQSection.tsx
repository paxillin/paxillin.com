"use client";

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

 const faqs = [
  {
    question: "When will Paxillin be available for download?",
    answer:
      "We're launching in phases: Alpha testing (Q1 2025) for 100 users, Beta testing (Q2 2025) for 1,000 users, and Public Release (Q3 2025) for everyone. Sign up now to get early access based on your preferred testing phase."
  },
  {
    question: "Is Paxillin free to use?",
    answer:
      "Yes, Paxillin will offer a free tier with core networking features. We’ll also provide premium features for advanced users and organizations. All features will be available to use at no cost."
  },
  // {
  //   question: "What makes Paxillin different from other professional and social networking platforms?",
  //   answer:
  //     "Paxillin leverages AI-powered content categorization, proprietary engagement metrics like Impact Score, and focuses on meaningful professional and social connections — rather than just collecting contacts. Our platform combines content sharing, community participation, and real-time communication in one cohesive ecosystem."
  // },
  // {
  //   question: "How does the AI-powered content recommendation work?",
  //   answer:
  //     "Our AI analyzes your professional and social interests, industry, connections, and engagement patterns to surface relevant content, suggest meaningful connections, and recommend communities that align with your career goals."
  // },
  {
    question: "What is the Impact Score system?",
    answer:
      "Impact Score is our proprietary metric that measures the quality and meaningfulness of professional and social interactions. It goes beyond likes and comments to evaluate genuine engagement, helping users build authentic relationships."
  },
  {
    question: "Will my data be secure on Paxillin?",
    answer:
      "Absolutely. We implement enterprise-grade security measures, end-to-end encryption for communications, and give users full control over their privacy settings. We never sell user data to third parties."
  },
  {
    question: "Can I use Paxillin on multiple devices?",
    answer:
      "Yes, Paxillin will sync across all your devices. While we're starting with mobile, web and desktop applications are planned for future releases to ensure seamless professional and social networking wherever you are."
  },
  {
    question: "How can I provide feedback?",
    answer:
      "Users will have direct access to our feedback channels, including in-app reporting tools, dedicated support chat, and regular surveys. Your input will directly shape the platform's development."
  }
];


  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 ">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about Paxillin
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border border-gray-400 transition-shadow duration-300 rounded-lg">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                <h3 className="text-base md:text-lg font-medium text-gray-800 leading-snug pr-8">


                    {faq.question}
                  </h3>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed text-left">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
           Still have questions?
          </p>
          <a 
            href="mailto:support@Paxillin.com" 
            className="text-pexilllin-primary font-semibold"
          >
           Contact our support team.
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
