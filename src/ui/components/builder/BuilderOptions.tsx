import { customizationData } from '../../../data/customization';
import { VegIcon, NonVegIcon } from '../../../icons/icon';

interface BuilderOptionsProps {
  activeTab: string;
  selectedItems: string[];
  onToggleItem: (id: string) => void;
  onScrollToSection: (id: string) => void;
}

export default function BuilderOptions({ activeTab, selectedItems, onToggleItem, onScrollToSection }: BuilderOptionsProps) {
  return (
    <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden w-full bg-white flex flex-col pb-32">
      <div className="w-full bg-surface-base flex-shrink-0 flex items-center gap-6 px-6 py-3.5 overflow-x-auto [&::-webkit-scrollbar]:hidden z-20 shadow-sm border-b border-border-subtle/50 sticky top-0">
        {["Base", "Protein", "Curry Sauce", "Toppings", "Add-ons"].map((cat, idx) => (
          <div key={idx} className="flex items-center gap-6 flex-shrink-0 cursor-pointer" onClick={() => onScrollToSection(cat)}>
            <span className={`text-[12px] transition-colors py-1 ${activeTab.toLowerCase() === cat.toLowerCase() ? "font-bold text-text-primary" : "font-medium text-text-muted"}`}>{cat}</span>
            {idx < 4 && <div className="w-[1px] h-4 bg-black/10"></div>}
          </div>
        ))}
      </div>
      {customizationData.map((section, sIdx) => (
        <div key={sIdx} id={`section-${section.id.toLowerCase()}`} className="flex flex-col px-6 pt-10">
          <h2 className="text-[15px] font-bold text-text-primary tracking-wide mb-6 italic">{section.title}</h2>
          <div className="flex flex-col gap-6">
            {section.options.map((opt, oIdx) => {
              const isSelected = selectedItems.includes(opt.id);
              return (
                <div key={oIdx} onClick={() => onToggleItem(opt.id)} className="flex gap-5 cursor-pointer hover:bg-surface-muted active:scale-[0.98] transition-all duration-200 group">
                  <div className={`w-[85px] h-[75px] bg-surface-muted rounded-[16px] flex items-center justify-center relative overflow-hidden transition-colors duration-300 ${isSelected ? 'ring-2 ring-secondary/20' : ''}`}>
                    <img src={opt.image} alt={opt.title} className={`w-[110%] h-auto object-contain mix-blend-multiply drop-shadow-sm pb-1 transition-all duration-300 ${isSelected ? 'scale-105' : ''}`} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.classList.add('bg-surface-base'); }} />
                    {isSelected && <div className="absolute inset-0 flex items-center justify-center bg-white/10 fade-in"><div className="w-[38px] h-[38px] bg-secondary rounded-full flex items-center justify-center shadow-md transform scale-in mt-[-2px]"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div></div>}
                  </div>
                  <div className="flex flex-col flex-1 justify-center py-1">
                    <div className="mb-1 flex items-center">{opt.isVeg ? <VegIcon /> : <NonVegIcon />}</div>
                    <h3 className="text-[14px] font-bold text-text-primary leading-[1.2] mb-1.5">{opt.title}</h3>
                    {opt.desc && <p className="text-[9.5px] font-medium text-text-muted opacity-80 leading-[1.3] mb-1.5">{opt.desc}</p>}
                    {opt.price > 0 && <span className="text-[11px] font-bold text-primary tracking-wide">+${opt.price.toFixed(2)}</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
