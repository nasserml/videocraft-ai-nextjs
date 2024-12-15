import { motion } from "framer-motion";

export default function Butterfly({ delay = 0, duration = 20, size = 30 }) {
  const path =
    "M12 1c-3 0-6 2-7.5 5L1 8.5l3.5 2.5C6 14 9 16 12 16s6-2 7.5-5l3.5-2.5L19.5 6C18 3 15 1 12 1zm0 2c2.5 0 4.5 1.5 5.5 3.5L12 9.5 6.5 6.5C7.5 4.5 9.5 3 12 3z";

  const flyPath = {
    x: [0, 100, -50, 150, 0],
    y: [0, -50, 100, -100, 0],
    rotate: [0, 15, -15, 20, 0],
  };

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className="absolute text-rose-400/30"
      initial={{ opacity: 0 }}
      animate={{
        ...flyPath,
        opacity: [0.4, 0.6, 0.4],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <motion.path
        d={path}
        fill="currentColor"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </motion.svg>
  );
}
