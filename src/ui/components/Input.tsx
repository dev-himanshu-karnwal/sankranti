interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
}

export default function Input({
  label,
  helperText,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      {label && (
        <label className="text-sm text-text-muted sr-only">{label}</label>
      )}
      <input
        className="w-full bg-transparent border-b border-border-primary py-3 text-text-primary placeholder:text-text-muted outline-none focus:border-secondary transition-colors text-[12px]"
        {...props}
      />
      {helperText && (
        <p className="text-[10px] text-text-secondary mt-2 max-w-[84%] mx-auto text-center leading-tight">
          {helperText}
        </p>
      )}
    </div>
  );
}
