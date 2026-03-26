import HomeCarousel from './HomeCarousel';

export default function MobileHomeContent({ currentSlide, onSlideChange }: { currentSlide: number, onSlideChange: (i: number) => void }) {
  return (
    <main className="md:hidden flex-1 flex flex-col items-center overflow-y-auto pb-6">
      <div className="flex flex-col items-center mt-4 px-4">
        <img src="/images/flower_half_logo.png" alt="Flower Logo" className="w-[26px] h-auto object-contain mb-[6px]" />
        <span className="text-[11px] text-primary font-normal leading-none tracking-[0.27em] uppercase text-center mb-1">Limited Time Only</span>
        <h1 className="text-[20px] font-bold text-text-primary text-center leading-[149%] tracking-normal">Curry Goat BOWL</h1>
      </div>
      <div className="relative w-full aspect-[4/3] flex items-center justify-center mt-2 max-w-[500px]">
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-visible">
          <div className="absolute top-[0%] right-[8%] w-[65%] h-[60%] bg-border-subtle rounded-[50%] rotate-[30deg]"></div>
          <div className="absolute bottom-[10%] left-[5%] w-[70%] h-[75%] bg-surface-muted/60 rounded-[50%] -rotate-[20deg]"></div>
        </div>
        <img src="/images/dishes.png" alt="Dish" className="relative z-10 w-[95%] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)] -translate-x-1" />
      </div>
      <HomeCarousel currentSlide={currentSlide} onSlideChange={onSlideChange} />
    </main>
  );
}
