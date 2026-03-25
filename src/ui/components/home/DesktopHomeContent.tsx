import HomeCarousel from './HomeCarousel';

export default function DesktopHomeContent({ currentSlide, onSlideChange }: { currentSlide: number, onSlideChange: (index: number) => void }) {
  return (
    <main className="hidden md:flex flex-1 w-full flex-col items-center justify-center px-10 overflow-hidden bg-surface-base pb-10 relative">
      <div className="absolute top-[-15%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] bg-border-subtle/30 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="w-full max-w-[1100px] flex items-center justify-between gap-12 lg:gap-20 mb-6 relative z-10">
        <div className="flex-1 relative aspect-square flex items-center justify-center max-w-[550px]">
          <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
            <div className="absolute top-[8%] right-[8%] w-[68%] h-[62%] bg-border-subtle rounded-[50%] rotate-[30deg] blur-[1px]"></div>
            <div className="absolute bottom-[8%] left-[6%] w-[72%] h-[78%] bg-surface-muted/60 rounded-[50%] -rotate-[20deg] blur-[1px]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] h-[55%] bg-primary/10 rounded-full blur-[40px]"></div>
          </div>
          <img src="/images/dishes.png" alt="Dish" className="relative z-10 w-[100%] max-w-[500px] h-auto object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.2)] -translate-x-4 transition-all duration-700 cursor-pointer" />
          <div className="absolute top-[20%] left-[2%] z-20 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-2xl shadow-sm border border-white flex items-center gap-2 animate-bounce"><span className="text-[20px]">🔥</span><span className="text-[12px] font-extrabold text-text-primary tracking-wide">Most Popular</span></div>
          <div className="absolute bottom-[18%] right-[2%] z-20 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-sm border border-white flex items-center gap-3 animate-bounce"><span className="text-[22px]">⭐</span><div className="flex flex-col"><span className="text-[14px] font-extrabold text-text-primary mb-0.5">4.9 / 5</span><span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest leading-none">Rating</span></div></div>
        </div>
        <div className="flex flex-col items-start flex-1 max-w-[420px]">
          <div className="flex items-center gap-3 mb-5"><span className="flex items-center justify-center w-[34px] h-[34px] rounded-full bg-primary/10"><img src="/images/flower_half_logo.png" alt="Logo" className="w-[18px] h-auto object-contain" /></span><span className="text-[12px] text-primary font-bold tracking-[0.25em] uppercase">Chef's Special</span></div>
          <h1 className="text-[52px] lg:text-[60px] font-extrabold text-text-primary leading-[1.05] tracking-tight mb-4">Curry Goat <br/><span className="text-primary pr-2">BOWL</span></h1>
          <p className="text-[14px] font-medium text-text-secondary leading-[1.7] mb-10 max-w-[380px]">Experience authentic Indian spices slow-cooked to perfection with tender goat, premium basmati rice, and fresh paneer.</p>
          <HomeCarousel currentSlide={currentSlide} onSlideChange={onSlideChange} isDesktop />
        </div>
      </div>
    </main>
  );
}
