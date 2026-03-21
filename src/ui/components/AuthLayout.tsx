import { Outlet, useLocation } from "react-router-dom";
import AuthHeader from "./AuthHeader";

export default function AuthLayout() {
  const location = useLocation();

  let heading = "";
  let description: string | undefined = undefined;

  if (location.pathname === "/auth/sign-in") {
    heading = "Sign In";
  } else if (location.pathname === "/auth/create-account") {
    heading = "create account";
    description = "Create an account to earn rewards, and more.";
  } else if (location.pathname === "/auth/verify") {
    heading = "Verification";
  }

  return (
    <div className="min-h-screen bg-surface-muted">
      <div className="min-h-screen flex flex-col items-stretch px-6 py-8 max-w-[500px] mx-auto">
        <AuthHeader heading={heading} description={description} />
        <Outlet />
      </div>
    </div>
  );
}
