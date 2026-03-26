import { Link } from 'react-router-dom';
import { DesktopProductCard, AppButton } from '../index';
import { allCategories } from '../../../data/items';
import { recommendationStore } from '../../../data/recommendationStore';

interface DesktopViewProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  filteredItems: any[];
  setIsDesktopMenuOpen: (val: boolean) => void;
  setIsDesktopCartOpen: (val: boolean) => void;
  navigate: (path: any) => void;
}

export default function DesktopView({
  activeTab,
  setActiveTab,
  filteredItems,
  setIsDesktopMenuOpen,
  setIsDesktopCartOpen,
  navigate
}: DesktopViewProps) {
  return (
    <div className="hidden min-[431px]:flex flex-col flex-1 w-full bg-surface-subtle overflow-x-hidden">
      <header className="flex items-center justify-between px-10 py-3 w-full bg-white shadow-sm z-50 sticky top-0">
        <div className="flex-shrink-0 flex items-center justify-start cursor-pointer" onClick={() => navigate('/home')}>
          <img src="/images/sankranti_indian_kitchen.png" alt="Sankranti Logo" className="w-[85px] h-auto object-contain" />
        </div>
        <nav className="flex items-center gap-4 md:gap-8 justify-center flex-1 overflow-x-auto no-scrollbar px-4">
          <Link to="/home" className="text-[12px] font-bold text-text-primary hover:text-primary transition-colors tracking-wide leading-none">HOME</Link>
          <Link to="/menu" className="text-[12px] font-bold text-text-primary hover:text-primary transition-colors tracking-wide leading-none">MENU</Link>
          <Link to="#" className="text-[12px] font-bold text-text-primary hover:text-primary transition-colors tracking-wide leading-none">SCAN</Link>
          <Link to="#" className="text-[12px] font-bold text-text-primary hover:text-primary transition-colors tracking-wide leading-none">REORDER</Link>
          <Link to="/reward" className="text-[12px] font-bold text-text-primary hover:text-primary transition-colors tracking-wide leading-none">REWARDS</Link>
        </nav>
        <div className="flex items-center gap-5 flex-shrink-0 justify-end">
          <AppButton onClick={() => setIsDesktopMenuOpen(true)} className="!w-auto !p-0 hover:bg-transparent">
            <svg width="20" height="20" viewBox="0 0 23 27" fill="none">
              <path d="M11.5001 0C15.3048 0 18.4001 3.09534 18.4001 6.9C18.4001 10.7047 15.3048 13.8 11.5001 13.8C7.69549 13.8 4.60015 10.7047 4.60015 6.9C4.60015 3.09534 7.69549 0 11.5001 0ZM11.5001 12.2667C14.4593 12.2667 16.8668 9.85918 16.8668 6.9C16.8668 3.94082 14.4593 1.53333 11.5001 1.53333C8.54097 1.53333 6.13348 3.94082 6.13348 6.9C6.13348 9.85918 8.54097 12.2667 11.5001 12.2667Z" fill="var(--color-secondary)"/>
              <path d="M2.91507 18.3067C4.80414 16.3886 7.30843 15.3323 9.96667 15.3323H13.0333C15.6915 15.3323 18.1959 16.3886 20.0849 18.3067C21.9647 20.2154 23 22.7349 23 25.4012C23 25.8246 22.6567 26.1678 22.2333 26.1678H0.766666C0.343264 26.1678 0 25.8246 0 25.4012C0 22.7349 1.03526 20.2154 2.91507 18.3067ZM21.4329 24.6345C21.0488 20.2857 17.4283 16.8656 13.0333 16.8656H9.96667C5.57167 16.8656 1.95117 20.2857 1.56707 24.6345H21.4329Z" fill="var(--color-secondary)"/>
            </svg>
          </AppButton>
          <AppButton onClick={() => setIsDesktopCartOpen(true)} className="!w-auto !p-0 hover:bg-transparent">
            <svg width="20" height="20" viewBox="0 0 22 26" fill="none">
              <path d="M2.11628 7.86058C1.94931 7.86058 1.81395 7.99594 1.81395 8.16291V23.8838C1.81395 24.0508 1.94931 24.1862 2.11628 24.1862H19.0465C19.2135 24.1862 19.3488 24.0508 19.3488 23.8838V8.16291C19.3488 7.99594 19.2135 7.86058 19.0465 7.86058H2.11628ZM0 8.16291C0 6.99412 0.947488 6.04663 2.11628 6.04663H19.0465C20.2153 6.04663 21.1628 6.99412 21.1628 8.16291V23.8838C21.1628 25.0526 20.2153 26.0001 19.0465 26.0001H2.11628C0.947488 26.0001 0 25.0526 0 23.8838V8.16291Z" fill="var(--color-secondary)"/>
              <path d="M10.5814 1.81395C8.74474 1.81395 7.25585 3.30287 7.25585 5.13953V9.37209C7.25585 9.873 6.84978 10.2791 6.34887 10.2791C5.84797 10.2791 5.44189 9.873 5.44189 9.37209V5.13953C5.44189 2.30105 7.74294 0 10.5814 0C13.4199 0 15.721 2.30105 15.721 5.13953V9.37209C15.721 9.873 15.3149 10.2791 14.814 10.2791C14.3131 10.2791 13.907 9.873 13.907 9.37209V5.13953C13.907 3.30287 12.4181 1.81395 10.5814 1.81395Z" fill="var(--color-secondary)"/>
            </svg>
          </AppButton>
        </div>
      </header>

      <div className="w-full bg-surface-base flex items-center justify-center gap-8 px-6 py-4 border-y border-border-subtle/50 overflow-x-auto [&::-webkit-scrollbar]:hidden">
        {allCategories.map((cat, idx) => (
          <div key={idx} className="flex items-center gap-8 cursor-pointer group flex-shrink-0" onClick={() => setActiveTab(cat)}>
            <span className={`text-[13px] transition-all duration-200 whitespace-nowrap ${activeTab === cat ? "font-bold text-text-primary scale-110" : "font-medium text-text-secondary group-hover:text-text-primary"}`}>
              {cat}
            </span>
            {idx < allCategories.length - 1 && <div className="w-[1px] h-4 bg-black/15"></div>}
          </div>
        ))}
      </div>

      <main className="flex-1 flex flex-col items-center w-full max-w-[1200px] mx-auto pb-20 px-6 mt-10">
        <div className="w-full flex items-center justify-between mb-12">
          <h1 className="text-[32px] font-extrabold text-text-primary tracking-wide relative inline-block transition-all duration-300">
            {activeTab}
            <div className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full transition-all duration-300"></div>
          </h1>
          <div className="relative">
            <input type="text" placeholder="Search menu..." className="pl-10 pr-4 py-2.5 rounded-full border border-black/10 focus:border-primary outline-none text-[14px] shadow-sm focus:shadow-md transition-all w-[250px]" />
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-secondary absolute left-3 top-1/2 -translate-y-1/2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </div>
        </div>
          
        <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 px-2 md:px-0">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, idx) => {
              return (
                <div 
                  key={idx} 
                  className="fade-in cursor-pointer hover:scale-[1.02] transition-transform duration-300" 
                  style={{ animationDelay: `${idx * 0.05}s` }}
                  onClick={() => {
                    recommendationStore.addRecommendedItem(item);
                    navigate(`/builder/${item.id}`);
                  }}
                >
                <DesktopProductCard 
                  imageSrc={item.imageSrc}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  buttonLabel="ADD ITEM"
                  isVeg={item.isVeg}
                  onAddClick={(e?: any) => {
                    e?.stopPropagation();
                    recommendationStore.addRecommendedItem(item);
                    navigate(`/builder/${item.id}`);
                  }}
                />
              </div>
              );
            })
          ) : (
            <div className="col-span-4 flex flex-col items-center justify-center py-24 opacity-30">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mb-4"><path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="10"/></svg>
              <p className="text-[18px] font-bold">Varieties coming soon to {activeTab}</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
