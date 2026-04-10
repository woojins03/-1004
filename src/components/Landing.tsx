import { motion } from 'motion/react';
import { Trophy } from 'lucide-react';

interface LandingProps {
  onStart: () => void;
}

export function Landing({ onStart }: LandingProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="mb-8"
      >
        <div className="w-24 h-24 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-neon-green shadow-[0_0_30px_rgba(57,255,20,0.3)]">
          <Trophy className="w-12 h-12 text-neon-green" />
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-wider uppercase mb-4">
          football<span className="text-neon-green">.com</span>
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-lg mx-auto font-medium">
          어떤 유럽 명문 축구 클럽이 당신의 성향과 맞을까요? 궁극의 팬 테스트를 통해 알아보세요.
        </p>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onStart}
        className="bg-neon-green text-zinc-950 font-bold text-xl px-10 py-4 rounded-full shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:shadow-[0_0_30px_rgba(57,255,20,0.6)] transition-all uppercase tracking-widest"
      >
        테스트 시작
      </motion.button>
    </div>
  );
}
