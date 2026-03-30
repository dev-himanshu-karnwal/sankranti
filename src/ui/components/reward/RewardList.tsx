import { rewardItems } from '../../../data/rewards';

export default function RewardList() {
  return (
    <div className="w-full bg-white flex flex-col items-center flex-1">
      <div className="w-full max-w-[1200px] py-10 md:py-16 px-6">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {rewardItems.map((item, idx) => (
            <div key={idx} className="bg-white rounded-[24px] md:rounded-[32px] p-5 md:p-7 flex items-center md:flex-col md:text-center gap-5 md:gap-6 shadow-[0_4px_4px_rgba(0,0,0,0.25)] border border-border-subtle/50 transition-all duration-300 cursor-pointer group">
              <div className="w-[100px] h-[90px] md:w-full md:h-[180px] bg-surface-muted rounded-[16px] md:rounded-[24px] flex-shrink-0 flex items-center justify-center overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="flex flex-col flex-1">
                <h3 className="text-[17px] md:text-[21px] font-bold text-text-primary leading-tight mb-1.5">{item.title}</h3>
                <p className="text-[10px] md:text-[12px] font-medium text-text-muted leading-[1.6] line-clamp-2 md:line-clamp-none opacity-80">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
