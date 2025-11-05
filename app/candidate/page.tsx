import ActiveTask from "@/copmonents/ActiveTask/ActiveTask";
import LatestFeedback from "@/copmonents/LatestFeedback/LatestFeedback";
import MyProgress from "@/copmonents/MyProgress/MyProgress";
import MyTasks from "@/copmonents/MyTasks/MyTasks";
import ProfileCard from "@/copmonents/ProfileCard/ProfileCard";

export default function CandidatePage() {
  return (
    <div className="min-h-screen py-4 md:py-8">
      <div className="container mx-auto px-4 xl:max-w-[1200px]">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-4xl font-bold text-[#F8F8F8] mb-4">
            Твій шлях до чесного найму
          </h1>
          <p className="text-base md:text-xl text-[#99A1AF]">
            Покажи свої навички через дії, не слова
          </p>
        </div>
        <div className="flex flex-col xl:flex-row gap-6 xl:gap-8">
          <div className="w-full xl:w-[67%] space-y-6 xl:space-y-8">
            <ActiveTask />
            <MyTasks />
            <LatestFeedback />
          </div>
          <div className="w-full xl:w-[33%] space-y-6 xl:space-y-8">
            <ProfileCard />
            <MyProgress />
          </div>
        </div>
      </div>
    </div>
  );
}
