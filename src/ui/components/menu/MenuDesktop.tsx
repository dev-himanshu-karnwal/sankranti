import { Link } from 'react-router-dom';
import DesktopProductCard from '../DesktopProductCard';
import { categories } from '../../../data/menu';

export default function MenuDesktop() {
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
        <div className="flex flex-row flex-wrap justify-center gap-x-12 gap-y-12 mb-24 w-full">
          {categories.map((cat, idx) => (
            <Link to={`/category/${cat.title.toLowerCase()}`} key={idx} className="flex flex-col items-center gap-5 group">
              <div className="w-[140px] h-[140px] rounded-full bg-surface-muted flex items-center justify-center p-3 shadow-sm border border-transparent group-hover:border-primary/20 group-hover:-translate-y-2 transition-all duration-300">
                <img src={cat.image} alt={cat.title} className="w-[85%] h-[85%] object-contain mix-blend-multiply drop-shadow-md transition-transform duration-500 group-hover:scale-110" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
              <span className="text-[16px] font-bold text-text-primary tracking-wide group-hover:text-primary transition-colors">{cat.title}</span>
            </Link>
          ))}
        </div>
        <div className="w-full flex flex-col items-center mb-10 pt-10 border-t border-border-subtle">
          <h2 className="text-[32px] font-extrabold text-text-primary mb-12 relative text-center">Sankranti Recommends<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-primary rounded-full"></div></h2>
          <DesktopProductCard imageSrc="/images/protein_bowl.png" title="Protein Bowl" description="Ghee rice base. Pick a protein, curry sauce, and toppings. Fryums on the side. Prepared freshly to your liking." price="$14.95" buttonLabel="ADD TO CART" />
        </div>
      </main>
    </div>
  );
}
