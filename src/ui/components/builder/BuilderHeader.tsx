import { useNavigate } from 'react-router-dom';
import { AppButton } from '../index';

export default function BuilderHeader({ title = "Bowls", imageSrc = "/images/protein_bowl.png" }: { title?: string; imageSrc?: string }) {
  const navigate = useNavigate();
  return (
    <header className="flex flex-col items-center px-6 pt-12 pb-8 w-full flex-shrink-0 bg-surface-muted relative">
      <div className="flex justify-between items-center w-full absolute top-12 left-0 px-6">
        <AppButton onClick={() => navigate(-1)} className="!w-auto !p-2 -ml-2 !justify-center hover:bg-transparent">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><path d="m15 18-6-6 6-6"/></svg>
        </AppButton>
        <span className="text-[13px] font-semibold text-text-primary tracking-wide text-center flex-1 uppercase tracking-tight">Mobile Order: {title}</span>
        <AppButton className="!w-auto !p-2 -mr-2 !justify-center hover:bg-transparent">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </AppButton>
      </div>
      <h1 className="text-[20px] font-extrabold text-text-primary tracking-wide text-center mt-12 mb-6 uppercase tracking-tight">{title}</h1>
      <div className="w-[180px] h-auto relative pointer-events-none drop-shadow-2xl">
        <img src={imageSrc} alt={title} className="w-full h-[180px] object-cover " onError={(e) => { e.currentTarget.style.display = 'none'; }} />
      </div>
    </header>
  );
}
