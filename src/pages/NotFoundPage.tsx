import { useNavigate } from 'react-router-dom';
import Button from '../ui/components/Button';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-surface-base flex flex-col items-center justify-center p-6 text-center">
      <div className="flex flex-col items-center max-w-[400px] w-full">
        {/* The Elephant Logo */}
        <div className="w-40 h-40 md:w-48 md:h-48 mb-6 flex items-center justify-center">
          <img 
            src="/images/animated_logo.gif" 
            alt="Sankranti Elephant" 
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Typography following the image reference */}
        <div className="flex flex-col items-center mb-12">
          
          
          {/* "PAGE NOT FOUND" in the bold brand font */}
          <h1 className="text-[38px] md:text-[48px] font-black text-secondary uppercase leading-none tracking-tight mb-2">
            PAGE NOT FOUND
          </h1>
          
       
        </div>

        {/* Action Button */}
        <div className="w-full max-w-[220px]">
          <Button 
            variant="secondary" 
            onClick={() => navigate('/')}
            className="!py-[16px] !text-[12px] font-bold tracking-[0.1em] uppercase shadow-lg shadow-secondary/20 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            GO TO HOME
          </Button>
        </div>
      </div>

      {/* Background Decorative Patterns (Subtle) */}
      <div className="fixed top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none -z-10" style={{ backgroundImage: 'radial-gradient(var(--color-secondary) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
    </main>
  );
}


