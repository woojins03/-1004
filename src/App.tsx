import { useState } from 'react';
import { Landing } from './components/Landing';
import { Quiz } from './components/Quiz';
import { Result } from './components/Result';
import { Trait, questions } from './data/questions';
import { teams, Team } from './data/teams';
import { Trophy } from 'lucide-react';

type Step = 'landing' | 'quiz' | 'result';

export default function App() {
  const [step, setStep] = useState<Step>('landing');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Trait[]>([]);
  const [resultTeam, setResultTeam] = useState<Team | null>(null);

  const handleStart = () => {
    setStep('quiz');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResultTeam(null);
  };

  const handleAnswer = (trait: Trait) => {
    const newAnswers = [...answers, trait];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: Trait[]) => {
    const counts: Record<Trait, number> = {
      E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0
    };

    finalAnswers.forEach(trait => {
      counts[trait]++;
    });

    const mbti = [
      counts.E > counts.I ? 'E' : 'I',
      counts.S > counts.N ? 'S' : 'N',
      counts.T > counts.F ? 'T' : 'F',
      counts.J > counts.P ? 'J' : 'P'
    ].join('');

    // Fallback to a default team if the exact MBTI isn't mapped (though we mapped all 16)
    const team = teams[mbti] || teams['ENTJ'];
    setResultTeam(team);
    setStep('result');
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans flex flex-col">
      <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => setStep('landing')}
          >
            <Trophy className="w-6 h-6 text-neon-green mr-2 group-hover:scale-110 transition-transform" />
            <span className="font-display font-bold text-2xl tracking-wider uppercase">
              football<span className="text-neon-green">.com</span>
            </span>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center">
        {step === 'landing' && <Landing onStart={handleStart} />}
        {step === 'quiz' && (
          <Quiz 
            currentQuestionIndex={currentQuestionIndex} 
            onAnswer={handleAnswer} 
          />
        )}
        {step === 'result' && resultTeam && (
          <Result 
            team={resultTeam} 
            onRetest={handleStart} 
          />
        )}
      </main>
    </div>
  );
}
