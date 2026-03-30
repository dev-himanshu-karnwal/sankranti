import { useState, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CartMenu from '../ui/components/CartMenu';
import BuilderHeader from '../ui/components/builder/BuilderHeader';
import BuilderOptions from '../ui/components/builder/BuilderOptions';
import BuilderFooter from '../ui/components/builder/BuilderFooter';
import { itemsData } from '../data/items';
import { customizationData } from '../data/customization';
import Button from '../ui/components/Button';

export default function ProductBuilderPage() {
  const navigate = useNavigate();
  const { item } = useParams();
  const [activeTab, setActiveTab] = useState("Base");
  const [selectedItems, setSelectedItems] = useState<string[]>(['ghee-rice']);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const selectedProduct = useMemo(() => {
    return itemsData.find(p => p.id === item) || itemsData[0];
  }, [item]);

  const toggleItem = (id: string) => {
    setSelectedItems(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const desktopElement = document.getElementById(`section-desktop-${id.toLowerCase()}`);
    const mobileElement = document.getElementById(`section-${id.toLowerCase()}`);
    
    if (desktopElement && window.innerWidth >= 431) {
      const headerOffset = 130;
      const elementPosition = desktopElement.getBoundingClientRect().top + window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const targetScroll = Math.min(elementPosition - headerOffset, maxScroll);
      
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });
    } else if (mobileElement) {
      mobileElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-surface-base min-h-screen flex flex-col font-['Poppins']">
      
      {/* ===== MOBILE VIEW (UNTOUCHED) ===== */}
      <div className="md:hidden flex flex-col h-screen w-full max-w-[428px] mx-auto bg-white relative z-10 shadow-xl overflow-hidden">
        <BuilderHeader title={selectedProduct.title} imageSrc={selectedProduct.imageSrc} />
        <BuilderOptions activeTab={activeTab} selectedItems={selectedItems} onToggleItem={toggleItem} onScrollToSection={scrollToSection} />
        <BuilderFooter title={selectedProduct.title} onAddToCart={() => setIsCartOpen(true)} />
      </div>

      {/* ===== DESKTOP VIEW (NEW DESIGN) ===== */}
      <div className="hidden md:flex flex-col flex-1 w-full bg-surface-subtle min-h-screen pb-24 relative overflow-x-hidden">
        
        {/* Top Navbar */}
        <div className="w-full h-16 bg-white border-b border-border-subtle/50 px-10 flex items-center justify-between sticky top-0 z-40">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-text-secondary text-[13px] font-medium hover:text-text-primary transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Back
          </button>
          <h2 className="text-[15px] font-medium text-text-primary tracking-wide">Mobile Order and Pay</h2>
          <button className="text-text-secondary hover:text-text-primary transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </button>
        </div>

        {/* Hero Section */}
        <div className="w-full bg-surface-muted pt-14 pb-20 px-10 flex justify-center items-center">
          <div className="w-full max-w-[900px] flex gap-16 items-center">
            <img src={selectedProduct.imageSrc} alt={selectedProduct.title} className="w-[300px] h-[300px] object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.15)] mix-blend-multiply flex-shrink-0" />
            <div className="flex flex-col">
              <h1 className="text-[46px] font-bold text-text-primary tracking-tight mb-4 leading-none">{selectedProduct.category || selectedProduct.title}</h1>
              <p className="text-[15px] text-text-secondary font-medium leading-[1.6]">
                {selectedProduct.description || `Build your perfect ${selectedProduct.title.toLowerCase()} with fresh ingredients, bold flavors, and authentic Indian spices.`}
              </p>
            </div>
          </div>
        </div>

        {/* Sticky Tabs Navbar */}
        <div className="w-full bg-white border-y border-border-subtle sticky top-16 z-30 shadow-sm">
          <div className="w-full max-w-[1240px] mx-auto px-10 flex items-center gap-2 py-3 overflow-x-auto no-scrollbar">
            {["Base", "Protein", "Curry Sauce", "Toppings", "Add-ons"].map((tab) => (
              <button 
                key={tab} 
                onClick={() => scrollToSection(tab)}
                className={`text-[13px] font-bold transition-all duration-300 px-6 py-2.5 rounded-full whitespace-nowrap ${
                  activeTab === tab 
                    ? "bg-secondary text-white shadow-md shadow-secondary/20" 
                    : "text-text-secondary hover:text-text-primary bg-transparent"
                }`}
              >
                {tab === "Base" ? "Bases" : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Options Grid Wrapper */}
        <div className="w-full flex-1 bg-surface-base">
          <div className="w-full max-w-[1240px] mx-auto px-10 pt-10 pb-20">
            {customizationData.map((section, sIdx) => (
              <div key={sIdx} id={`section-desktop-${section.id.toLowerCase()}`} className="mb-14">
                
                {/* Section Header */}
                <div className="mb-6 relative">
                  <h2 className="text-[18px] font-medium text-text-primary tracking-wide inline-block pb-2 relative z-10">
                    {section.title}
                  </h2>
                  <div className="absolute left-0 bottom-0 w-[40px] h-[3px] bg-secondary rounded-full"></div>
                </div>

                {/* Desktop Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {section.options.map((opt, oIdx) => {
                    const isSelected = selectedItems.includes(opt.id);
                    return (
                      <div 
                        key={oIdx} 
                        onClick={() => toggleItem(opt.id)}
                        className={`bg-white rounded-[16px] p-4 flex items-center gap-4 cursor-pointer hover:-translate-y-0.5 transition-all duration-300 border ${
                          isSelected 
                            ? 'border-secondary shadow-md bg-secondary/5' 
                            : 'border-transparent shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] hover:shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] hover:border-black/5'
                        }`}
                      >
                        <img src={opt.image} alt={opt.title} className="w-[60px] h-[60px] object-contain flex-shrink-0 drop-shadow-sm mix-blend-multiply rounded-full" onError={(e) => e.currentTarget.style.display = 'none'} />
                        <div className="flex flex-col flex-1 min-w-0 justify-center">
                          <h3 className={`text-[13px] font-bold leading-tight mb-1 truncate transition-colors ${isSelected ? 'text-secondary' : 'text-text-primary'}`}>{opt.title}</h3>
                          {opt.desc && <p className="text-[10.5px] text-text-secondary font-medium leading-[1.35] line-clamp-2">{opt.desc}</p>}
                        </div>
                        <button className={`w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center transition-all shadow-sm ${
                          isSelected 
                            ? 'bg-secondary text-white scale-105' 
                            : 'bg-surface-muted text-text-secondary hover:bg-black/10 hover:text-text-primary'
                        }`}>
                          {isSelected ? (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          ) : (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                          )}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fixed Desktop Footer */}
        <div className="fixed bottom-0 left-0 w-full bg-surface-base border-t border-border-subtle shadow-[0_-15px_40px_rgba(0,0,0,0.04)] px-10 flex items-center justify-between z-50">
           <div className="flex-1 max-w-[1240px] mx-auto py-5 flex items-center justify-between w-full">
             <div className="flex flex-col">
                 <span className="text-[14px] font-bold text-text-primary uppercase tracking-wider">{selectedProduct.title}</span>
                 <span className="text-[12px] font-medium text-text-secondary mt-1">Select items to customize your {selectedProduct.title}</span>
             </div>
             <Button 
                variant="secondary"
                onClick={() => setIsCartOpen(true)} 
                className="!w-auto !py-[13px] !px-10 !text-[13px] tracking-widest font-bold uppercase shadow-sm"
             >
                ADD TO BAG - {selectedProduct.price}
             </Button>
           </div>
        </div>
      </div>

      <CartMenu isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
