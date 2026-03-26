import Button from '../Button';
import Checkbox from '../Checkbox';
import { Field, FieldLabel, FormInput, FormTextArea } from './FormFields';

interface BillingStepProps {
  orderOption: 'pickup' | 'delivery';
  setOrderOption: (val: 'pickup' | 'delivery') => void;
  deliverDiff: boolean;
  setDeliverDiff: (val: boolean) => void;
  isPayment: boolean;
}

export default function BillingStep({ orderOption, setOrderOption, deliverDiff, setDeliverDiff, isPayment }: BillingStepProps) {
  return (
    <div className={`w-1/2 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${isPayment ? 'max-h-0 opacity-0 overflow-hidden' : 'max-h-[2000px] opacity-100'}`}>
      <div className={`transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] overflow-hidden ${orderOption === 'delivery' ? 'max-h-[200px] opacity-100 translate-x-0 mb-6' : 'max-h-0 opacity-0 translate-x-12 mb-0'}`}>
        <h2 className="text-[15px] md:text-[18px] font-bold text-text-primary mb-1">Pickup location:</h2>
        <p className="text-[12px] md:text-[14px] font-semibold text-text-secondary leading-tight opacity-70">Sankranti</p>
        <p className="text-[12px] md:text-[14px] font-medium text-text-secondary leading-snug opacity-70">85 5th St NE Suite A, Atlanta, GA 30308, United States</p>
      </div>

      <h2 className="text-[14px] md:text-[18px] font-bold text-text-primary mb-4 md:mb-6">Billing Details</h2>

      <div className="mb-6 md:mb-8">
        <FieldLabel>Order Option:</FieldLabel>
        <div className="flex gap-4">
          <Button variant="secondary" onClick={() => setOrderOption('pickup')} className={`!w-[130px] md:!w-[150px] !py-[9px] md:!py-[12px] !rounded-[5px] text-[11px] md:text-[13px] font-extrabold tracking-wider transition-opacity duration-300 ${orderOption !== 'pickup' ? 'opacity-30' : 'opacity-100'}`}>PICKUP</Button>
          <Button variant="primary" onClick={() => setOrderOption('delivery')} className={`!w-[130px] md:!w-[150px] !py-[9px] md:!py-[12px] !rounded-[5px] text-[11px] md:text-[13px] font-extrabold tracking-wider transition-opacity duration-300 ${orderOption !== 'delivery' ? 'opacity-30' : 'opacity-100'}`}>DELIVERY</Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4 md:mb-6">
        <Field label="Selected Date">
          <FormInput type="text" placeholder="MM/DD/YYYY" />
        </Field>
        <Field label="Selected Time">
          <FormInput type="text" placeholder="HH:MM AM/PM" />
        </Field>
      </div>

      <div className="mb-4 md:mb-6">
        <Field label="Phone">
          <FormInput type="tel" />
        </Field>
      </div>

      <div className="mb-4 md:mb-6">
        <Field label="Email Address">
          <FormInput type="email" />
        </Field>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6 md:mb-8">
        <Field label="First Name">
          <FormInput type="text" />
        </Field>
        <Field label="Last Name">
          <FormInput type="text" />
        </Field>
      </div>

      <div className={`transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] overflow-hidden ${orderOption === 'delivery' ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="mb-1"><FieldLabel>Country / Region</FieldLabel><p className="text-[11px] md:text-[13px] text-text-muted mb-4">United States (US)</p></div>
        <div className="mb-4 md:mb-6 flex flex-col gap-4">
          <Field label="Street address"><FormInput type="text" className="mb-2" /></Field>
          <FormInput type="text" />
        </div>
        <div className="mb-4 md:mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="Town / City"><FormInput type="text" /></Field>
          <Field label="State / County"><FormInput type="text" /></Field>
        </div>
        <div className="mb-6 md:mb-8">
          <Field label="Postcode / ZIP"><FormInput type="text" /></Field>
        </div>
      </div>

      <div className="mb-5 md:mb-8">
        <Checkbox label="Deliver to a different address?" checked={deliverDiff} onChange={() => setDeliverDiff(!deliverDiff)} />
      </div>

      <div className="mb-6 md:mb-8">
        <Field label="Order notes (optional)" required={false}>
          <FormTextArea rows={4} />
        </Field>
      </div>
    </div>
  );
}
