import { useEffect } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { Share2, RotateCcw, ShoppingBag, Activity, Heart, User } from 'lucide-react';
import { Team } from '../data/teams';

interface ResultProps {
  team: Team;
  onRetest: () => void;
}

export function Result({ team, onRetest }: ResultProps) {
  useEffect(() => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: [team.logoColor, '#ffffff', '#39FF14']
      });
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: [team.logoColor, '#ffffff', '#39FF14']
      });
    }, 250);

    return () => clearInterval(interval);
  }, [team]);

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="inline-block px-4 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 font-display tracking-widest text-sm mb-6">
          당신의 결과
        </div>
        
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-2">
          <img 
            src={team.logoUrl} 
            alt={`${team.name} logo`} 
            className="w-16 h-16 md:w-24 md:h-24 object-contain drop-shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <h1 className="text-5xl md:text-7xl font-display font-bold uppercase" style={{ color: team.logoColor, textShadow: `0 0 40px ${team.logoColor}40` }}>
            {team.name}
          </h1>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-300 mb-8 italic">
          "{team.nickname}"
        </h2>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 mb-10 backdrop-blur-sm">
          <p className="text-lg md:text-xl text-zinc-300 leading-relaxed mb-8">
            {team.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-zinc-950 p-5 rounded-2xl border border-zinc-800">
              <div className="flex items-center text-neon-green mb-3">
                <Activity className="w-5 h-5 mr-2" />
                <span className="font-display tracking-wider font-bold">플레이스타일</span>
              </div>
              <p className="font-medium text-zinc-200">{team.playstyle}</p>
            </div>
            
            <div className="bg-zinc-950 p-5 rounded-2xl border border-zinc-800">
              <div className="flex items-center text-neon-green mb-3">
                <Heart className="w-5 h-5 mr-2" />
                <span className="font-display tracking-wider font-bold">분위기</span>
              </div>
              <p className="font-medium text-zinc-200">{team.vibe}</p>
            </div>

            <div className="bg-zinc-950 p-5 rounded-2xl border border-zinc-800">
              <div className="flex items-center text-neon-green mb-3">
                <User className="w-5 h-5 mr-2" />
                <span className="font-display tracking-wider font-bold">레전드 감독</span>
              </div>
              <p className="font-medium text-zinc-200">{team.manager}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onRetest}
            className="flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-full bg-zinc-800 text-white font-bold hover:bg-zinc-700 transition-colors"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            다시하기
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-full bg-neon-green text-zinc-950 font-bold shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_30px_rgba(57,255,20,0.5)] transition-all"
          >
            <ShoppingBag className="w-5 h-5 mr-2" />
            유니폼 구매
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-full bg-[#1877F2] text-white font-bold hover:bg-[#1864D9] transition-colors"
          >
            <Share2 className="w-5 h-5 mr-2" />
            공유하기
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
