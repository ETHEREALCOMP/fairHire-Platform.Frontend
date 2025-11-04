export default function LatestFeedback() {
  const feedbacks = [
    { category: "Логіка", score: 85, comment: "Добре структурований код" },
    {
      category: "Комунікація",
      score: 90,
      comment: "Чіткі коментарі та пояснення",
    },
    {
      category: "Простота",
      score: 80,
      comment: "Можна спростити деякі функції",
    },
    { category: "Тестування", score: 75, comment: "Додайте більше edge cases" },
    {
      category: "Потенціал росту",
      score: 88,
      comment: "Відмінне розуміння концепцій",
    },
  ];

  return (
    <div className="bg-[#202020] rounded-2xl shadow-lg p-6  border-[#202020] w-[810px]">
      <h2 className="text-[16px] leading-5 font-normal text-[#F8F8F8] mb-7">
        Останній фідбек
      </h2>

      <div className="space-y-6">
        {feedbacks.map((feedback, index) => (
          <div
            key={index}
            className="border-b border-[#333333] pb-6 last:border-0 last:pb-0"
          >
            {/* Заголовок категорії та оцінка в одному рядку */}
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-[14px] leading-[20px] font-normal text-[#F8F8F8]">
                {feedback.category}
              </h3>

              {/* Оцінка з правого боку */}
              <span className="text-[14px] leading-[20px] font-normal text-[#5DD62C]">
                {feedback.score}/100
              </span>
            </div>

            {/* Стрічка прогресу */}
            <div className="mb-3">
              <div className="w-full bg-[#202020] rounded-full h-2">
                <div
                  className="bg-[#171717] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${feedback.score}%` }}
                ></div>
              </div>
            </div>

            {/* Коментар */}
            <p className="text-[14px] leading-[20px] font-normal text-[#99A1AF]">
              {feedback.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
