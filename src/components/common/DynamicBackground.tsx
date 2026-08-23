import React from 'react';
import { motion } from 'framer-motion';

export default function DynamicBackground() {
  // CSS fallback used if user prefers reduced motion (handled via CSS media query typically)
  // For the foundation, we use a highly performant static gradient + subtle animation
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-background">
      {/* Sci-fi Grid Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgwem0yMCAyMGMwIDExLjA0Ni04Ljk1NCAyMC0yMCAyMFYwYzExLjA0NiAwIDIwIDguOTU0IDIwIDIwem0wIDBjMTEuMDQ2IDAgMjAgOC45NTQgMjAgMjBoLTIwYy0xMS4wNDYgMC0yMC04Ljk1NC0yMC0yMHoiIGZpbGw9IiMzOGJkZjgiIGZpbGwtb3BhY2l0eT0iMC4wNSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] opacity-20"></div>
      
      {/* Subtle Animated Glowing Orbs */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-accent-primary/20 blur-[100px]"
      />
      
      <motion.div 
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-[40%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-accent-secondary/20 blur-[120px]"
      />
    </div>
  );
}
