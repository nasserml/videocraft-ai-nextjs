import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How does VideoCraft AI work?",
    answer:
      "VideoCraft AI uses advanced machine learning algorithms to analyze your content and automatically generate professional-quality videos. Simply upload your content, choose your preferences, and let our AI do the magic.",
  },
  {
    question: "What types of videos can I create?",
    answer:
      "You can create a wide range of videos including social media content, promotional videos, educational content, product demonstrations, and more. Our AI adapts to various styles and formats.",
  },
  {
    question: "Do I need technical expertise?",
    answer:
      "Not at all! VideoCraft AI is designed to be user-friendly and intuitive. Our AI handles the technical aspects while you focus on your creative vision.",
  },
  {
    question: "What formats are supported?",
    answer:
      "We support all major video and image formats including MP4, MOV, AVI, JPG, PNG, and more. The output videos are available in various formats and qualities up to 8K resolution.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-xl">
            Find answers to common questions about VideoCraft AI
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-rose-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-rose-400" />
                )}
              </button>
              <motion.div
                initial={false}
                animate={{ height: openIndex === index ? "auto" : 0 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-4 text-slate-300">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
