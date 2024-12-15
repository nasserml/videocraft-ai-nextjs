import { motion } from "framer-motion";
import { Video, Sparkles, Clock, Palette } from "lucide-react";

const features = [
  {
    icon: <Video className="w-8 h-8" />,
    title: "AI-Powered Editing",
    description:
      "Automatically edit and enhance your videos with advanced AI algorithms",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Smart Effects",
    description: "Apply stunning visual effects and transitions with one click",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Quick Generation",
    description: "Generate professional-quality videos in minutes, not hours",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Style Customization",
    description: "Choose from various themes and customize to match your brand",
  },
];

export default function Features() {
  return (
    <div className="bg-slate-900 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-slate-400 text-xl">
            Create amazing videos with our cutting-edge tools
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800 p-6 rounded-xl hover:bg-slate-750 transition-colors"
            >
              <div className="text-rose-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
