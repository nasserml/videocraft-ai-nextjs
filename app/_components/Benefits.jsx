import { motion } from "framer-motion";
import { Zap, Shield, Gauge, Users } from "lucide-react";

const benefits = [
  {
    title: "Lightning Fast Results",
    description:
      "Generate professional videos in seconds with our advanced AI technology",
    icon: <Zap className="w-12 h-12" />,
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
  },
  {
    title: "Enterprise-Grade Security",
    description:
      "Your content is protected with state-of-the-art encryption and security measures",
    icon: <Shield className="w-12 h-12" />,
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80",
  },
  {
    title: "Optimized Performance",
    description:
      "Our AI models are optimized for speed and quality, delivering the best results",
    icon: <Gauge className="w-12 h-12" />,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
  },
];

export default function Benefits() {
  return (
    <section className="bg-slate-800 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose VideoCraft AI
          </h2>
          <p className="text-slate-400 text-xl">
            Experience the future of video creation
          </p>
        </motion.div>

        <div className="space-y-24">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-12`}
            >
              <div className="flex-1">
                <div className="text-rose-400 mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-slate-400 text-lg">{benefit.description}</p>
              </div>
              <div className="flex-1">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={benefit.image}
                  alt={benefit.title}
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
