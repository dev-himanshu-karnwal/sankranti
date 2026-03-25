import { Link } from 'react-router-dom';
import Button from '../Button';
import { AppButton } from '../index';

interface HomeCarouselProps {
  currentSlide: number;
  onSlideChange: (index: number) => void;
  isDesktop?: boolean;
}

export default function HomeCarousel({ currentSlide, onSlideChange, isDesktop = false }: HomeCarouselProps) {
  const containerClass = isDesktop 
    ? "relative z-20 bg-surface-subtle w-full max-w-[340px] h-[310px] rounded-[32px] shadow-[0_12px_45px_rgba(0,0,0,0.06)] overflow-hidden hover:shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition-shadow duration-500"
    : "relative z-20 bg-surface-subtle w-[294px] h-[280px] mx-auto rounded-[29px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] -mt-16 overflow-hidden";
  
  const slidePadding = isDesktop ? "p-8" : "p-6";
  const buttonPadding = isDesktop ? "py-[14px]" : "py-[12px]";

  return (
    <div className="flex flex-col items-center">
      <div className={containerClass}>
        <div className="flex h-full w-[300%] transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform" style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}>
          {/* SLIDE 0 */}
          <div className={`w-1/3 h-full flex flex-col items-center justify-center ${slidePadding} text-center`}>
            <span className="text-[12px] md:text-[13px] text-text-primary uppercase tracking-wide mb-2">Sankranti Rewards</span>
            <h2 className="text-[20px] md:text-[24px] font-bold text-text-primary mb-6 md:mb-8 leading-tight">EAT. EARN.<br/>GET REWARDED.</h2>
            <div className={`w-[180px] md:w-[200px] flex flex-col gap-4 mb-6 md:mb-8`}>
              <Button variant="secondary" className={`!${buttonPadding}`}>JOIN NOW</Button>
              <Button variant="primary" className={`!${buttonPadding}`}>SIGN IN</Button>
            </div>
            <Link to="#" className="text-[12px] md:text-[13px] text-secondary font-medium tracking-wide hover:underline">How Rewards Works</Link>
          </div>
          {/* SLIDE 1 */}
          <div className={`w-1/3 h-full flex flex-col items-center justify-center ${slidePadding} text-center`}>
            <div className="flex-1 w-full flex items-center justify-center mb-4 md:mb-6 relative"><img src="/images/dishes.png" alt="Curry Goat Bowl" className="w-[210px] md:w-[230px] h-auto object-contain drop-shadow-md" /></div>
            <div className="w-[180px] md:w-[200px] mb-2 flex-shrink-0"><Button variant="primary" className={`!${buttonPadding} uppercase text-[13px] md:text-[14px] font-bold tracking-widest w-full`}>ORDER NOW</Button></div>
          </div>
          {/* SLIDE 2 */}
          <div className={`w-1/3 h-full flex flex-col items-center justify-center ${slidePadding} text-center`}>
            <span className="text-[12px] md:text-[13px] text-text-primary uppercase tracking-wide mb-2 font-medium">CUSTOMER NAME</span>
            <div className="flex flex-col items-center mb-8 md:mb-10 text-text-primary">
              <span className="text-[20px] md:text-[22px] mb-1 leading-tight">You've Got</span>
              <span className="text-[28px] md:text-[32px] font-bold leading-none tracking-tight">10 POINTS</span>
            </div>
            <div className="w-[180px] md:w-[200px] mb-8 flex-shrink-0"><Button variant="primary" className={`!${buttonPadding} uppercase text-[13px] md:text-[14px] font-bold tracking-widest w-full`}>ABOUT REWARDS</Button></div>
            <div className="flex flex-col items-center text-secondary">
              <span className="text-[12px] md:text-[13px] font-bold uppercase tracking-wide">REWARDS EXCHANGE</span>
              <span className="text-[13px] md:text-[14px] font-medium mt-1">Redeem your points</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 mt-8 w-full px-2">
        {[0, 1, 2].map((idx) => (
          <AppButton key={idx} onClick={() => onSlideChange(idx)} className={`!p-0 !min-h-0 !min-w-0 !justify-center h-1.5 transition-all duration-300 rounded-full bg-secondary ${currentSlide === idx ? 'w-6 !w-6' : 'w-1.5 !w-1.5 opacity-80'}`} aria-label={`Slide ${idx + 1}`} />
        ))}
      </div>
    </div>
  );
}
