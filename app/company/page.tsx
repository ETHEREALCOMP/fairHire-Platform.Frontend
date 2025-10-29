import CandidateList from "@/copmonents/CandidateList/CandidateList";
import CompanyPanel from "@/copmonents/CompanyPanel/CompanyPanel";
import Link from "next/link";

export default function Company() {
  return (
    <div>
      <h1>Company Page</h1>
      <Link href="/"> link home</Link>
      <CompanyPanel />
      <CandidateList />
    </div>
  );
}
