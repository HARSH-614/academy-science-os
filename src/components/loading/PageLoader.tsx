import React from 'react';
import { motion } from 'framer-motion';
import { Atom } from 'lucide-react';

interface PageLoaderProps {
  message?: string;
}

export default function PageLoader({ message = 'Loading...' }: PageLoaderProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[60vh] gap-4">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <Atom size={48} className="text-accent-science" />
      </motion.div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm font-mono tracking-widest text-text-secondary uppercase">
          {message}
        </p>
        {/* Futuristic progress bar simulation */}
        <div className="w-48 h-1 bg-surface-elevated rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-accent-science"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </div>
    </div>
  );
}
