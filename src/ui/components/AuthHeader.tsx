import { useNavigate } from "react-router-dom"
import AppButton from './AppButton';

export default function AuthHeader({ heading, description }: { heading: string, description?: string }) {
    const navigate = useNavigate();

    return (
        <div className="sticky top-0 bg-surface-muted ">
            <div className="relative flex items-center justify-between mb-8 w-full">
                <AppButton onClick={() => navigate(-1)} className="!w-auto !p-2 -ml-2 text-arrow active:opacity-50 !justify-center">
                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 15L1.5 8L8.5 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </AppButton>
            </div>
            <div className="flex flex-col items-center justify-center ">
                <img src="/images/flower_half_logo.png" alt="Sankranti Logo" className="w-[22px] sm:w-[42px]" />
                <h1 className="text-[20px] font-bold tracking-wide text-center uppercase">{heading}</h1>
                {description && <p className="text-[12px] font-normal text-center">{description}</p>}
            </div>
        </div>
    )
}