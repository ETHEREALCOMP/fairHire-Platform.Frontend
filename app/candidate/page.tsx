import ActiveTask from "@/copmonents/ActiveTask/ActiveTask";
import LatestFeedback from "@/copmonents/LatestFeedback/LatestFeedback";
import MyProgress from "@/copmonents/MyProgress/MyProgress";
import MyTasks from "@/copmonents/MyTasks/MyTasks";
import ProfileCard from "@/copmonents/ProfileCard/ProfileCard";
export default function Candidate() {
  return (
    <div>
      Candidate
      <ActiveTask />
      <MyTasks />
      <LatestFeedback />
      <ProfileCard />
      <MyProgress />
    </div>
  );
}
