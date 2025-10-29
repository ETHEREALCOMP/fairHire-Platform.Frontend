import ActiveTask from "@/copmonents/ActiveTask/ActiveTask";
import LatestFeedback from "@/copmonents/LatestFeedback/LatestFeedback";
import MyProgress from "@/copmonents/MyProgress/MyProgress";
import MyTasks from "@/copmonents/MyTasks/MyTasks";
import ProfileCard from "@/copmonents/ProfileCard/ProfileCard";
import Link from "next/link";
export default function Candidate() {
  return (
    <div>
      <h1>Candidate Page</h1>
      <Link href="/"> link home</Link>
      <ActiveTask />
      <MyTasks />
      <LatestFeedback />
      <ProfileCard />
      <MyProgress />
    </div>
  );
}
