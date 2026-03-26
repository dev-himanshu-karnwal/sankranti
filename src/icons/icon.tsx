export const VegIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="11" height="11" rx="2" stroke="var(--color-veg)" strokeWidth="1"/>
    <circle cx="6" cy="6" r="3" fill="var(--color-veg)"/>
  </svg>
);

export const NonVegIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="11" height="11" rx="2" stroke="var(--color-non-veg)" strokeWidth="1"/>
    <circle cx="6" cy="6" r="3" fill="var(--color-non-veg)"/>
  </svg>
);

export const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const ChevronRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CheckboxCheckedIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="18" height="18" rx="4" fill="var(--color-surface-accent)"/>
    <path d="M5 9L8 12L13 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CheckboxUncheckedIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="16" height="16" rx="3" fill="transparent" stroke="var(--color-border-primary)" strokeWidth="2"/>
  </svg>
);

export const BannerStar = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2 L8.91 8.26 L2 9.27 L7 14.14 L5.82 21.02 L12 17.77 Z" fill="var(--color-primary)" />
    <path d="M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 Z" fill="var(--color-secondary)" />
  </svg>
);

export const LineItem = ({ label, price }: { label: string; price: string }) => (
  <div className="flex justify-between items-center w-full">
    <span className="text-[11px] font-medium text-text-primary tracking-wide">{label}</span>
    <span className="text-[11px] font-medium text-text-primary">{price}</span>
  </div>
);

export const ProfileUserIcon = () => (
  <svg width="23" height="27" viewBox="0 0 23 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.5001 0C15.3048 0 18.4001 3.09534 18.4001 6.9C18.4001 10.7047 15.3048 13.8 11.5001 13.8C7.69549 13.8 4.60015 10.7047 4.60015 6.9C4.60015 3.09534 7.69549 0 11.5001 0ZM11.5001 12.2667C14.4593 12.2667 16.8668 9.85918 16.8668 6.9C16.8668 3.94082 14.4593 1.53333 11.5001 1.53333C8.54097 1.53333 6.13348 3.94082 6.13348 6.9C6.13348 9.85918 8.54097 12.2667 11.5001 12.2667Z" fill="currentColor"/>
    <path d="M2.91507 18.3067C4.80414 16.3886 7.30843 15.3323 9.96667 15.3323H13.0333C15.6915 15.3323 18.1959 16.3886 20.0849 18.3067C21.9647 20.2154 23 22.7349 23 25.4012C23 25.8246 22.6567 26.1678 22.2333 26.1678H0.766666C0.343264 26.1678 0 25.8246 0 25.4012C0 22.7349 1.03526 20.2154 2.91507 18.3067ZM21.4329 24.6345C21.0488 20.2857 17.4283 16.8656 13.0333 16.8656H9.96667C5.57167 16.8656 1.95117 20.2857 1.56707 24.6345H21.4329Z" fill="currentColor"/>
  </svg>
);

export const ChevronLeftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18L9 12L15 6" />
  </svg>
);