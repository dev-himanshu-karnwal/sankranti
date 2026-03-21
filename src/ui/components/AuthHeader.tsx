import { useNavigate } from "react-router-dom"

export default function AuthHeader({ heading, description }: { heading: string, description?: string }) {
    const navigate = useNavigate();

    return (
        <div className="sticky top-0 bg-surface-muted ">
            <div className="relative flex items-center justify-between mb-8 w-full">
                <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-text-secondary active:opacity-50 transition-opacity">
                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 15L1.5 8L8.5 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
            <div className="flex flex-col items-center justify-center mb-10">
                <img src="/images/flower_half_logo.png" alt="Sankranti Logo" className="w-[22px] sm:w-[42px] mb-1" />
                <h1 className="text-[20px] font-bold tracking-wide text-center uppercase">{heading}</h1>
                {description && <p className="text-sm font-normal text-center">{description}</p>}
            </div>
        </div>
    )
}