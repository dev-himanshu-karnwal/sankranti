interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Checkbox({
  label,
  className = "",
  ...props
}: CheckboxProps) {
  return (
    <label
      className={`flex items-center gap-2 cursor-pointer text-[12px] text-text-secondary ${className}`}
    >
      <span className="relative flex items-center justify-center w-3 h-3 rounded-sm bg-checkbox shrink-0">
        <input
          type="checkbox"
          className="peer absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          {...props}
        />
        <svg
          className="hidden peer-checked:block w-3 h-3 text-primary pointer-events-none"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 6L5 9L10 3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {label}
    </label>
  );
}
