import { Megaphone } from 'lucide-react';
import Card from '../layout/Card2';

function UpdateOverdueSection() {
    return(
        <div className="grid grid-cols-2 gap-4">
          {/* Card 1 - Project Updates */}
          <Card title='Last 5 Project updates' buttonLabel='View all'>
            <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
              {/* Icon */}
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Megaphone className="w-8 h-8 text-gray-400" />
              </div>
              
              {/* Text */}
              <p className="text-sm text-gray-600 mb-3 max-w-xs">
                You can view the recent Project updates here after they have been published.
              </p>
              
              {/* Link */}
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Create a new status
              </button>
            </div>
          </Card>

            {/* Card 2 - Tasks Overdues */}
          <Card title='Tasks overdue' buttonLabel='View all'>
            <div className="space-y-3">
              {/* Task 1 */}
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">Sales & Presales Hand-off</span>
                <span className="text-sm text-red-600 font-medium">3d</span>
              </div>
              
              {/* Task 2 */}
              <div className="flex items-center justify-between py-2">
                <span className="text-sm text-gray-700">Prepare for kick-off</span>
                <span className="text-sm text-red-600 font-medium">1d</span>
              </div>
            </div>
          </Card>
        </div>
    )
}

export default UpdateOverdueSection