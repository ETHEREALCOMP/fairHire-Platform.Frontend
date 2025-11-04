import ActiveTask from "@/components/ActiveTask/ActiveTask";
import LatestFeedback from "@/components/LatestFeedback/LatestFeedback";
import MyProgress from "@/components/MyProgress/MyProgress";
import MyTasks from "@/components/MyTasks/MyTasks";
import ProfileCard from "@/components/ProfileCard/ProfileCard";

export default function CandidatePage() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] py-8">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#F8F8F8] mb-4">
            Твій шлях до чесного найму
          </h1>
          <p className="text-xl text-[#99A1AF]">
            Покажи свої навички через дії, не слова
          </p>
        </div>

        {/* Main Content - Vertical Layout */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center">
          {/* Left Column - Main Content */}
          <div className="w-full lg:w-[810px] space-y-8">
            <ActiveTask />
            <MyTasks />
            <LatestFeedback />
          </div>

          {/* Right Column - Sidebar */}
          <div className="w-full lg:w-[390px] space-y-8">
            <ProfileCard />
            <MyProgress />
          </div>
        </div>
      </div>
    </div>
  );
}
