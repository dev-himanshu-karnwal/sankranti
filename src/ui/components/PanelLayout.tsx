import { useState } from "react";
import ProfileMenu from "./ProfileMenu";

function PanelLayout({
  isShowDeliveryOption,
}: {
  isShowDeliveryOption?: boolean;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between px-6 py-4 mt-2">
        <button
          onClick={() => setIsMenuOpen(true)}
          className="text-secondary hover:opacity-80 transition-opacity"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 23 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5001 0C15.3048 0 18.4001 3.09534 18.4001 6.9C18.4001 10.7047 15.3048 13.8 11.5001 13.8C7.69549 13.8 4.60015 10.7047 4.60015 6.9C4.60015 3.09534 7.69549 0 11.5001 0ZM11.5001 12.2667C14.4593 12.2667 16.8668 9.85918 16.8668 6.9C16.8668 3.94082 14.4593 1.53333 11.5001 1.53333C8.54097 1.53333 6.13348 3.94082 6.13348 6.9C6.13348 9.85918 8.54097 12.2667 11.5001 12.2667Z"
              fill="#751D57"
            />
            <path
              d="M2.91507 18.3067C4.80414 16.3886 7.30843 15.3323 9.96667 15.3323H13.0333C15.6915 15.3323 18.1959 16.3886 20.0849 18.3067C21.9647 20.2154 23 22.7349 23 25.4012C23 25.8246 22.6567 26.1678 22.2333 26.1678H0.766666C0.343264 26.1678 0 25.8246 0 25.4012C0 22.7349 1.03526 20.2154 2.91507 18.3067ZM21.4329 24.6345C21.0488 20.2857 17.4283 16.8656 13.0333 16.8656H9.96667C5.57167 16.8656 1.95117 20.2857 1.56707 24.6345H21.4329Z"
              fill="#751D57"
            />
          </svg>
        </button>
        {isShowDeliveryOption && (
          <button className="border border-secondary rounded-full px-5 py-[6px] text-[11px] font-bold text-text-primary tracking-wide bg-transparent">
            PICKUP OR DELIVERY
          </button>
        )}
        <button className="text-secondary hover:opacity-80 transition-opacity">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.11628 7.86058C1.94931 7.86058 1.81395 7.99594 1.81395 8.16291V23.8838C1.81395 24.0508 1.94931 24.1862 2.11628 24.1862H19.0465C19.2135 24.1862 19.3488 24.0508 19.3488 23.8838V8.16291C19.3488 7.99594 19.2135 7.86058 19.0465 7.86058H2.11628ZM0 8.16291C0 6.99412 0.947488 6.04663 2.11628 6.04663H19.0465C20.2153 6.04663 21.1628 6.99412 21.1628 8.16291V23.8838C21.1628 25.0526 20.2153 26.0001 19.0465 26.0001H2.11628C0.947488 26.0001 0 25.0526 0 23.8838V8.16291Z"
              fill="#751D57"
            />
            <path
              d="M10.5814 1.81395C8.74474 1.81395 7.25585 3.30287 7.25585 5.13953V9.37209C7.25585 9.873 6.84978 10.2791 6.34887 10.2791C5.84797 10.2791 5.44189 9.873 5.44189 9.37209V5.13953C5.44189 2.30105 7.74294 0 10.5814 0C13.4199 0 15.721 2.30105 15.721 5.13953V9.37209C15.721 9.873 15.3149 10.2791 14.814 10.2791C14.3131 10.2791 13.907 9.873 13.907 9.37209V5.13953C13.907 3.30287 12.4181 1.81395 10.5814 1.81395Z"
              fill="#751D57"
            />
          </svg>
        </button>
      </header>
      <ProfileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}

export default PanelLayout;
