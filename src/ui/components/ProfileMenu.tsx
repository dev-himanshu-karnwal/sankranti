import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';


const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18L9 12L15 6" />
  </svg>
);

const ChevronRightIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ProfileUserIcon = () => (
  <svg width="23" height="27" viewBox="0 0 23 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.5001 0C15.3048 0 18.4001 3.09534 18.4001 6.9C18.4001 10.7047 15.3048 13.8 11.5001 13.8C7.69549 13.8 4.60015 10.7047 4.60015 6.9C4.60015 3.09534 7.69549 0 11.5001 0ZM11.5001 12.2667C14.4593 12.2667 16.8668 9.85918 16.8668 6.9C16.8668 3.94082 14.4593 1.53333 11.5001 1.53333C8.54097 1.53333 6.13348 3.94082 6.13348 6.9C6.13348 9.85918 8.54097 12.2667 11.5001 12.2667Z" fill="currentColor"/>
    <path d="M2.91507 18.3067C4.80414 16.3886 7.30843 15.3323 9.96667 15.3323H13.0333C15.6915 15.3323 18.1959 16.3886 20.0849 18.3067C21.9647 20.2154 23 22.7349 23 25.4012C23 25.8246 22.6567 26.1678 22.2333 26.1678H0.766666C0.343264 26.1678 0 25.8246 0 25.4012C0 22.7349 1.03526 20.2154 2.91507 18.3067ZM21.4329 24.6345C21.0488 20.2857 17.4283 16.8656 13.0333 16.8656H9.96667C5.57167 16.8656 1.95117 20.2857 1.56707 24.6345H21.4329Z" fill="currentColor"/>
  </svg>
);


const MAIN_MENU_ITEMS = [
  { label: 'Sankranti Rewards', isAction: true },
  { label: 'Orders' },
  { label: 'Find Nearest Sankranti' },
  { label: 'Notifications' },
  { label: 'User Preferences' },
];

const REWARDS_MENU_ITEMS = [
  { label: 'Order History' },
  { label: 'Payment Methods' },
  { label: 'Personal & Preferences' },
  { label: 'Find a Sankranti' },
  { label: 'Our Commitment To You' },
];


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
      className={`fixed inset-0 z-[60] bg-surface-muted transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] transform will-change-transform ${
        isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >

      <div className="h-full flex flex-col pt-10 overflow-x-hidden overflow-y-auto relative [&::-webkit-scrollbar]:hidden">
        

        {/* TOP ROW: Back, Profile, Close exactly on one line */}
        <div className="flex items-center justify-between px-6 mb-5 flex-shrink-0 relative z-20 min-h-[44px]">
          
          <button 
            onClick={() => setView('main')}
            className={`text-secondary p-2 transition-opacity duration-300 ${
              view === 'rewards' ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
            }`}
          >
            <ChevronLeftIcon />
          </button>

          <div className="absolute left-1/2 -translate-x-1/2 text-secondary flex items-center justify-center h-full">
            <ProfileUserIcon />
          </div>

          <button onClick={onClose} className="text-secondary hover:scale-110 transition-transform p-2">
            <CloseIcon />
          </button>
        </div>

        {/* LOGO */}
        <div className="flex justify-center mb-8 flex-shrink-0 relative z-10 px-8">
          <img src="/images/profile.png" alt="Sankranti Logo" className="w-[143px] object-contain" />
        </div>

       
        <div 
          className="flex w-[200%] flex-1 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform"
          style={{ transform: view === 'rewards' ? 'translateX(-50%)' : 'translateX(0%)' }}
        >
    
          <div className="w-1/2 flex flex-col">
            <div className="flex flex-col justify-center items-center gap-[14px] mb-12 px-8">
              <Button variant="secondary" className="!py-[12px] !w-[160px] uppercase text-[12px] font-bold tracking-wide">Create Account</Button>
              <Button variant="primary" className="!py-[12px] !w-[160px] uppercase text-[12px] font-bold tracking-wide">Sign In</Button>
            </div>

            <ul className="flex flex-col">
              {MAIN_MENU_ITEMS.map((item, index) => (
                <li key={index} className="border-t border-[#E8D4D8] first:border-t-0 border-b border-[#E8D4D8] -mb-[1px]">
                  <button 
                    onClick={() => item.isAction && setView('rewards')}
                    className="w-full flex items-center justify-between py-5 px-8 group text-left transition-colors hover:bg-black/[0.02]"
                  >
                    <span className="text-[13px] font-medium text-text-secondary">{item.label}</span>
                    <span className="text-text-secondary transition-transform group-hover:translate-x-1 duration-300">
                      <ChevronRightIcon />
                    </span>
                  </button>
                </li>
              ))}
            </ul>

      
            <div className="flex-1 bg-surface-subtle mt-3 pt-8 px-8">
              <Footer className="mt-4" />
            </div>
          </div>

         
          <div className="w-1/2 flex flex-col">
            
        
            <div className="flex flex-col items-center mb-8 drop-shadow-sm px-8">
              <span className="text-[18px] text-text-primary text-center mb-0.5">You've Got</span>
              <span className="text-[32px] font-bold text-text-primary text-center leading-none tracking-tight">10 POINTS</span>
            </div>

     
            <ul className="flex flex-col">
              <RewardFeatureItem title="REWARDS EXCHANGE" subtitle="Redeem your points" isTop />
              <RewardFeatureItem title="MY REWARDS" subtitle="Ready to use" />
              <RewardFeatureItem title="ABOUT REWARDS" />
            </ul>

        
            <div className="flex-1 bg-surface-subtle shadow-sm">
              <ul className="flex flex-col">
                {REWARDS_MENU_ITEMS.map((item, index) => (
                  <li key={index} className="border-b border-[#E8D4D8]">
                    <button className="w-full flex items-center justify-between py-5 px-8 group text-left transition-colors hover:bg-black/[0.02]">
                      <span className="text-[13px] font-medium text-text-secondary">{item.label}</span>
                      <span className="text-text-secondary transition-transform group-hover:translate-x-1 duration-300">
                         <ChevronRightIcon size={18} />
                      </span>
                    </button>
                  </li>
                ))}
                
               
                <li className="border-b border-[#E8D4D8]">
                  <button className="w-full flex items-center justify-between py-5 px-8 text-left transition-colors hover:bg-black/[0.02]">
                    <span className="text-[12px] font-bold text-primary tracking-wide">Log Out</span>
                  </button>
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
    <li className={`border-b border-[#E8D4D8] ${isTop ? 'border-t' : ''}`}>
      <button className={`w-full flex flex-col items-start px-8 text-left transition-colors hover:bg-black/[0.02] ${subtitle ? 'py-[14px]' : 'py-5'}`}>
        <span className="text-[11px] font-bold text-text-secondary uppercase tracking-wide">{title}</span>
        {subtitle && <span className="text-[11px] text-text-secondary font-medium leading-normal opacity-70 mt-0.5">{subtitle}</span>}
      </button>
    </li>
  );
}

function Footer({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-start gap-4 ${className}`}>
      <div className="text-[11px] font-medium text-text-secondary opacity-60 tracking-wide">©Copyright2026 Sankranti</div>
      <div className="flex flex-col gap-3">
        <Link to="#" className="text-[10px] font-bold text-secondary uppercase tracking-widest hover:opacity-75 transition-opacity">Privacy Policy</Link>
        <Link to="#" className="text-[10px] font-bold text-secondary uppercase tracking-widest hover:opacity-75 transition-opacity">Terms of Service</Link>
      </div>
      <div className="text-[11px] font-medium text-text-secondary opacity-60 tracking-wide mt-1">App version: 1.3</div>
    </div>
  );
}
