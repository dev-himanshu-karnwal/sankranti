const VARIANTS = {
    primary: "bg-primary text-text-on-primary",
    secondary: "bg-secondary text-text-on-secondary",
};

export default function Button({
    children,
    variant = "primary",
    onClick,
    type = "button",
    className = "",
    disabled = false,
}: {
    children: React.ReactNode;
    variant?: keyof typeof VARIANTS;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    className?: string;
    disabled?: boolean;
}) {
    const baseStyles = "px-6 py-[14px] text-[13px] font-medium transition-colors relative isolate w-full rounded-[10px] flex items-center justify-center";

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
                ${baseStyles}
                ${VARIANTS[variant] || VARIANTS.primary}
                ${disabled ? "opacity-50 cursor-not-allowed" : ""}
                ${className}
            `}
        >
            {/* The triangular side notches */}
            {['primary', 'secondary'].includes(variant) && (
                <>
                    <span className="absolute top-1/2 left-0 -ml-[5px] -translate-y-1/2 w-3 h-3 bg-inherit rotate-45 -z-10 rounded-[2px]" />
                    <span className="absolute top-1/2 right-0 -mr-[5px] -translate-y-1/2 w-3 h-3 bg-inherit rotate-45 -z-10 rounded-[2px]" />
                </>
            )}
            {children}
        </button>
    );
}