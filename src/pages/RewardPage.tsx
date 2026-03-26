import { useState } from 'react';
import ProfileMenu from '../ui/components/ProfileMenu';
import CartMenu from '../ui/components/CartMenu';
import RewardHeader from '../ui/components/reward/RewardHeader';
import RewardHero from '../ui/components/reward/RewardHero';
import RewardList from '../ui/components/reward/RewardList';

export default function RewardPage() {
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [isDesktopCartOpen, setIsDesktopCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-['Poppins'] flex flex-col relative overflow-x-hidden">
      <RewardHeader onMenuToggle={() => setIsDesktopMenuOpen(true)} onCartToggle={() => setIsDesktopCartOpen(true)} />
      <main className="flex-1 flex flex-col items-center w-full">
        <RewardHero />
        <RewardList />
      </main>
      <ProfileMenu isOpen={isDesktopMenuOpen} onClose={() => setIsDesktopMenuOpen(false)} />
      <CartMenu isOpen={isDesktopCartOpen} onClose={() => setIsDesktopCartOpen(false)} />
    </div>
  );
}
