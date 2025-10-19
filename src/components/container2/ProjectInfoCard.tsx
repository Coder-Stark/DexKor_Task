import Card from '../layout/Card';
import { FileText, ChevronDown, Calendar} from 'lucide-react';

function ProjectInfoCard() {
  return (
    <Card title='Project Info' description='Only visible to dexkor'>
      <div className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Status</span>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-blue-200 w-[250px] justify-between">
              <FileText className='w-4 h-4 text-blue-600'/>
              <span className='text-sm font-medium text-gray-700'>Proposed</span>
              <ChevronDown className='w-4 h-4 text-gray-400'/>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Start Date</span>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-blue-200 w-[250px] justify-between">
              <span className="text-sm text-gray-700">13 Oct 2025</span>
              <Calendar className='w-4 h-4 text-gray-400'/>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Due Date</span>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-blue-200 w-[250px] justify-between">
              <span className="text-sm text-gray-700">25 Oct 2025</span>
              <Calendar className='w-4 h-4 text-gray-400'/>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">ARR</span>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-blue-200 w-[250px] justify-between">
              <span className="text-sm text-gray-700">USD 50</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Project Fee</span>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-blue-200 w-[250px] justify-between">
              <span className="text-sm text-gray-700">USD 80</span>
            </div>
          </div>
        </div>

        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          See more field...
        </button>
      </div>
    </Card>
  );
}

export default ProjectInfoCard;