import { IoMdPeople } from "react-icons/io";
import { FaRegCreditCard } from "react-icons/fa";
import { AiFillSchedule } from "react-icons/ai";
import DashboardInfoCard from "../../components/DashboardInfoCard"
import { GiMoneyStack } from "react-icons/gi";
import RevenueChart from "../../charts/RevenueChart";
import StatusChart from "../../charts/StatusChart";


const Dashboard = () => {
  return (
    <section>
        Dashboard
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-4 md:grid-cols-4">

        <DashboardInfoCard text='Doctor' stats={34} icon={<IoMdPeople className='w-8 h-8 text-[#00d0f1]' />} bgColor={'bg-[#00d0f1]'} borderColor={'border-[#00d0f1]'}   />
        <DashboardInfoCard text='Patients' stats={50}  icon={<FaRegCreditCard className='w-8 h-8 text-[#699834]' />}  bgColor={'bg-[#699834]'} borderColor={'border-[#699834]'} />
        <DashboardInfoCard text='Appointments' stats={40} icon={<AiFillSchedule className='w-8 h-8 text-[#dd3b4b]' />} bgColor={'bg-[#dd3b4b]'} borderColor={'border-[#dd3b4b]'} />
        <DashboardInfoCard text='Revenue' stats={23169}  icon={<GiMoneyStack className='w-8 h-8 text-[#ffc107]' />}  bgColor={'bg-[#ffc107]'} borderColor={'border-[#ffc107]'} /> 
        
        </div>
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-2">
            <StatusChart />
            <RevenueChart />
        </div>

    </section>
  )
}

export default Dashboard