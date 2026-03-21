interface RadioGroupProps {
  label: string;
  options: { label: string; value: string }[];
  name: string;
  value?: string;
  onChange?: (val: string) => void;
  className?: string;
}

export default function RadioGroup({ label, options, name, value, onChange, className = "" }: RadioGroupProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <span className="text-sm text-[#767676]">{label}</span>
      <div className="flex items-center gap-6">
        {options.map((opt) => (
          <label key={opt.value} className="flex items-center gap-2 cursor-pointer text-sm text-[#767676]">
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={(e) => onChange?.(e.target.value)}
              className="accent-primary w-4 h-4 cursor-pointer"
            />
            {opt.label}
          </label>
        ))}
      </div>
    </div>
  );
}
