import { useNavigate } from "react-router-dom";
import { Button } from "../ui/components";

export default function AccountSuccessfulPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-surface-base flex flex-col items-center justify-start lg:justify-center overflow-y-auto no-scrollbar">
      <div className="min-h-screen lg:min-h-0 lg:h-auto lg:max-h-[min(900px,95vh)] flex flex-col max-w-[550px] w-full mx-auto bg-transparent no-scrollbar text-text-primary">

        {/* Top Half */}
        <div className="flex-1 bg-surface-base flex flex-col items-center justify-end pb-[40px] pt-16">
          <img
            src="/images/animated_logo.gif"
            alt="Sankranti Logo"
            className="max-w-[240px] w-[60vw] mb-8 object-contain"
          />

          {/* Successful Badge */}
          <div className="bg-secondary text-text-on-secondary px-8 py-[8px] text-[16px] font-medium relative isolate rounded-[8px] flex items-center justify-center tracking-wide">
            <span className="absolute top-1/2 left-0 -ml-[5px] -translate-y-1/2 w-3 h-3 bg-secondary rotate-45 -z-10 rounded-[2px]" />
            <span className="absolute top-1/2 right-0 -mr-[5px] -translate-y-1/2 w-3 h-3 bg-secondary rotate-45 -z-10 rounded-[2px]" />
            Successful
          </div>
        </div>

        {/* Bottom Half */}
        <div className="flex-1 bg-surface-base flex flex-col items-center px-6 pt-12 pb-8">
          <p className="text-center text-[13px] font-medium leading-[1.6] text-text-secondary">
            Congratulations, your account has been
            <br />
            successfully created.
          </p>

          <div className="max-w-[500px] mx-auto mt-auto w-full pt-8">
            <Button variant="primary" onClick={() => navigate("/")}>
              CONTINUE
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
