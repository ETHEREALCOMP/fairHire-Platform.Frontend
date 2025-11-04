import CandidateList from "@/components/CandidateList/CandidateList";
import CompanyPanel from "@/components/CompanyPanel/CompanyPanel";
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
