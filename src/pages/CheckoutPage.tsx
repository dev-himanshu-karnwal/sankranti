import { useState } from 'react';
import ProfileMenu from '../ui/components/ProfileMenu';
import CartMenu from '../ui/components/CartMenu';
import CheckoutHeader from '../ui/components/checkout/CheckoutHeader';
import BillingStep from '../ui/components/checkout/BillingStep';
import PaymentStep from '../ui/components/checkout/PaymentStep';
import OrderSummary from '../ui/components/checkout/OrderSummary';
import Button from '../ui/components/Button';

export default function CheckoutPage() {
  const [orderOption, setOrderOption] = useState<'pickup' | 'delivery'>('pickup');
  const [deliverDiff, setDeliverDiff] = useState(false);
  const [isPayment, setIsPayment] = useState(false);
  const [saveInfo, setSaveInfo] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const togglePayment = () => setIsPayment(!isPayment);

  return (
    <div className="min-h-screen bg-surface-base font-['Poppins'] flex flex-col relative overflow-hidden">
      <CheckoutHeader onMenuToggle={() => setIsMenuOpen(true)} onCartToggle={() => setIsCartOpen(true)} />
      
      <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden scroll-smooth flex flex-col items-center">
        <div className="w-full max-w-[428px] md:max-w-[1100px] flex flex-col pt-8 px-5 md:px-10 pb-32">
          <div className="flex flex-col md:flex-row md:gap-16">
            <div className="flex-1 overflow-hidden">
              <h1 className="text-[20px] md:text-[32px] font-extrabold text-text-primary mb-2">CHECKOUT</h1>
              <p className="text-[11px] md:text-[14px] mb-8">Returning customer? <span className="text-primary font-semibold underline cursor-pointer">Click here to login</span></p>

              <div className="relative flex w-[200%] items-start transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
                   style={{ transform: isPayment ? 'translateX(-50%)' : 'translateX(0)' }}>
                <BillingStep orderOption={orderOption} setOrderOption={setOrderOption} deliverDiff={deliverDiff} setDeliverDiff={setDeliverDiff} isPayment={isPayment} />
                <PaymentStep isPayment={isPayment} setIsPayment={setIsPayment} saveInfo={saveInfo} setSaveInfo={setSaveInfo} />
              </div>
            </div>

            <div className="hidden md:block w-[350px] flex-shrink-0">
              <OrderSummary isPayment={isPayment} onPlaceOrder={togglePayment} onMakePayment={() => console.log('Paid')} />
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[428px] bg-white px-5 py-4 border-t border-border-primary/20 z-40 flex justify-center">
        <Button variant="primary" onClick={togglePayment} className="!w-full max-w-[320px] !py-[13px] text-[12px] font-extrabold tracking-widest uppercase">
          {isPayment ? 'MAKE PAYMENT' : 'PLACE ORDER'}
        </Button>
      </div>

      <ProfileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <CartMenu isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
