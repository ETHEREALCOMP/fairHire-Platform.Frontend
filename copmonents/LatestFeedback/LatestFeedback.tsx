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
    <div className="bg-[#202020] rounded-2xl shadow-lg p-4 md:p-6 border border-[#202020] w-full">
      {" "}
      <h2 className="text-base md:text-[16px] font-normal text-[#F8F8F8] mb-6">
        Останній фідбек
      </h2>
      <div className="space-y-4 md:space-y-6">
        {feedbacks.map((feedback, index) => (
          <div
            key={index}
            className="border-b border-[#333333] pb-4 md:pb-6 last:border-0 last:pb-0"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
              {" "}
              <h3 className="text-sm md:text-[14px] font-normal text-[#F8F8F8]">
                {feedback.category}
              </h3>
              <span className="text-sm md:text-[14px] font-normal text-[#5DD62C]">
                {feedback.score}/100
              </span>
            </div>

            <div className="mb-3">
              <div className="w-full bg-[#202020] rounded-full h-2">
                <div
                  className="bg-[#171717] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${feedback.score}%` }}
                ></div>
              </div>
            </div>

            <p className="text-[14px] leading-5 font-normal text-[#99A1AF]">
              {feedback.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
