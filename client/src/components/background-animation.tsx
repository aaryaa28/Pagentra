import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function BackgroundAnimation() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Base Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      
      {/* Ambient Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-transparent to-background" />
      
      {/* Animated Glowing Orbs */}
      <motion.div 
        animate={{ 
          x: [0, 100, 0], 
          y: [0, 50, 0],
          opacity: [0.1, 0.3, 0.1] 
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full mix-blend-screen"
      />
      
      <motion.div 
        animate={{ 
          x: [0, -100, 0], 
          y: [0, -50, 0],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-secondary/5 blur-[150px] rounded-full mix-blend-screen"
      />

      {/* Digital Rain / Data Stream Effect */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 w-[1px] bg-gradient-to-b from-transparent via-primary to-transparent"
            style={{
              left: `${15 + i * 15}%`,
              height: "20vh",
              opacity: 0.2
            }}
            animate={{
              y: ["-100vh", "100vh"],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Interactive Cursor Glow */}
      <motion.div
        className="fixed top-0 left-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5
        }}
      />
      
      {/* Scanning Line */}
      <motion.div
        className="absolute top-0 left-0 w-full h-[2px] bg-primary/20 shadow-[0_0_20px_rgba(6,182,212,0.5)]"
        animate={{
          top: ["0%", "100%"],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
}
