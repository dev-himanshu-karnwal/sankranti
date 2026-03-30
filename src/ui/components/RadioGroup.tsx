interface RadioGroupProps {
  label: string;
  options: { label: string; value: string }[];
  name: string;
  value?: string;
  onChange?: (val: string) => void;
  className?: string;
}

export default function RadioGroup({
  label,
  options,
  name,
  value,
  onChange,
  className = "",
}: RadioGroupProps) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <span className="text-[12px] text-text-muted font-medium uppercase tracking-wider">{label}</span>
      <div className="flex items-center gap-8">
        {options.map((opt) => {
          const isActive = value === opt.value;
          return (
            <label
              key={opt.value}
              className="group flex items-center gap-2.5 cursor-pointer transition-all duration-200"
            >
              <div className="relative flex items-center justify-center">
                <input
                  type="radio"
                  name={name}
                  value={opt.value}
                  checked={isActive}
                  onChange={(e) => onChange?.(e.target.value)}
                  className="peer sr-only"
                />
                {/* Custom Outer Circle */}
                <div className={`w-[18px] h-[18px] rounded-full border-2 transition-all duration-200 
                  ${isActive ? 'border-primary' : 'border-border-primary group-hover:border-primary/50'}`} 
                />
                {/* Inner Dot */}
                <div className={`absolute w-[10px] h-[10px] rounded-full bg-primary transition-all duration-200 transform
                  ${isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} 
                />
              </div>
              <span className={`text-[12px] font-medium transition-colors duration-200 
                ${isActive ? 'text-text-primary' : 'text-text-muted group-hover:text-text-primary/70'}`}>
                {opt.label}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
