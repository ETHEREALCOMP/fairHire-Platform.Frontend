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

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600 bg-green-50 border-green-200";
    if (score >= 80) return "text-blue-600 bg-blue-50 border-blue-200";
    if (score >= 70) return "text-yellow-600 bg-yellow-50 border-yellow-200";
    return "text-red-600 bg-red-50 border-red-200";
  };

  const getScoreWidth = (score: number) => {
    return `${score}%`;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Останній фідбек</h2>

      <div className="space-y-6">
        {feedbacks.map((feedback, index) => (
          <div
            key={index}
            className="border-b border-gray-100 pb-6 last:border-0 last:pb-0"
          >
            <div className="flex justify-between items-center mb-3">
              <span className="font-semibold text-gray-900 text-lg">
                {feedback.category}
              </span>
              <div
                className={`flex items-center px-3 py-1 rounded-lg border font-bold ${getScoreColor(
                  feedback.score
                )}`}
              >
                {feedback.score}/100
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-3">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Прогрес</span>
                <span>{feedback.score}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${
                    feedback.score >= 90
                      ? "bg-green-500"
                      : feedback.score >= 80
                      ? "bg-blue-500"
                      : feedback.score >= 70
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                  style={{ width: getScoreWidth(feedback.score) }}
                ></div>
              </div>
            </div>

            <p className="text-gray-600 text-base leading-relaxed">
              {feedback.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
