import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import AppButton from './AppButton';
import { ChevronLeftIcon, CloseIcon,ProfileUserIcon  } from '../../icons/icon';
import { MAIN_MENU_ITEMS, REWARDS_MENU_ITEMS } from '../../data/profile';

const ChevronRightIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


export default function ProfileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [view, setView] = useState<'main' | 'rewards'>('main');

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => setView('main'), 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <div 
      className={`fixed inset-0 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] transform bg-white ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{ backgroundColor: '#ffffff', zIndex: 99999 }}
    >

      <div className="h-full flex flex-col overflow-x-hidden overflow-y-auto relative [&::-webkit-scrollbar]:hidden pb-8">
        
        {/* TOP ROW: Back, Profile, Close exactly on one line - now forcefully STICKY */}
        <div className="sticky top-0 left-0 w-full z-50 bg-[#FCF6EB] flex items-center justify-between px-6 pt-10 pb-4 flex-shrink-0 min-h-[80px]">
          
          <AppButton 
            onClick={() => setView('main')}
            className={`!w-auto !p-2 text-secondary transition-opacity duration-300 hover:bg-transparent ${
              view === 'rewards' ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
            }`}
          >
            <ChevronLeftIcon /> 
          </AppButton>

          <div className="absolute left-1/2 -translate-x-1/2 text-secondary flex items-center justify-center h-full top-0 pt-7">
            <ProfileUserIcon />
          </div>

          <AppButton onClick={onClose} className="!w-auto !p-2 text-secondary hover:scale-110 transition-transform hover:bg-transparent">
            <CloseIcon />
          </AppButton>
        </div>

        {/* LOGO AREA */}
        <div className="bg-[#FCF6EB] flex justify-center flex-shrink-0 relative z-10 px-8 pb-2">
          <img src="/images/profile.png" alt="Sankranti Logo" className="w-[143px] object-contain" />
        </div>

       
        <div 
          className="flex w-[200%] flex-1 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform"
          style={{ transform: view === 'rewards' ? 'translateX(-50%)' : 'translateX(0%)' }}
        >
    
          <div className="w-1/2 flex flex-col min-h-full">
            <div className="bg-[#FCF6EB] pb-2">
              <div className="flex flex-col justify-center items-center gap-[14px] mb-8 px-8 pt-4">
                <Button variant="secondary" className="!py-[12px] !w-[160px] uppercase text-[12px] font-bold tracking-wide">Create Account</Button>
                <Button variant="primary" className="!py-[12px] !w-[160px] uppercase text-[12px] font-bold tracking-wide">Sign In</Button>
              </div>

              <ul className="flex flex-col">
                {MAIN_MENU_ITEMS.map((item, index) => (
                  <li key={index} className="border-t border-border-subtle first:border-t-0 border-b border-border-subtle -mb-[1px]">
                    <AppButton 
                      onClick={() => item.isAction && setView('rewards')}
                      className="!w-full flex items-center justify-between !py-4 !px-8 group text-left transition-colors hover:bg-black/[0.02]"
                    >
                      <span className="text-[13px] font-medium text-text-secondary">{item.label}</span>
                      <span className="text-text-secondary transition-transform group-hover:translate-x-1 duration-300">
                        <ChevronRightIcon />
                      </span>
                    </AppButton>
                  </li>
                ))}
              </ul>
            </div>

      
            <div className="flex-1 mt-3 pt-6 px-8">
              <Footer className="mt-2" />
            </div>
          </div>

         
          <div className="w-1/2 flex flex-col min-h-full">
            <div className="bg-[#FCF6EB] pb-2">
              <div className="flex flex-col items-center mb-4 px-8 pt-6">
                <span className="text-[18px] text-text-primary text-center mb-0.5">You've Got</span>
                <span className="text-[32px] font-bold text-text-primary text-center leading-none tracking-tight">10 POINTS</span>
              </div>

              <ul className="flex flex-col">
                <RewardFeatureItem title="REWARDS EXCHANGE" subtitle="Redeem your points" isTop />
                <RewardFeatureItem title="MY REWARDS" subtitle="Ready to use" />
                <RewardFeatureItem title="ABOUT REWARDS" />
              </ul>
            </div>

            <div className="flex-1 bg-white">
              <ul className="flex flex-col">
                {REWARDS_MENU_ITEMS.map((item, index) => (
                  <li key={index} className="border-b border-border-subtle">
                    <AppButton className="!w-full flex items-center justify-between !py-4 !px-8 group text-left transition-colors hover:bg-black/[0.02]">
                      <span className="text-[13px] font-medium text-text-secondary">{item.label}</span>
                      <span className="text-text-secondary transition-transform group-hover:translate-x-1 duration-300">
                        <ChevronRightIcon size={18} />
                      </span>
                    </AppButton>
                  </li>
                ))}
                <li >
                  <AppButton className="!w-full flex items-center justify-between !py-4 !px-8 text-left transition-colors hover:bg-black/[0.02]">
                    <span className="text-[12px] font-bold text-primary tracking-wide">Log Out</span>
                  </AppButton>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



function RewardFeatureItem({ title, subtitle, isTop = false }: { title: string; subtitle?: string; isTop?: boolean }) {
  return (
    <li className={`border-b border-border-subtle ${isTop ? 'border-t' : ''}`}>
      <AppButton className={`!w-full flex flex-col items-start !px-8 text-left transition-colors hover:bg-black/[0.02] ${subtitle ? '!py-3' : '!py-4'}`}>
        <span className="text-[11px] font-bold text-text-secondary uppercase tracking-wide">{title}</span>
        {subtitle && <span className="text-[11px] text-text-secondary font-medium leading-normal opacity-70 mt-0.5">{subtitle}</span>}
      </AppButton>
    </li>
  );
}

function Footer({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-start gap-4 z-1 ${className}`}>
      <div className="text-[11px] font-medium text-text-secondary opacity-60 tracking-wide">©Copyright2026 Sankranti</div>
      <div className="flex flex-col">
        <Link to="#" className="text-[10px] font-bold text-secondary uppercase tracking-widest hover:opacity-75 transition-opacity">Privacy Policy</Link>
        <Link to="#" className="text-[10px] font-bold text-secondary uppercase tracking-widest hover:opacity-75 transition-opacity">Terms of Service</Link>
      </div>
      <div className="text-[11px] font-medium text-text-secondary opacity-60 tracking-wide">App version: 1.3</div>
    </div>
  );
}
