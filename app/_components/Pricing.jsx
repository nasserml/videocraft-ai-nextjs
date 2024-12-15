import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    features: [
      "5 AI-generated videos per month",
      "720p video quality",
      "Basic editing tools",
      "Standard templates",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    popular: true,
    features: [
      "50 AI-generated videos per month",
      "4K video quality",
      "Advanced editing tools",
      "Premium templates",
      "Priority support",
      "Custom branding",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited AI-generated videos",
      "8K video quality",
      "All Pro features",
      "API access",
      "Dedicated support",
      "Custom integration",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-400 text-xl">
            Choose the perfect plan for your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative bg-slate-800 p-8 rounded-xl ${
                plan.popular ? "border-2 border-rose-500" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-rose-500 text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-4">
                {plan.name}
              </h3>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">
                  {plan.price}
                </span>
                {plan.price !== "Custom" && (
                  <span className="text-slate-400">/month</span>
                )}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-slate-300">
                    <Check className="w-5 h-5 text-rose-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-rose-600 text-white px-6 py-3 rounded-full hover:bg-rose-700 transition-colors">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
