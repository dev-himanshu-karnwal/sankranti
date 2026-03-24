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
      <span className="text-[12px] text-text-muted">{label}</span>
      <div className="flex items-center gap-6">
        {options.map((opt) => (
          <label key={opt.value} className="flex items-center gap-2 cursor-pointer text-[12px] text-text-muted">
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={(e) => onChange?.(e.target.value)}
              className="accent-primary w-3 h-3 cursor-pointer"
            />
            {opt.label}
          </label>
        ))}
      </div>
    </div>
  );
}
