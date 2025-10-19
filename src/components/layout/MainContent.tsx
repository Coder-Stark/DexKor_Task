import CustomerPortalCard from "../container2/CustomerPortalCard";
import ProjectHoursCard from "../container2/ProjectHoursCard";
import ProjectInfoCard from "../container2/ProjectInfoCard";
import TeamMembersCard from "../container2/TeamMembersCard";

function MainContent() {
  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <div className="p-6 flex gap-6">
        {/* Container 1 - Takes remaining space (2/3) */}
        <div className="flex-1 space-y-6 border border-red-400">
            <h2 className="text-lg font-semibold text-gray-800">Container 1</h2>
            <p className="text-sm text-gray-600 mt-2">Main content area - All rows will go here</p>
        </div>

        {/* Container 2 - Fixed width (1/3) */}
        <div className="w-96 space-y-6 border border-red-400">
            <ProjectInfoCard/>
            <CustomerPortalCard/>
            <ProjectHoursCard/>
            <TeamMembersCard/>

            {/* <div className="grid grid-rows-4 gap-4">
                <Card title="Profile Info">
                    only visible to dextor
                </Card>
                <Card title="Customer Portal">
                    List or chart of latest activities.
                </Card>
                <Card title="Project Hours">
                    Quick analytics like total users, revenue, etc.
                </Card>
                <Card title="Team Members">
                    Show alerts, messages, or reminders.
                </Card>
            </div> */}
        </div>
      </div>
    </div>
  );
}

export default MainContent;