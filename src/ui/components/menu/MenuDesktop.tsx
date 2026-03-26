import { Link, useNavigate } from 'react-router-dom';
import DesktopProductCard from '../DesktopProductCard';
import { categories } from '../../../data/menu';
import { recommendationStore } from '../../../data/recommendationStore';
import { useEffect, useState } from 'react';

export default function MenuDesktop() {
  const navigate = useNavigate();
  const [recommendedItems, setRecommendedItems] = useState(recommendationStore.getRecommendedItems());

  useEffect(() => {
    const unsub = recommendationStore.subscribe((items) => setRecommendedItems(items));
    return () => { unsub(); };
  }, []);
  return (
    <div className="hidden md:flex flex-col flex-1 w-full bg-surface-subtle">
      <main className="flex-1 flex flex-col items-center w-full max-w-[1200px] mx-auto pb-20 fade-in px-6">
        <div className="relative w-full h-[280px] lg:h-[340px] rounded-[30px] overflow-hidden mt-8 mb-16 shadow-[0_10px_30px_rgba(0,0,0,0.1)] group">
          <img src="/images/restaurant_interior.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.classList.add('bg-primary/20'); }} />
          <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center pointer-events-none">
            <h1 className="text-white text-[64px] font-extrabold tracking-widest uppercase drop-shadow-xl text-center leading-none">Our Menu</h1>
            <p className="text-white text-[18px] font-medium tracking-wide drop-shadow-md mt-4">Discover the true taste of Sankranti</p>
          </div>
        </div>
        <div className="w-full relative px-12 mb-24 group/carousel">
          <div 
            id="category-carousel"
            className="flex flex-row gap-12 overflow-x-auto no-scrollbar scroll-smooth w-full px-4 py-4"
          >
            {categories.map((cat, idx) => (
              <Link to={`/category/${cat.title.toLowerCase()}`} key={idx} className="flex flex-col items-center gap-5 group flex-shrink-0">
                <div className="w-[140px] h-[140px] rounded-full bg-surface-muted flex items-center justify-center p-3 shadow-sm border border-transparent group-hover:border-primary/20 group-hover:-translate-y-2 transition-all duration-300">
                  <img src={cat.image} alt={cat.title} className="w-[100%] h-[100%] object-contain mix-blend-multiply drop-shadow-md transition-transform duration-500 group-hover:scale-110" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                </div>
                <span className="text-[16px] font-bold text-text-primary tracking-wide group-hover:text-primary transition-colors">{cat.title}</span>
              </Link>
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={() => document.getElementById('category-carousel')?.scrollBy({ left: -300, behavior: 'smooth' })}
            className="absolute left-0 top-[70px] -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity z-10 hover:bg-primary hover:text-white"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button 
            onClick={() => document.getElementById('category-carousel')?.scrollBy({ left: 300, behavior: 'smooth' })}
            className="absolute right-0 top-[70px] -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity z-10 hover:bg-primary hover:text-white"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
        <div className="w-full flex flex-col items-center mb-10 pt-10 border-t border-border-subtle">
          <h2 className="text-[32px] font-extrabold text-text-primary mb-12 relative text-center">Sankranti Recommends<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-primary rounded-full"></div></h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-[900px] px-6">
            {recommendedItems.map((item, idx) => (
              <div key={idx} onClick={() => navigate(`/builder/${item.id}`)} className="cursor-pointer hover:scale-[1.03] transition-transform duration-300">
                <DesktopProductCard 
                  imageSrc={item.imageSrc} 
                  title={item.title} 
                  description={item.description} 
                  price={item.price} 
                  buttonLabel="ADD ITEM" 
                  onAddClick={(e?: any) => { 
                    e?.stopPropagation(); 
                    recommendationStore.addRecommendedItem(item);
                    navigate(`/builder/${item.id}`); 
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
