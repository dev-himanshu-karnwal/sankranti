import { Link, useNavigate } from "react-router-dom";
import { Button, Input, Checkbox } from "../ui/components";

export default function SignInPage() {
  const navigate = useNavigate();

  return (
    <>
      {/* Form */}
      <div className="flex flex-col gap-6 w-full grow">
        <Input placeholder="Email" type="email" name="email" />
        <Input placeholder="Password" type="password" name="password" />

        <div className="flex items-center justify-between">
          <Checkbox label="Remember Me" />
          <Link
            to="#"
            className="text-[12px] text-text-secondary hover:underline"
          >
            Forgot Password
          </Link>
        </div>

        <p className="text-[10px] text-text-secondary mt-6 leading-relaxed">
          By signing in, I agree to Sankranti's{" "}
          <Link to="#" className="underline">
            Privacy Policy
          </Link>
          ,{" "}
          <Link to="#" className="underline">
            Terms of Use
          </Link>
          , and if you are a member of our Rewards program, the{" "}
          <Link to="#" className="underline">
            Rewards Terms
          </Link>
          , and to receiving account security/verification text messages from
          Sankranti. Msg & Data rates may apply.
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="w-full pt-8 pb-4 mt-auto">
        <Button variant="primary" onClick={() => navigate("/")}>
          SIGN IN
        </Button>
      </div>
    </>
  );
}
