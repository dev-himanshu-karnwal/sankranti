import { useState, useEffect } from 'react';
import PanelFooter from '../ui/components/PanelFooter';
import ProfileMenu from '../ui/components/ProfileMenu';
import CartMenu from '../ui/components/CartMenu';
import HomeHeader from '../ui/components/home/HomeHeader';
import MobileHomeContent from '../ui/components/home/MobileHomeContent';
import DesktopHomeContent from '../ui/components/home/DesktopHomeContent';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [isDesktopCartOpen, setIsDesktopCartOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-surface-base flex flex-col font-['Poppins']">
      <HomeHeader onMenuToggle={() => setIsDesktopMenuOpen(true)} onCartToggle={() => setIsDesktopCartOpen(true)} />
      
      <ProfileMenu isOpen={isDesktopMenuOpen} onClose={() => setIsDesktopMenuOpen(false)} />
      <CartMenu isOpen={isDesktopCartOpen} onClose={() => setIsDesktopCartOpen(false)} />

      <MobileHomeContent currentSlide={currentSlide} onSlideChange={setCurrentSlide} />
      <DesktopHomeContent currentSlide={currentSlide} onSlideChange={setCurrentSlide} />

      <div className="md:hidden"><PanelFooter /></div>
    </div>
  );
}