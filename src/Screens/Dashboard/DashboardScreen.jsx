import CheckTable from "../../Components/pages/dashboard/CheckTable/CheckTable"
import ComplexTable from "../../Components/pages/dashboard/ComplexTable/ComplexTable"
import CustomCalendar from "../../Components/pages/dashboard/CustomCalendar/CustomCalendar"
import DailyTraffic from "../../Components/pages/dashboard/DailyTraffic/DailyTraffic"
import Revenue from "../../Components/pages/dashboard/Revenue/Revenue"
import Summary from "../../Components/pages/dashboard/Summary/Summary"
import TeamMember from "../../Components/pages/dashboard/TeamMember/TeamMember"
import TotalSpent from "../../Components/pages/dashboard/TotalSpent/TotalSpent"
import YourPieChart from "../../Components/pages/dashboard/YourPieChart/YourPieChart"
import { DashboardScreenWrap } from "./DashboardScreen.styles"

const DashboardScreen = () => {
  return (
    <DashboardScreenWrap>
      <Summary />
      <div className="dboard-blocks-row first-row">
        <TotalSpent />
        <Revenue />
      </div>
      <div className="dboard-blocks-row second-row">
        <CheckTable />
        <DailyTraffic />
        <YourPieChart />
        <ComplexTable />
        <CustomCalendar />
        <TeamMember />
      </div>
    </DashboardScreenWrap>
  )
}

export default DashboardScreen