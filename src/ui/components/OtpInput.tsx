import React, { useRef } from "react";

interface OtpInputProps {
  length?: number;
  value: string;
  onChange: (value: string) => void;
}

export default function OtpInput({
  length = 4,
  value,
  onChange,
}: OtpInputProps) {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const val = e.target.value;
    if (/[^0-9]/.test(val)) return; // allow only numbers

    const newValue = value.split("");
    newValue[index] = val.slice(-1); // Take only the last character entered
    const combined = newValue.join("").slice(0, length);
    onChange(combined);

    // Auto focus next
    if (val && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace") {
      if (!value[index] && index > 0) {
        // If current is empty, focus previous
        inputsRef.current[index - 1]?.focus();
      } else {
        // Just clear current
        const newValue = value.split("");
        newValue[index] = "";
        onChange(newValue.join(""));
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData("text/plain")
      .replace(/[^0-9]/g, "")
      .slice(0, length);
    onChange(pastedData);
    if (pastedData.length > 0) {
      inputsRef.current[Math.min(pastedData.length - 1, length - 1)]?.focus();
    }
  };

  return (
    <div className="flex gap-4 justify-between w-full">
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          ref={(el) => {
            inputsRef.current[i] = el;
          }}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          value={value[i] || ""}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          onPaste={handlePaste}
          className="w-[65px] h-[56px] text-center text-xl font-medium bg-white border border-border-primary rounded-2xl outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-text-primary"
        />
      ))}
    </div>
  );
}
