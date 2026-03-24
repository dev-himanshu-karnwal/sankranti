import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/components";
import PanelLayout from "../ui/components/PanelLayout";
import PanelFooter from "../ui/components/PanelFooter";

export default function HomePage() {
  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-scroll carousel every 5 seconds mapping across all 3 slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-surface-base flex flex-col font-['Poppins']">
      <PanelLayout isShowDeliveryOption={true} />
      <main className="flex-1 flex flex-col items-center overflow-y-auto pb-6">
        {/* Title area */}
        <div className="flex flex-col items-center mt-4 px-4">
          <img
            src="/images/flower_half_logo.png"
            alt="Flower Logo"
            className="w-[26px] h-auto object-contain mb-[6px]"
          />
          <span className="text-[11px] text-primary font-normal leading-none tracking-[0.27em] uppercase text-center mb-1">
            Limited Time Only
          </span>
          <h1 className="text-[20px] font-bold  text-text-primary text-center leading-[149%] tracking-normal">
            Curry Goat BOWL
          </h1>
        </div>

        {/* Large dish backdrop overlapping structure */}
        <div className="relative w-full aspect-[4/3] flex items-center justify-center mt-2 max-w-[500px]">
          <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-visible">
            <div className="absolute top-[0%] right-[8%] w-[65%] h-[60%] bg-[#E8D4D8] rounded-[50%] rotate-[30deg]"></div>
            <div className="absolute bottom-[10%] left-[5%] w-[70%] h-[75%] bg-[#F3E8EA] rounded-[50%] -rotate-[20deg]"></div>
          </div>
          <img
            src="/images/dishes.png"
            alt="Curry Goat Bowl Image"
            className="relative z-10 w-[95%] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)] -translate-x-1"
          />
        </div>

        {/* CAROUSEL CONTAINER: Smooth Horizontal Sliding */}
        <div className="relative z-20 bg-surface-subtle w-[294px] h-[280px] mx-auto rounded-[29px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] -mt-16 overflow-hidden">
          {/* Inner sliding track */}
          <div
            className="flex h-full w-[300%] transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform"
            style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
          >
            {/* SLIDE 0: Sankranti Rewards logged out */}
            <div className="w-1/3 h-full flex flex-col items-center justify-center p-6 text-center">
              <span className="text-[12px] text-text-primary font-normal leading-[150%] tracking-normal uppercase text-center mt-1">
                Sankranti Rewards
              </span>

              <h2 className="text-[20px] font-bold tracking-normal text-center text-text-primary mb-6 flex flex-col">
                <span>EAT. EARN.</span>
                <span>GET REWARDED.</span>
              </h2>

              <div className="w-[180px] flex flex-col gap-[14px] mb-6">
                <Button variant="secondary" className="!py-[12px]">
                  JOIN NOW
                </Button>
                <Button variant="primary" className="!py-[12px]">
                  SIGN IN
                </Button>
              </div>

              <Link
                to="#"
                className="text-[12px] text-secondary font-medium leading-[150%] tracking-normal uppercase text-center hover:opacity-80 transition-opacity"
              >
                How Rewards Works
              </Link>
            </div>

            {/* SLIDE 1: Featured Dish Ordering */}
            <div className="w-1/3 h-full flex flex-col items-center justify-center p-6 text-center">
              <div className="flex-1 w-full flex items-center justify-center mb-4 relative top-1">
                <img
                  src="/images/dishes.png"
                  alt="Curry Goat Bowl"
                  className="w-[210px] h-auto object-contain drop-shadow-md"
                />
              </div>
              <div className="w-[180px] mb-2 flex-shrink-0">
                <Button
                  variant="primary"
                  className="!py-[12px] uppercase text-[13px] font-bold tracking-wider w-full"
                >
                  ORDER NOW
                </Button>
              </div>
            </div>

            {/* SLIDE 2: Logged In Account Info */}
            <div className="w-1/3 h-full flex flex-col items-center justify-center p-6 text-center px-4">
              {/* Customer Name */}
              <span className="text-[12px] text-text-primary uppercase tracking-wide mb-1 font-medium">
                CUSTOMER NAME
              </span>

              {/* Points */}
              <div className="flex flex-col items-center mb-8 text-text-primary">
                <span className="text-[20px] mb-0.5 leading-tight">
                  You've Got
                </span>
                <span className="text-[28px] font-bold leading-none tracking-tight">
                  10 POINTS
                </span>
              </div>

              {/* About Rewards Button */}
              <div className="w-[180px] mb-8 flex-shrink-0">
                <Button
                  variant="primary"
                  className="!py-[12px] uppercase text-[13px] font-bold tracking-wider w-full"
                >
                  ABOUT REWARDS
                </Button>
              </div>

              {/* Rewards Exchange Text */}
              <div className="flex flex-col items-center text-secondary">
                <span className="text-[12px] font-bold uppercase tracking-wide">
                  REWARDS EXCHANGE
                </span>
                <span className="text-[13px] font-medium mt-0.5">
                  Redeem your points
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Carousel Indicators mapping implicitly by number of total slides configured */}
        <div className="flex justify-center items-center gap-[6px] mt-8">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 transition-all duration-300 rounded-full bg-secondary ${currentSlide === index ? "w-5" : "w-1.5 opacity-80"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </main>
      <PanelFooter />
    </div>
  );
}
