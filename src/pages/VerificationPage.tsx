import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, OtpInput } from "../ui/components";

export default function VerificationPage() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const handleConfirm = () => {
    // Navigate home or to success screen after verify
    navigate("/");
  };

  return (
    <>
      <div className="flex flex-col gap-6 w-full grow mt-6">
        <div className="flex flex-col gap-4 text-[13px] text-text-primary">
          <p>OTP was sent to +91**** 30</p>
          <p className="leading-relaxed">
            Please enter the OTP we sent to your mobile via SMS in order to verify your details and create your account
          </p>
        </div>

        <div className="mt-4 flex flex-col gap-3">
          <label className="text-[12px] font-bold text-text-primary uppercase tracking-wide">Enter OTP</label>
          <OtpInput value={otp} onChange={setOtp} length={4} />
          
          <div className="flex items-center justify-between mt-2 text-[11px]">
            <span className="text-text-primary">Time Remaining 0:06s</span>
            <span className="text-text-primary">
              Didn't receive OTP? <button className="text-[#A2A2A2] underline hover:text-text-primary transition-colors">Resend</button>
            </span>
          </div>
        </div>
      </div>

      <div className="w-full pt-8 pb-4 mt-auto">
        <Button variant="primary" onClick={handleConfirm} disabled={otp.length !== 4}>
          CONFIRM
        </Button>
      </div>
    </>
  );
}
