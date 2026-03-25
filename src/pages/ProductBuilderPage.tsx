import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartMenu from '../ui/components/CartMenu';
import BuilderHeader from '../ui/components/builder/BuilderHeader';
import BuilderOptions from '../ui/components/builder/BuilderOptions';
import BuilderFooter from '../ui/components/builder/BuilderFooter';

export default function ProductBuilderPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Base");
  const [selectedItems, setSelectedItems] = useState<string[]>(['ghee-rice']);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleItem = (id: string) => {
    setSelectedItems(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(`section-${id.toLowerCase()}`);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-surface-base min-h-screen flex flex-col font-['Poppins']">
      <div className="md:hidden flex flex-col h-screen w-full max-w-[428px] mx-auto bg-white relative z-10 shadow-xl overflow-hidden">
        <BuilderHeader />
        <BuilderOptions activeTab={activeTab} selectedItems={selectedItems} onToggleItem={toggleItem} onScrollToSection={scrollToSection} />
        <BuilderFooter onAddToCart={() => setIsCartOpen(true)} />
      </div>
      <CartMenu isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <div className="hidden md:flex flex-col flex-1 w-full items-center justify-center p-20">
        <h1 className="text-3xl font-bold text-text-primary mb-4">Item Builder</h1>
        <p className="text-text-secondary mb-10">Select an item on mobile to customize it here.</p>
        <button onClick={() => navigate(-1)} className="text-primary font-bold underline hover:opacity-80">Back to Menu</button>
      </div>
    </div>
  );
}
