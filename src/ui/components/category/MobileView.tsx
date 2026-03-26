import Button from '../Button';
import { VegIcon, NonVegIcon } from '../../../icons/icon';
import { allCategories, mobileCategories } from '../../../data/items';
import { AppButton } from '../index';
import { recommendationStore } from '../../../data/recommendationStore';

interface MobileViewProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  showAllMobileCats: boolean;
  setShowAllMobileCats: (val: boolean) => void;
  filteredItems: any[];
  navigate: (path: any) => void;
}

export default function MobileView({
  activeTab,
  setActiveTab,
  showAllMobileCats,
  setShowAllMobileCats,
  filteredItems,
  navigate
}: MobileViewProps) {
  return (
    <div className="max-[430px]:flex hidden flex-col h-screen w-full max-w-[428px] mx-auto overflow-hidden bg-white relative z-10 shadow-[0_0_40px_rgba(0,0,0,0.05)]">
      
      {/* Header */}
      <header className="flex justify-between items-center px-6 pt-12 pb-32 w-full flex-shrink-0 bg-surface-muted/30">
        <AppButton onClick={() => navigate(-1)} className="!w-auto !p-2 -ml-2 !justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><path d="m15 18-6-6 6-6"/></svg>
        </AppButton>
        <span className="text-[13px] font-semibold text-text-primary tracking-wide text-center flex-1">Mobile Order and Pay</span>
        <AppButton className="!w-auto !p-2 -mr-2 !justify-center">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </AppButton>
      </header>

      {/* Banner for Tabs - Mobile */}
      <div className="w-full bg-surface-base flex-shrink-0 flex items-center gap-6 px-8 py-3.5 overflow-x-auto [&::-webkit-scrollbar]:hidden">
        {(showAllMobileCats ? allCategories : mobileCategories).map((cat, idx, arr) => (
          <div key={idx} className="flex items-center gap-6 flex-shrink-0 cursor-pointer" onClick={() => setActiveTab(cat)}>
            <span className={`text-[12px] transition-all duration-200 ${activeTab === cat ? "font-bold text-text-primary scale-105" : "font-medium text-text-muted"}`}>
              {cat}
            </span>
            {idx < arr.length - 1 && <div className="w-[1px] h-4 bg-black/10"></div>}
          </div>
        ))}
        {!showAllMobileCats && (
          <div
            onClick={() => setShowAllMobileCats(true)}
            className="bg-secondary text-[10px] text-white font-bold h-[18px] w-[26px] rounded-full flex items-center justify-center flex-shrink-0 ml-[-8px] cursor-pointer active:scale-90 transition-transform"
          >
            +{allCategories.length - mobileCategories.length}
          </div>
        )}
      </div>

      {/* Scrollable Main Area */}
      <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden w-full bg-white flex flex-col pt-2 transition-all duration-300">
        <h1 className="text-[14px] font-bold text-text-primary px-6 mt-7 mb-4 tracking-wide">{activeTab}</h1>
        
        <div className="px-5 flex flex-col gap-5 pb-10">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, idx) => {
              return (
                <div 
                  key={idx} 
                  onClick={() => {
                    recommendationStore.addRecommendedItem(item);
                    navigate(`/builder/${item.id}`);
                  }} 
                  className="bg-white rounded-[16px] shadow-[0_2px_16px_rgba(0,0,0,0.06)] p-3.5 flex gap-4 cursor-pointer hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] active:scale-[0.98] active:opacity-90 transition-all duration-200 border border-transparent"
                >
                <div className="flex flex-col flex-shrink-0 items-center justify-start pb-1 w-[120px]">
                  <div className="w-[120px] h-[95px] bg-surface-muted/50 rounded-[16px] flex items-center justify-center relative overflow-hidden pointer-events-none mb-3">
                    <img src={item.imageSrc} alt={item.title} className="w-[110%] h-auto object-contain mix-blend-multiply drop-shadow-md pb-2" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.classList.add('bg-surface-base'); }} />
                  </div>
                  <span className="text-[14px] font-extrabold text-black tracking-wide">{item.price}</span>
                </div>
                <div className="flex flex-col flex-1 pb-1 pt-1 justify-between items-start">
                  <div>
                    <div className="mb-1.5 flex items-center">
                      {item.isVeg ? <VegIcon /> : <NonVegIcon />}
                    </div>
                    <h3 className="text-[15px] font-bold text-text-primary leading-[1.2] mb-1.5 pr-2">{item.title}</h3>
                    <p className="text-[9px] font-medium text-text-muted opacity-80 leading-[1.4] pr-2 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-auto pt-3 w-full">
                    <Button variant="secondary" className="!w-[100px] !py-[7px] !px-0 !text-[10px] !font-semibold rounded-[6px] tracking-wide">
                      Add Item
                    </Button>
                  </div>
                </div>
              </div>
            );
          })
          ) : (
            <div className="flex flex-col items-center justify-center py-20 opacity-40">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mb-4"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="9" x2="15" y2="15"/><line x1="15" y1="9" x2="9" y2="15"/></svg>
              <p className="text-[12px] font-semibold">Coming Soon</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
