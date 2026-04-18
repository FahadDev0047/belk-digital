import { motion } from "framer-motion";

interface ShinyTextProps {
  text: string;
}

export function ShinyText({ text }: ShinyTextProps) {
  return (
    <motion.span
      style={{
        backgroundImage: 'linear-gradient(100deg, #64CEFB 0%, #64CEFB 40%, #ffffff 50%, #64CEFB 60%, #64CEFB 100%)',
        backgroundSize: '200% auto',
        color: 'transparent',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
      }}
      animate={{
        backgroundPosition: ['200% center', '-200% center'],
      }}
      transition={{
        duration: 3,
        ease: 'linear',
        repeat: Infinity,
      }}
      className="inline-block"
    >
      {text}
    </motion.span>
  );
}
