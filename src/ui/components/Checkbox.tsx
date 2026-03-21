interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Checkbox({ label, className = "", ...props }: CheckboxProps) {
  return (
    <label className={`flex items-center gap-2 cursor-pointer text-sm text-[#432424] ${className}`}>
      <input
        type="checkbox"
        className="accent-primary w-4 h-4 cursor-pointer"
        {...props}
      />
      {label}
    </label>
  );
}
