"use client";

import CandidateList from "@/copmonents/CandidateList/CandidateList";
import CompanyPanel from "@/copmonents/CompanyPanel/CompanyPanel";
import OfferPanel from "@/copmonents/OfferPanel/OfferPanel";
import { useState } from "react";

const CompanyPageClient = () => {
  const [isActive, setIsActive] = useState<"candidates" | "offers">(
    "candidates"
  );

  return (
    <div>
      <CompanyPanel />
      <div className="inline-flex rounded-full bg-[#f5f5f5] p-1">
        <button
          onClick={() => setIsActive("candidates")}
          className={`px-4 py-1.5 rounded-full text-sm font-medium text-[#0a0a0a]  active:white  transition focus:bg-white 
            ${
              isActive === "candidates"
                ? "bg-white shadow"
                : "hover:bg-white/10"
            }`}
        >
          Кандидати
        </button>
        <button
          onClick={() => setIsActive("offers")}
          className={`px-4 py-1.5 rounded-full text-sm font-medium text-[#0a0a0a] active:white  transition focus:bg-white 
          ${isActive === "offers" ? "bg-white shadow" : "hover:bg-white/10"}`}
        >
          Вакансії
        </button>
      </div>
      {isActive === "candidates" ? <CandidateList /> : <OfferPanel />}
    </div>
  );
};

export default CompanyPageClient;
