import Button from '../Button';

interface OrderSummaryProps {
  isPayment: boolean;
  onPlaceOrder: () => void;
  onMakePayment: () => void;
}

export default function OrderSummary({ isPayment, onPlaceOrder, onMakePayment }: OrderSummaryProps) {
  return (
    <div className="bg-white rounded-[20px] p-8 border border-border-subtle/50 sticky top-28 shadow-sm">
      <h2 className="text-[18px] font-extrabold text-text-primary mb-6 tracking-wide uppercase">Your Order</h2>
      
      <div className="space-y-4 mb-8">
        <div className="flex justify-between items-center pb-4 border-b border-border-subtle/30">
          <span className="text-[14px] font-medium text-text-secondary">Subtotal</span>
          <span className="text-[15px] font-bold text-text-primary">$29.90</span>
        </div>
        <div className="flex justify-between items-center pb-4 border-b border-border-subtle/30">
          <span className="text-[14px] font-medium text-text-secondary">Shipping</span>
          <span className="text-[14px] font-medium text-text-primary">Flat rate: $5.00</span>
        </div>
        <div className="flex justify-between items-center pt-2">
          <span className="text-[16px] font-extrabold text-text-primary">Total</span>
          <span className="text-[20px] font-black text-primary">$34.90</span>
        </div>
      </div>

      <Button
        variant="primary"
        onClick={isPayment ? onMakePayment : onPlaceOrder}
        className="!w-full !py-[15px] text-[13px] font-black tracking-[0.2em] uppercase active:scale-[0.98] transition-all"
      >
        {isPayment ? 'MAKE PAYMENT' : 'PLACE ORDER'}
      </Button>

      <div className="mt-6 flex flex-col gap-3">
        <div className="flex items-center gap-2 text-[11px] text-text-muted">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          Secure SSL Encryption
        </div>
        <div className="flex items-center gap-2 text-[11px] text-text-muted">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
          Express Delivery Available
        </div>
      </div>
    </div>
  );
}
