import { Target } from 'lucide-react';
import Card from '../layout/Card2';

function PhaseGoalSection() {
  const phases = [
    { name: 'Kickoff & Readiness', startDate: '29 Oct', endDate: '06 Nov' },
    { name: 'Solutioning & Planning', startDate: '29 Oct', endDate: '06 Nov' },
    { name: 'Implementation', startDate: '29 Oct', endDate: '06 Nov' },
    { name: 'Go-live & Value Delivery', startDate: '29 Oct', endDate: '06 Nov' }
  ];
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Card 1 - All phases */}
      <Card title='All phases' buttonLabel='View project plan'>
        <div className="space-y-4">
          {phases.map((phase, index) => (
            <div key={index} className="space-y-2">
              {/* Phase Name */}
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-sm font-medium text-gray-800">{phase.name}</span>
              </div>
                {/* Dates - Start and End */}
              <div className="flex items-center justify-between text-xs p-1 text-gray-500 bg-blue-100">
                  <span>{phase.startDate}</span>
                  <span>{phase.endDate}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

    {/* Card 2 - Business Goals */}
      <Card title='Business goals' buttonLabel='Add new goal'>
        <div className="space-y-4">
          {/* Goal Checkbox */}
          <label className="flex items-start gap-3 cursor-pointer group">
            <input 
              type="checkbox" 
              className="mt-0.5 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700 group-hover:text-gray-900">
              Increase customer satisfaction by 20%
            </span>
          </label>

          {/* Info Card */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <Target className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-700">
                Clearly defined goals keep teams motivated and focused on the larger vision.{' '}
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Create a goal
                </button>
              </p>
            </div>
          </div>
        </div>
      </Card>

    </div>
  )
}

export default PhaseGoalSection