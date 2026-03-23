import { Route, Routes } from "react-router-dom";
import { NotFoundPage, OnboardPage, SplashPage, SignInPage, CreateAccountPage, VerificationPage, AccountSuccessfulPage } from "../pages";
import { AuthLayout } from "../ui/components";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SplashPage />} />
      <Route path="/onboard" element={<OnboardPage />} />
      <Route path="/account-successfull" element={<AccountSuccessfulPage />} />
      
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="create-account" element={<CreateAccountPage />} />
        <Route path="verify" element={<VerificationPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
