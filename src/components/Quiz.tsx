import { motion, AnimatePresence } from 'motion/react';
import { questions, Trait } from '../data/questions';

interface QuizProps {
  currentQuestionIndex: number;
  onAnswer: (trait: Trait) => void;
}

export function Quiz({ currentQuestionIndex, onAnswer }: QuizProps) {
  const question = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / questions.length) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8">
      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex justify-between text-sm font-bold text-zinc-400 mb-2 font-display tracking-widest">
          <span>질문 {currentQuestionIndex + 1}</span>
          <span>{questions.length}</span>
        </div>
        <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-neon-green"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="relative min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={question.id}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center leading-tight">
              {question.text}
            </h2>

            <div className="space-y-4">
              {question.options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(39, 39, 42, 1)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onAnswer(option.trait)}
                  className="w-full text-left p-6 rounded-2xl bg-zinc-900 border-2 border-zinc-800 hover:border-neon-green transition-colors group"
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-zinc-800 text-zinc-400 flex items-center justify-center font-bold mr-4 group-hover:bg-neon-green group-hover:text-zinc-950 transition-colors">
                      {index === 0 ? 'A' : 'B'}
                    </div>
                    <span className="text-lg font-medium text-zinc-200 group-hover:text-white">
                      {option.text}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
