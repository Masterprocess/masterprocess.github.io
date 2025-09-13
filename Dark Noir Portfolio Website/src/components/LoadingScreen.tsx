import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  
  const phases = [
    'Initializing Creative Engine...',
    'Loading Portfolio Assets...',
    'Calibrating Visual Systems...',
    'Preparing Experience...'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        
        if (newProgress >= 25 && currentPhase === 0) setCurrentPhase(1);
        if (newProgress >= 50 && currentPhase === 1) setCurrentPhase(2);
        if (newProgress >= 75 && currentPhase === 2) setCurrentPhase(3);
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        
        return newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [currentPhase, onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 bg-black z-50 flex items-center justify-center film-grain"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 text-center max-w-md mx-auto px-6">
        {/* Logo Animation */}
        <div className="mb-12">
          <motion.div
            className="w-24 h-24 mx-auto mb-6 relative"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="absolute inset-0 border-4 border-red-500 rounded-full animate-pulse" />
            <div className="absolute inset-2 border-2 border-white rounded-full animate-spin" style={{ animationDuration: '3s' }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">CD</span>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-3xl font-bold text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Creative Director
          </motion.h1>
        </div>

        {/* Loading Progress */}
        <div className="space-y-6">
          {/* Phase Text */}
          <motion.p 
            key={currentPhase}
            className="text-gray-300 font-mono text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {phases[currentPhase]}
          </motion.p>

          {/* Progress Bar */}
          <div className="relative">
            <div className="w-full h-0.5 bg-gray-800 overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-red-500 to-red-600"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
            
            {/* Progress Percentage */}
            <div className="flex justify-between mt-2 text-xs font-mono text-gray-500">
              <span>00</span>
              <span>{Math.round(progress).toString().padStart(2, '0')}</span>
              <span>100</span>
            </div>
          </div>

          {/* Scanning Animation */}
          <div className="flex items-center justify-center space-x-1 mt-8">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-1 bg-red-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">
            Crafting Digital Experiences
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}