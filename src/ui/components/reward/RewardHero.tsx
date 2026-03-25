import { useNavigate } from 'react-router-dom';
import { AppButton } from '../index';

export default function RewardHero() {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-surface-base flex flex-col items-center">
      <div className="w-full max-w-[1200px] pt-12 md:pt-16 pb-12 px-6 flex flex-col items-center relative">
        <AppButton onClick={() => navigate(-1)} className="!w-auto md:hidden absolute top-12 left-6 !p-2 -ml-2 !justify-center bg-white/50 rounded-full">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><path d="m15 18-6-6 6-6"/></svg>
        </AppButton>
        <div className="mb-4"><img src="/images/flower_half_logo.png" alt="Sankranti Logo" className="w-[40px] md:w-[50px] h-auto object-contain" /></div>
        <h2 className="text-[14px] md:text-[16px] font-medium text-text-primary tracking-wide mb-1">You've Got</h2>
        <h1 className="text-[28px] md:text-[42px] font-extrabold text-black tracking-tight leading-none mb-10 md:mb-12">10 POINTS</h1>
        <div className="w-full max-w-[280px] md:max-w-[320px]">
          <div className="border-[1.5px] border-secondary text-secondary py-2.5 md:py-3.5 rounded-full flex items-center justify-center text-[13px] md:text-[14px] font-extrabold tracking-[0.15em] transition-all cursor-pointer bg-white/30 backdrop-blur-sm">FOOD</div>
        </div>
      </div>
    </div>
  );
}
