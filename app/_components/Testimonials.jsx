import { motion } from 'framer-motion';
import TestimonialCarousel from './TestimonialCarousel';

export default function Testimonials() {
  return (
    <section className="bg-slate-800 py-24 overflow-hidden h-[600px]">
      <div className="max-w-7xl mx-auto ">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">What Our Users Say</h2>
          <p className="text-slate-400 text-xl">Join thousands of satisfied creators</p>
        </motion.div>

        <TestimonialCarousel />
      </div>
    </section>
  );
}