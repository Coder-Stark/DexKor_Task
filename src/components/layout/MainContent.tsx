import BlockedCompletedSection from "../container1/BlockedCompletedSection";
import KeyEventsSection from "../container1/KeyEventsSection";
import PhaseGoalSection from "../container1/PhaseGoalSection";
import StatusSection from "../container1/StatusSection";
import TaskAtRisksSection from "../container1/TaskAtRisksSection";
import TaskSummarySection from "../container1/TaskSummarySection";
import UpdateOverdueSection from "../container1/UpdateOverdueSection";

import CustomerPortalCard from "../container2/CustomerPortalCard";
import ProjectHoursCard from "../container2/ProjectHoursCard";
import ProjectInfoCard from "../container2/ProjectInfoCard";
import TeamMembersCard from "../container2/TeamMembersCard";

function MainContent() {
  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <div className="p-6 flex gap-6">
        {/* Container 1 - Takes remaining space (2/3) */}
        <div className="flex-1 space-y-6">
            <StatusSection/>
            <TaskSummarySection/>
            <PhaseGoalSection/>
            <UpdateOverdueSection/>
            <TaskAtRisksSection/>
            <KeyEventsSection/>
            <BlockedCompletedSection />
        </div>

        {/* Container 2 - Fixed width (1/3) */}
        <div className="w-96 space-y-6">
            <ProjectInfoCard/>
            <CustomerPortalCard/>
            <ProjectHoursCard/>
            <TeamMembersCard/>
        </div>
      </div>
    </div>
  );
}

export default MainContent;