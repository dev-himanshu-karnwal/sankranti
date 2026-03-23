import { useState } from "react";
import { Link } from "react-router-dom";

const CopyButton = ({ path }: { path: string }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent bubbling up issues
        navigator.clipboard.writeText(path);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button 
            onClick={handleCopy}
            className={`p-[10px] shrink-0 border rounded-[8px] transition-colors flex items-center justify-center ${
                copied 
                    ? "bg-[#E6F4EA] border-[#34A853] text-[#34A853]" 
                    : "bg-surface-base hover:bg-surface-muted border-border-primary/50 hover:border-border-primary text-text-secondary"
            }`}
            title="Copy path"
        >
            {copied ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                </svg>
            )}
        </button>
    );
};

export default function DirectoryPage() {
    const pages = [
        { name: "Splash Page", path: "/" },
        { name: "Onboarding Page", path: "/onboard" },
        { name: "Sign In Page", path: "/auth/sign-in" },
        { name: "Create Account Page", path: "/auth/create-account" },
        { name: "Verification (OTP) Page", path: "/auth/verify" },
        { name: "Account Successful Page", path: "/account-successfull" },
    ];

    return (
        <div className="min-h-dvh bg-surface-base p-6 text-text-primary">
            <h1 className="text-2xl font-bold mb-6 text-primary border-b border-border-primary pb-3">
                App Directory
            </h1>
            <p className="text-text-secondary text-sm mb-6">
                Use the links below to quickly navigate through the application pages during development.
            </p>
            
            <div className="flex flex-col gap-3">
                {pages.map((page) => (
                    <div 
                        key={page.path}
                        className="p-4 bg-surface-subtle border border-border-primary rounded-[10px] shadow-[0_2px_4px_rgba(0,0,0,0.05)] hover:border-primary hover:bg-surface-accent transition-all flex items-center justify-between"
                    >
                        <Link
                            to={page.path}
                            className="flex-1 min-w-0 pr-4 block"
                        >
                            <h2 className="text-[16px] font-semibold text-text-primary capitalize">{page.name}</h2>
                            <code className="text-[12px] text-text-muted mt-1 block font-mono bg-surface-base px-2 py-1 rounded w-fit border border-border-primary/50 truncate">
                                {page.path}
                            </code>
                        </Link>
                        
                        <CopyButton path={window.location.origin + page.path} />
                    </div>
                ))}
            </div>
        </div>
    );
}
