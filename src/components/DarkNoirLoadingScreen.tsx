import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const phases = [
  'Initializing Creative Engine...',
  'Loading Portfolio Assets...',
  'Calibrating Visual Systems...',
  'Preparing Experience...',
];

const DarkNoirLoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setProgress(previous => {
        const next = previous + Math.random() * 15;

        if (next >= 25 && currentPhase === 0) {
          setCurrentPhase(1);
        }
        if (next >= 50 && currentPhase === 1) {
          setCurrentPhase(2);
        }
        if (next >= 75 && currentPhase === 2) {
          setCurrentPhase(3);
        }

        if (next >= 100) {
          window.clearInterval(interval);
          window.setTimeout(onComplete, 500);
          return 100;
        }

        return next;
      });
    }, 100);

    return () => window.clearInterval(interval);
  }, [currentPhase, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black film-grain"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-md px-6 text-center">
        <div className="mb-12">
          <motion.div
            className="relative mx-auto mb-6 h-24 w-24"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <div className="absolute inset-0 rounded-full border-4 border-red-500 animate-pulse" />
            <div className="absolute inset-2 rounded-full border-2 border-white animate-spin" style={{ animationDuration: '3s' }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">CD</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-3xl font-bold tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Creative Director
          </motion.h1>
        </div>

        <div className="space-y-6">
          <motion.p
            key={currentPhase}
            className="text-sm font-mono text-gray-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {phases[currentPhase]}
          </motion.p>

          <div className="relative">
            <div className="h-0.5 w-full overflow-hidden bg-gray-800">
              <motion.div
                className="h-full bg-gradient-to-r from-red-500 to-red-600"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
            <div className="mt-2 flex justify-between text-xs font-mono text-gray-500">
              <span>00</span>
              <span>{Math.round(progress).toString().padStart(2, '0')}</span>
              <span>100</span>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center space-x-1">
            {[...Array(3)].map((_, index) => (
              <motion.div
                key={index}
                className="h-1 w-1 rounded-full bg-red-500"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 transform text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-xs font-mono uppercase tracking-wider text-gray-500">Crafting Digital Experiences</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DarkNoirLoadingScreen;
