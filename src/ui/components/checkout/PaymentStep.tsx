import AppButton from '../AppButton';
import Checkbox from '../Checkbox';
import { Field, FormInput } from './FormFields';

interface PaymentStepProps {
  isPayment: boolean;
  setIsPayment: (val: boolean) => void;
  saveInfo: boolean;
  setSaveInfo: (val: boolean) => void;
}

export default function PaymentStep({ isPayment, setIsPayment, saveInfo, setSaveInfo }: PaymentStepProps) {
  return (
    <div className={`w-1/2 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${!isPayment ? 'max-h-0 opacity-0 overflow-hidden' : 'max-h-[1000px] opacity-100'}`}>
      <div className="flex items-center gap-3 mb-8 md:mb-10">
        <div className="w-10 h-6 bg-secondary rounded-[3px] flex items-center justify-center">
          <svg width="18" height="14" viewBox="0 0 24 20" fill="none" stroke="white" strokeWidth="2"><rect x="2" y="4" width="20" height="13" rx="2" /><line x1="2" y1="9" x2="22" y2="9" /></svg>
        </div>
        <h2 className="text-[14px] md:text-[18px] font-bold text-text-primary uppercase tracking-wider">CARD</h2>
      </div>

      <div className="mb-5 md:mb-8">
        <Field label="Card number">
          <FormInput type="text" placeholder="1234 1234 1234 1234" className="!rounded-[12px] !border-border-primary/40 !bg-white/40 !py-3 md:!py-4 !text-[14px] md:!text-[15px] !tracking-[0.1em]" icon={
            <img src="/images/payment.png" alt="Card Types" className="h-[24px] md:h-[26px] w-auto object-contain mr-1" />
          }/>
        </Field>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8 md:mb-10">
        <Field label="Expiration date"><FormInput type="text" placeholder="MM/YY" /></Field>
        <Field label="Security code"><FormInput type="text" placeholder="CVC" /></Field>
      </div>

      <div className="mb-8 md:mb-10">
        <Checkbox label="Save payment information to my account for future purchases." checked={saveInfo} onChange={() => setSaveInfo(!saveInfo)} />
      </div>

      <p className="text-[10px] md:text-[12px] text-text-muted leading-relaxed mb-10">
        Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <span className="text-secondary font-semibold underline cursor-pointer">privacy policy</span>.
      </p>

      <AppButton onClick={() => setIsPayment(false)} className="!w-auto !p-0 text-[11px] md:text-[13px] font-bold text-secondary underline underline-offset-4 decoration-1 mb-2 hover:bg-transparent">Go back to billing</AppButton>
    </div>
  );
}
