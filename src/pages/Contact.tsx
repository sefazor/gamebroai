import React from 'react';
import { Mail, MessageSquare, Instagram } from 'lucide-react';

export function Contact() {
  const contactMethods = [
    {
      icon: <MessageSquare className="w-8 h-8 text-[#4ade80]" />,
      title: "WhatsApp",
      description: "Get in touch with us directly through WhatsApp for quick responses.",
      action: "Chat on WhatsApp",
      link: "https://wa.me/1234567890"
    },
    {
      icon: <Mail className="w-8 h-8 text-[#4ade80]" />,
      title: "Email",
      description: "Send us an email for business inquiries or detailed questions.",
      action: "Send Email",
      link: "mailto:hello@gamebro.ai"
    }
  ];

  return (
    <main>
      <div className="page-content">
        <h1 className="page-title">Contact Us</h1>
        
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-[#111] p-6 rounded-2xl border border-gray-800/50">
              <div className="bg-black/50 p-3 rounded-xl w-fit mb-4">
                {method.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
              <p className="text-gray-400 mb-6">{method.description}</p>
              <a
                href={method.link}
                className="inline-flex items-center gap-2 bg-[#4ade80] text-black px-6 py-3 rounded-full font-medium hover:bg-[#22c55e] transition-colors"
              >
                {method.action}
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}