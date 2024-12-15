import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-rose-900 to-blue-900 py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900/20 backdrop-blur-lg p-12 rounded-2xl"
        >
          <Sparkles className="w-12 h-12 text-rose-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Video Content?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join thousands of creators who are already using VideoCraft AI to
            produce stunning videos in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-rose-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-rose-700 transition-colors"
            >
              Get Started Free
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-rose-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Watch Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
