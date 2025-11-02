import { LuFileText } from 'react-icons/lu';
import { LuUsers } from 'react-icons/lu';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { MdOutlineRemoveRedEye } from 'react-icons/md';

export default function CompanyPanel() {
  return (
    <div>
      <ul
        className="flex gap-6 mt-6 mb-6 [&_li]:flex [&_li]:gap-3 [&_li]:w-[290px] [&_li]:h-[98px] [&_li]:bg-[#202020] 
           [&_li]:border [&_li]:border-[#202020] [&_li]:rounded-2xl 
           [&_li]:p-6 [&_li]:text-[#99a1af] [&_.icon]:flex [&_.icon]:rounded-2xl [&_.icon]:bg-[rgba(93,214,44,0.1)] 
           [&_.icon]:w-12 [&.icon]:h-12 [&_.icon]:justify-center [&_.icon]:items-center [&_p]:text-[#5dd62c]"
      >
        <li>
          <div className="icon">
            <LuFileText
              size={24}
              color="#5DD62C"
            />
          </div>
          <div className="text">
            <h2>Активні вакансії</h2>
            <p>0</p>
          </div>
        </li>
        <li>
          <div className="icon">
            <LuUsers
              size={24}
              color="#5DD62C"
            />
          </div>
          <div className="text">
            <h2>Кандидати</h2>
            <p>0</p>
          </div>
        </li>
        <li>
          <div className="icon">
            <FaRegCircleCheck
              size={24}
              color="#5DD62C"
            />
          </div>
          <div className="text">
            <h2>Завершили тести</h2>
            <p>0</p>
          </div>
        </li>
        <li>
          <div className="icon">
            <MdOutlineRemoveRedEye
              size={24}
              color="#5DD62C"
            />
          </div>
          <div className="text">
            <h2>Середня оцінка</h2>
            <p>0</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
