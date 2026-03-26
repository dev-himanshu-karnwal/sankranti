import Button from './Button';
import { VegIcon, NonVegIcon } from './icons/icon';

interface DesktopProductCardProps {
  imageSrc: string;
  title: string;
  description: string;
  price: string;
  buttonLabel?: string;
  onAddClick?: () => void;
  className?: string;
  isVeg?: boolean;
}

export default function DesktopProductCard({
  imageSrc,
  title,
  description,
  price,
  buttonLabel = "ADD ITEM",
  onAddClick,
  className = "",
  isVeg
}: DesktopProductCardProps) {
  return (
    <div className={`bg-white rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-border-subtle/70 flex flex-col cursor-pointer hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 group overflow-hidden ${className}`}>

      {/* Image Block */}
      <div className="w-full h-[180px] bg-surface-muted flex items-center justify-center px-6 pt-5 pb-3 relative overflow-hidden flex-shrink-0">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-contain mix-blend-multiply drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      </div>

      {/* Content Block */}
      <div className="flex flex-col flex-1 px-5 pt-4 pb-5 justify-between">
        <div>
          {isVeg !== undefined && (
            <div className="mb-2">{isVeg ? <VegIcon /> : <NonVegIcon />}</div>
          )}
          <h3 className="text-[16px] font-extrabold text-text-primary leading-tight tracking-tight mb-2">{title}</h3>
          <p className="text-[12px] font-medium text-text-secondary leading-[1.55] line-clamp-2">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-5 pt-4 border-t border-border-subtle">
          <span className="text-[17px] font-extrabold text-text-primary">{price}</span>
          <Button
            variant="secondary"
            onClick={onAddClick}
            className="!w-auto !py-[8px] !px-6 !text-[11px] !font-bold tracking-widest shadow-sm"
          >
            {buttonLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
