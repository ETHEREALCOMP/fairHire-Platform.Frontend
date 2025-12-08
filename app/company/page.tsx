import CandidateList from "@/copmonents/CandidateList/CandidateList";
import CompanyPanel from "@/copmonents/CompanyPanel/CompanyPanel";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import CompanyPageClient from "./CompanyPage.client";

export default function Company() {
  return (
    <div>
      <div className="flex justify-between pb-6 pt-12 items-center">
        <div className="flex flex-col gap-2 flex-dire">
          <h1>Панель компанії</h1>
          <p className="text-[#99a1af] font-normal">
            Знаходьте таланти через їхні дії, не резюме
          </p>
        </div>
        <button
          type="button"
          className="flex gap-4 justify-center items-center w-[181px] h-9 rounded-[7px] bg-[#5dd62c] font-medium hover:bg-[#4cc026] transition text-[14px] leading-[1.43] text-[#0f0f0f] cursor-pointer"
        >
          <FiPlus size={16} /> Створити вакансію
        </button>
      </div>
      <CompanyPageClient />
    </div>
  );
}
