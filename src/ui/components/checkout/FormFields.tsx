import React from 'react';

export const FieldLabel = ({
  children,
  required = true,
}: {
  children: React.ReactNode;
  required?: boolean;
}) => (
  <p className="text-[11px] md:text-[13px] font-semibold text-text-primary mb-[5px]">
    {children}
    {required && (
      <span className="text-primary ml-[2px]">*</span>
    )}
  </p>
);

export const FormInput = (props: React.InputHTMLAttributes<HTMLInputElement> & { icon?: React.ReactNode }) => (
  <div className="relative w-full">
    <input
      {...props}
      className={`w-full border border-border-primary rounded-[4px] px-3 py-[9px] md:py-[12px] text-[12px] md:text-[14px] text-text-primary placeholder:text-text-muted outline-none focus:border-secondary transition-colors duration-150 bg-white ${props.icon ? 'pr-24' : ''} ${props.className || ''}`}
    />
    {props.icon && (
      <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1 items-center pointer-events-none">
        {props.icon}
      </div>
    )}
  </div>
);

export const FormTextArea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea
    {...props}
    className="w-full border border-border-primary rounded-[4px] px-3 py-[9px] md:py-[12px] text-[12px] md:text-[14px] text-text-primary placeholder:text-text-muted outline-none focus:border-secondary transition-colors duration-150 bg-white resize-none"
  />
);

export const Field = ({
  label,
  required = true,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col">
    <FieldLabel required={required}>{label}</FieldLabel>
    {children}
  </div>
);
