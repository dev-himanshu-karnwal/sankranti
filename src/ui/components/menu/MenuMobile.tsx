import { Link, useNavigate } from 'react-router-dom';
import { categories } from '../../../data/menu';
import PanelLayout from '../PanelLayout';
import PanelFooter from '../PanelFooter';
import Button from '../Button';
import { recommendationStore } from '../../../data/recommendationStore';
import { useEffect, useState } from 'react';

export default function MenuMobile() {
  const navigate = useNavigate();
  const [recommendedItems, setRecommendedItems] = useState(recommendationStore.getRecommendedItems());

  useEffect(() => {
    const unsub = recommendationStore.subscribe((items) => setRecommendedItems(items));
    return () => { unsub(); };
  }, []);

  return (
    <div className="md:hidden flex flex-col h-screen w-full max-w-[428px] mx-auto overflow-hidden bg-white relative z-10 shadow-xl">
      <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden flex flex-col items-center">
        <div className="relative w-full h-[220px] bg-surface-muted flex-shrink-0 overflow-hidden">
          <img src="/images/restaurant_interior.png" alt="Interior" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.classList.add('bg-primary/10'); }} />
          <div className="absolute top-0 left-0 w-full z-10 pt-4"><PanelLayout isShowDeliveryOption={false} /></div>
        </div>
        <div className="w-full bg-primary text-white py-3 flex justify-center items-center"><h1 className="text-[26px] font-extrabold tracking-wide">Menu</h1></div>
        <div className="w-full px-6 pt-10 pb-4"><div className="grid grid-cols-3 gap-y-7 gap-x-2">
          {categories.map((cat, idx) => (
            <Link to={`/category/${cat.title.toLowerCase()}`} key={idx} className="flex flex-col items-center gap-3 group">
              <div className="w-[88px] h-[88px] rounded-full bg-surface-muted flex items-center justify-center p-2 group-hover:scale-105 transition-transform">
                <img src={cat.image} alt={cat.title} className="w-[100%] h-[100%] object-contain mix-blend-multiply drop-shadow-sm transition-transform group-hover:scale-110" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
              <span className="text-[11px] font-semibold text-text-primary text-center">{cat.title}</span>
            </Link>
          ))}
        </div></div>
        <div className="w-full text-left px-7 mb-4 mt-2"><h2 className="text-[18px] font-semibold text-text-primary tracking-wide">Sankranti Recommends</h2></div>
        <div className="flex flex-col gap-5 px-6 pb-10">
          {recommendedItems.map((item, idx) => (
            <div key={idx} onClick={() => navigate(`/builder/${item.id}`)} className="bg-white rounded-[16px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-3.5 border border-border-subtle flex gap-4 cursor-pointer hover:shadow-md transition-all active:scale-[0.98]">
              <div className="w-[110px] h-[90px] bg-surface-muted rounded-[10px] flex items-center justify-center relative overflow-hidden flex-shrink-0">
                <img src={item.imageSrc} alt={item.title} className="w-[100%] h-auto object-contain drop-shadow-md mix-blend-multiply relative" />
              </div>
              <div className="flex flex-col flex-1 py-1 pr-1">
                <h3 className="text-[14px] font-bold text-text-primary mb-1 line-clamp-1">{item.title}</h3>
                <p className="text-[9px] font-medium text-text-secondary leading-[1.4] mb-3 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-[14px] font-extrabold text-text-primary">{item.price}</span>
                  <Button variant="secondary" className="!w-auto !h-[26px] !py-0 !px-4 !text-[10px] !font-bold !rounded-[6px]">Add Item</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-shrink-0 bg-white border-t border-border-subtle pb-[env(safe-area-inset-bottom)] relative z-10"><PanelFooter /></div>
    </div>
  );
}
