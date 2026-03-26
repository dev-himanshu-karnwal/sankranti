import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import AppButton from './AppButton';
import { CloseIcon, ChevronRightIcon, CheckboxCheckedIcon, CheckboxUncheckedIcon, BannerStar, LineItem } from '../../icons/icon';

export default function CartMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const navigate = useNavigate();
  const [isNapkinsChecked, setIsNapkinsChecked] = useState(true);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div 
      className={`fixed inset-0 z-[99999] flex justify-end transition-opacity duration-500 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div 
        className="absolute inset-0 bg-black/40 transition-opacity duration-500"
        onClick={onClose}
      />

      <div 
        className={`relative w-full md:w-[420px] h-full shadow-2xl flex flex-col transform transition-transform duration-500 ease-[cubic-bezier(0.3,0,0,1)] z-[100] isolate ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ backgroundColor: '#ffffff', opacity: 1, transform: `translateZ(999px) ${isOpen ? 'translateX(0)' : 'translateX(100%)'}` }}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-5 flex-shrink-0">
          <div className="w-8" />
          <h2 className="text-secondary text-[16px] font-bold uppercase tracking-widest underline decoration-2 underline-offset-4 pointer-events-none">
            CART
          </h2>
          <AppButton onClick={onClose} className="!w-auto !p-0 flex justify-end text-text-secondary hover:text-text-primary transition-colors hover:bg-transparent">
            <CloseIcon />
          </AppButton>
        </div>

        <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden pb-15">
          <div className="px-8 pt-4 pb-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-[18px] font-medium text-text-primary">Curry Bowl</h3>
              <span className="text-[16px] font-medium text-text-primary">$14.95</span>
            </div>
            
            <p className="text-[9px] text-text-secondary leading-[1.4] mb-8 pr-4">
              Ghee Rice, Chicken Tikka, Tikka Sauce,<br/>
              Kurman Sauce,Red Onions, Tomatoes,Carrots and Gulab Jamun (2)
            </p>

            <div className="flex flex-col gap-3 mb-8">
              <LineItem label="Base (Ghee Rice)" price="$2.00" />
              <LineItem label="Protein (Chicken Tikka)" price="$2.00" />
              <LineItem label="Curry Sauce (Tikka Sauce)" price="$2.00" />
              <LineItem label="Curry Sauce (Kurman Sauce)" price="$2.00" />
              <LineItem label="Toppings (Lettuce)" price="$2.00" />
              <LineItem label="Toppings (Red Onions)" price="$2.00" />
              <LineItem label="Toppings (Tomatoes)" price="$2.00" />
              <LineItem label="Toppings (Carrots)" price="$2.00" />
              <LineItem label="Gulab Jamun (2)" price="$2.00" />
            </div>

            <div className="flex items-center gap-6 mb-8">
              <AppButton className="!w-auto !p-0 text-[11px] font-medium text-text-primary uppercase underline underline-offset-4 decoration-[1px] hover:text-primary transition-colors hover:bg-transparent">REMOVE</AppButton>
              <AppButton className="!w-auto !p-0 text-[11px] font-medium text-text-primary uppercase underline underline-offset-4 decoration-[1px] hover:text-primary transition-colors hover:bg-transparent">EDIT</AppButton>
              <AppButton className="!w-auto !p-0 text-[11px] font-medium text-text-primary uppercase underline underline-offset-4 decoration-[1px] hover:text-primary transition-colors hover:bg-transparent">DUPLICATE</AppButton>
            </div>
            
            <div className="w-full border-t border-border-subtle mb-6"></div>

            <div className="flex items-center justify-between mb-6 cursor-pointer" onClick={() => setIsNapkinsChecked(!isNapkinsChecked)}>
              <span className="text-[12px] font-medium text-text-primary select-none hover:opacity-80 transition-opacity">Include Napkins & Utensils</span>
              <AppButton className="!w-auto !p-0 hover:bg-transparent focus:outline-none flex items-center justify-center pointer-events-none">
                {isNapkinsChecked ? <CheckboxCheckedIcon /> : <CheckboxUncheckedIcon />}
              </AppButton>
            </div>

            <div className="flex justify-center">
              <Button 
                variant="primary" 
                onClick={() => { onClose(); navigate('/menu'); }}
                className="!w-full max-w-[280px] !py-[13px] text-[12px] uppercase font-bold tracking-wide"
              >
                ADD ANOTHER MENU ITEM
              </Button>
            </div>
          </div>

          <div className="bg-surface-muted px-8 py-8 pb-12 w-full min-h-[400px]">
            <div className="flex justify-between items-center mb-6">
              <span className="text-[14px] font-medium text-text-secondary">Bag Total</span>
              <span className="text-[14px] font-bold text-text-secondary">$24.95</span>
            </div>

            <AppButton className="!w-[calc(100%+64px)] !-ml-8 !bg-secondary text-white flex items-center justify-between !px-10 !py-[18px] mb-8 relative overflow-hidden group hover:opacity-95 transition-opacity !rounded-none">
              <div className="absolute left-[10px] top-0 bottom-0 w-[60px] pointer-events-none flex items-center">
                <BannerStar className="absolute left-[10px] top-[14px] w-[22px] h-[22px] rotate-[10deg] opacity-90" />
                <BannerStar className="absolute left-[20px] bottom-[10px] w-[14px] h-[14px] rotate-[20deg] opacity-90" />
              </div>
              <span className="text-[16px] font-medium relative z-10 pl-6">Rewards and Offers</span>
              <span className="relative z-10 pr-6 transition-transform group-hover:translate-x-1 duration-300">
                <ChevronRightIcon />
              </span>
              <div className="absolute right-[10px] top-0 bottom-0 w-[130px] pointer-events-none">
                <BannerStar className="absolute right-[20px] top-[-15px] w-[95px] h-[95px] rotate-[10deg]" />
                <BannerStar className="absolute right-[0px] top-[14px] w-[22px] h-[22px] rotate-[25deg]" />
                <BannerStar className="absolute right-[16px] bottom-[4px] w-[24px] h-[24px] -rotate-[10deg]" />
                <BannerStar className="absolute right-[94px] bottom-[8px] w-[20px] h-[20px] -rotate-[24deg]" />
              </div>
            </AppButton>

            <div className="flex justify-between items-center border-b border-border-subtle pb-3 mb-8 px-1">
              <input 
                type="text" 
                placeholder="Enter a Promo Code"
                className="text-[12px] text-text-secondary font-medium placeholder-text-muted bg-transparent outline-none flex-1"
              />
              <AppButton className="!w-auto !p-0 text-[10px] font-bold text-text-muted hover:text-primary transition-colors tracking-wide uppercase hover:bg-transparent">
                APPLY
              </AppButton>
            </div>

            <div className="flex flex-col gap-2.5 mb-8 px-1">
              <div className="flex justify-between items-center">
                <span className="text-[13px] font-medium text-text-secondary">Subtotal</span>
                <span className="text-[13px] font-bold text-text-secondary">$24.95</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[13px] font-medium text-text-secondary">Tax</span>
                <span className="text-[13px] font-bold text-text-secondary">$4.00</span>
              </div>
            </div>

            <div className="flex justify-between items-end border-t border-border-subtle pt-6 mb-10 px-1">
              <span className="text-[18px] font-bold text-text-primary tracking-wide">TOTAL</span>
              <span className="text-[18px] font-bold text-text-primary tracking-wide">$28.95</span>
            </div>

            <div className="flex justify-center">
              <Button
                variant="secondary"
                onClick={() => { onClose(); navigate('/checkout'); }}
                className="!w-full max-w-[200px] !py-[13px] text-[12px] font-bold tracking-widest uppercase shadow-sm active:scale-95 transition-transform duration-100"
              >
                CHECKOUT
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
