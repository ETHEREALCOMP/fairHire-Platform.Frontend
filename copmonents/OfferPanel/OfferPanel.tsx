export default function OfferPanel() {
  return (
    <div className="pb-6 pt-8">
      <div className="flex flex-col w-[604px] h-[202px] bg-[#202020] rounded-2xl p-6">
        <div className="flex justify-between mb-12">
          <div>
            <h3 className="text-[#f8f8f8] text-[16px] leading-normal mb-2">
              Senior React Develope
            </h3>
            <p className="text-[#99a1af] text-[14px] leading-[1.4]">12</p>
            <p className="text-[#99a1af] text-[14px] leading-[1.4]">
              кандидатів
            </p>
          </div>
          <p className="flex justify-center items-center text-[#0f0f0f] text-[12px] leading-[1.3] rounded-[7px] bg-[#5dd62c] w-16 h-[22px] py-0.5 px-2">
            Активн
          </p>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            className="flex justify-center items-center py-2 px-4 w-[271px] h-9 rounded-[7px] bg-white text-[14px] leading-[1.4] text-[#0a0a0a]"
          >
            Редагувати
          </button>
          <button
            type="button"
            className="flex justify-center items-center py-2 px-4 w-[271px] h-9 rounded-[7px] bg-[#5dd62c] text-[14px] leading-[1.4] text-[#0a0a0a]"
          >
            Переглянути
          </button>
        </div>
      </div>
    </div>
  );
}
