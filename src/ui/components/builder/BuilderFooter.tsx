import Button from '../Button';

interface BuilderFooterProps {
  onAddToCart: () => void;
  title?: string;
}

export default function BuilderFooter({ onAddToCart, title = "Curry Bowl" }: BuilderFooterProps) {
  return (
    <div className="absolute bottom-0 left-0 w-full bg-white border-t border-border-subtle shadow-[0_-10px_40px_rgba(0,0,0,0.06)] px-6 py-5 flex items-center justify-between z-30">
      <div className="flex flex-col">
        <h3 className="text-[14px] font-bold text-text-primary mb-1 uppercase tracking-tight">{title}</h3>
        <p className="text-[9px] font-medium text-text-secondary leading-[1.3] max-w-[150px]">
          Select items to customize your {title}
        </p>
      </div>
      <Button
        variant="secondary"
        onClick={onAddToCart}
        className="!w-auto !py-[10px] !px-8 !text-[11px] !font-bold tracking-widest shadow-md active:scale-95 transition-transform duration-100 uppercase"
      >
        ADD TO CART
      </Button>
    </div>
  );
}
