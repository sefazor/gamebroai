import React from 'react';
import { HelpCircle } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState(0);

  const faqs = [
    {
      question: "How do I start playing on GameBro?",
      answer: "Starting is simple! Just send a 'Hi' message to our WhatsApp number. You'll receive instructions and can begin making predictions immediately. No downloads or registrations required."
    },
    {
      question: "How does the scoring system work?",
      answer: "You earn points for each correct prediction. The more accurate your predictions, the more points you accumulate. Bonus points are awarded for consecutive correct predictions and predicting underdog victories."
    },
    {
      question: "When are new predictions available?",
      answer: "New prediction opportunities are posted daily at 9:00 AM UTC. You'll receive a WhatsApp notification when new matches are available for prediction."
    },
    {
      question: "What prizes can I win?",
      answer: "Monthly prizes include premium sports packages, official team jerseys, and exclusive merchandise. The higher you rank on the leaderboard, the better your chances of winning amazing rewards."
    },
    {
      question: "How are winners selected?",
      answer: "Winners are determined based on their position on the monthly leaderboard. The top performers with the highest prediction accuracy and point totals are eligible for prizes."
    },
    {
      question: "Can I compete with my friends?",
      answer: "Yes! You can create private leagues with friends and compete directly against them while still participating in the global leaderboard."
    },
    {
      question: "Is there a limit to daily predictions?",
      answer: "Each day you can make predictions on all available matches. There's no limit to how many predictions you can make, but each match can only be predicted once."
    },
    {
      question: "What happens if a match is cancelled?",
      answer: "If a match is cancelled or postponed, any predictions made for that match will be void and won't affect your score or ranking."
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-12">
          <HelpCircle className="w-8 h-8 text-[#4ade80]" />
          <h2 className="text-3xl font-bold">Common Questions</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-[#111] rounded-xl overflow-hidden border border-gray-800/50 hover-glow animate-fade-in"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex justify-between items-center transition-colors hover:bg-gray-800/10"
              >
                <span className="font-medium">{faq.question}</span>
                <span className="text-[#4ade80] text-xl font-bold transition-transform duration-300">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-400 animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}