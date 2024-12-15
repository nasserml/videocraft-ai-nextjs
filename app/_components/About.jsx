import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-slate-800 py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
              alt="Team collaboration"
              className="rounded-xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              About VideoCraft AI
            </h2>
            <p className="text-slate-300 text-lg mb-6">
              We're a team of passionate developers, designers, and AI experts
              committed to revolutionizing video creation. Our mission is to
              make professional video production accessible to everyone through
              the power of artificial intelligence.
            </p>
            <p className="text-slate-300 text-lg mb-8">
              Founded in 2024, we've helped thousands of creators and businesses
              produce stunning videos in record time. Our AI technology
              continues to evolve, bringing new possibilities to creative
              expression.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-bold text-rose-400 mb-2">50K+</h3>
                <p className="text-slate-400">Active Users</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-rose-400 mb-2">1M+</h3>
                <p className="text-slate-400">Videos Created</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
