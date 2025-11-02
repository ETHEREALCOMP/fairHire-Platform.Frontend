import ActiveTask from "@/copmonents/ActiveTask/ActiveTask";
import LatestFeedback from "@/copmonents/LatestFeedback/LatestFeedback";
import MyProgress from "@/copmonents/MyProgress/MyProgress";
import MyTasks from "@/copmonents/MyTasks/MyTasks";
import ProfileCard from "@/copmonents/ProfileCard/ProfileCard";

export default function CandidatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Твій шлях до чесного найму
          </h1>
          <p className="text-xl text-gray-600">
            Покажи свої навички через дії, не слова
          </p>
        </div>

        {/* Main Content - Vertical Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Main Content */}
          <div className="flex-1 space-y-8">
            <ActiveTask />
            <MyTasks />
            <LatestFeedback />
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:w-80 space-y-8">
            <ProfileCard />
            <MyProgress />
          </div>
        </div>
      </div>
    </div>
  );
}
