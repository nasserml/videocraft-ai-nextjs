import { motion } from "framer-motion";
import { Upload, Wand2, Download } from "lucide-react";

const steps = [
  {
    icon: <Upload className="w-12 h-12" />,
    title: "Upload Your Content",
    description: "Simply upload your raw video footage or images",
  },
  {
    icon: <Wand2 className="w-12 h-12" />,
    title: "AI Magic",
    description: "Our AI analyzes and enhances your content automatically",
  },
  {
    icon: <Download className="w-12 h-12" />,
    title: "Download & Share",
    description: "Get your professional video ready to share with the world",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-slate-400 text-xl">
            Three simple steps to create amazing videos
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-rose-600/20 -translate-y-1/2 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative bg-slate-800 p-8 rounded-xl text-center"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 p-4 rounded-full">
                  <div className="text-rose-400">{step.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-white mt-8 mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
