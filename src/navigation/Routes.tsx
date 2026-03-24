import { Route, Routes } from "react-router-dom";
import { NotFoundPage, OnboardPage, SplashPage, SignInPage, CreateAccountPage, VerificationPage, AccountSuccessfulPage, DirectoryPage } from "../pages";
import { AuthLayout } from "../ui/components";
import HomePage from "../pages/HomePage";
import MenuPage from "../pages/MenuPage";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Can be deleted once all pages are linkked, tested and made dynamic */}
      <Route path="/directory" element={<DirectoryPage />} />

      <Route path="/" element={<SplashPage />} />
      <Route path="/onboard" element={<OnboardPage />} />
      <Route path="/account-successfull" element={<AccountSuccessfulPage />} />
      
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="create-account" element={<CreateAccountPage />} />
        <Route path="verify" element={<VerificationPage />} />
      </Route>

      <Route path="/home" element ={<HomePage />} />
      <Route path="/menu" element ={<MenuPage />} />``

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
