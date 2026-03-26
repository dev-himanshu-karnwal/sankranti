import { useState } from 'react';
import ProfileMenu from '../ui/components/ProfileMenu';
import CartMenu from '../ui/components/CartMenu';
import MenuHeader from '../ui/components/menu/MenuHeader';
import MenuMobile from '../ui/components/menu/MenuMobile';
import MenuDesktop from '../ui/components/menu/MenuDesktop';

export default function MenuPage() {
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [isDesktopCartOpen, setIsDesktopCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface-subtle md:bg-surface-base flex flex-col font-['Poppins'] relative">
      <div className="md:hidden relative z-10"><MenuMobile /></div>
      <div className="hidden md:flex flex-col flex-1 w-full bg-surface-subtle relative z-10">
        <MenuHeader onMenuToggle={() => setIsDesktopMenuOpen(true)} onCartToggle={() => setIsDesktopCartOpen(true)} />
        <MenuDesktop />
      </div>
      <ProfileMenu isOpen={isDesktopMenuOpen} onClose={() => setIsDesktopMenuOpen(false)} />
      <CartMenu isOpen={isDesktopCartOpen} onClose={() => setIsDesktopCartOpen(false)} />
    </div>
  );
}