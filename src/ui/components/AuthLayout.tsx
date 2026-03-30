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
    <div className="min-h-screen bg-surface-muted flex flex-col items-center justify-start lg:justify-center p-0 lg:p-4 overflow-y-auto no-scrollbar">
      <div className="min-h-screen lg:min-h-0 lg:h-auto lg:max-h-[min(900px,95vh)] flex flex-col items-stretch px-6 py-8 md:px-10 md:py-12 max-w-[550px] w-full mx-auto bg-surface-muted lg:rounded-[32px] overflow-y-auto no-scrollbar">
        <AuthHeader heading={heading} description={description} />
        <Outlet />
      </div>
    </div>
  );

}
