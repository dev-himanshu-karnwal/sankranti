import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileMenu from '../ui/components/ProfileMenu';
import CartMenu from '../ui/components/CartMenu';
import { itemsData } from '../data/items';
import MobileView from '../ui/components/category/MobileView';
import DesktopView from '../ui/components/category/DesktopView';

export default function CategoryPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Bowls");
  const [showAllMobileCats, setShowAllMobileCats] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [isDesktopCartOpen, setIsDesktopCartOpen] = useState(false);

  const filteredItems = useMemo(() => {
    return itemsData.filter(item => item.category === activeTab);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-surface-base flex flex-col font-['Poppins']">
      <MobileView 
        activeTab={activeTab} setActiveTab={setActiveTab}
        showAllMobileCats={showAllMobileCats} setShowAllMobileCats={setShowAllMobileCats}
        filteredItems={filteredItems} navigate={navigate}
      />
      <DesktopView 
        activeTab={activeTab} setActiveTab={setActiveTab}
        filteredItems={filteredItems} navigate={navigate}
        setIsDesktopMenuOpen={setIsDesktopMenuOpen} setIsDesktopCartOpen={setIsDesktopCartOpen}
      />
      <ProfileMenu isOpen={isDesktopMenuOpen} onClose={() => setIsDesktopMenuOpen(false)} />
      <CartMenu isOpen={isDesktopCartOpen} onClose={() => setIsDesktopCartOpen(false)} />
    </div>
  );
}
