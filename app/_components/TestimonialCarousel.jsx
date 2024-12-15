import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Content Creator",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    content:
      "VideoCraft AI has revolutionized my content creation process. What used to take hours now takes minutes!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    content:
      "The quality of videos we produce with VideoCraft AI has improved dramatically while cutting our production time in half.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Social Media Manager",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    content:
      "This tool is a game-changer for creating engaging social media content quickly and efficiently.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "YouTuber",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    content:
      "The AI understands exactly what I need and delivers professional results every time.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "Brand Manager",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80",
    content:
      "VideoCraft AI has become an essential part of our brand's content strategy.",
    rating: 5,
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrent(
      (current + newDirection + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 h-full">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute w-full"
        >
          <div className="bg-slate-800 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-white">
                  {testimonials[current].name}
                </h3>
                <p className="text-slate-400">{testimonials[current].role}</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <p className="text-slate-300 text-lg">
              {testimonials[current].content}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        className="absolute left-0 top-3/4 mt-24 -translate-y-1/2 -translate-x-12 bg-rose-600 p-2 rounded-full text-white"
        onClick={() => paginate(-1)}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        className="absolute right-0 top-3/4 mt-24 -translate-y-1/2 translate-x-20 bg-rose-600 p-2 rounded-full text-white"
        onClick={() => paginate(1)}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
