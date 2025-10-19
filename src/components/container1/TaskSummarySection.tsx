import { CircleAlert, CircleCheck, CircleX, TriangleAlert } from 'lucide-react';
import Card from '../layout/Card2';

function TaskSummarySection() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {/* Card 1 - Overdues */}
        <Card 
          icon={
            <div className="w-8 h-8 bg-red-600 rounded-md flex items-center justify-center">
              <CircleAlert className='w-5 h-5 text-white' />
            </div>
          }
          rightText={<span className="text-2xl font-semibold text-red-600">2</span>}
          className='h-50 !bg-red-50 border border-red-600'
        >
            Overdues tasks
      </Card>

      {/* Card 2 - At Risk */}
        <Card 
          icon={
            <div className="w-8 h-8 bg-yellow-600 rounded-md flex items-center justify-center">
              <TriangleAlert className='w-5 h-5 text-white' />
            </div>
          }
          rightText={<span className="text-2xl font-semibold text-yellow-600">0</span>}
          className='h-50 !bg-yellow-50 border border-yellow-600'
        >
            At risk tasks
      </Card>
      {/* Card 3 - Completed tasks */}
        <Card 
          icon={
            <div className="w-8 h-8 bg-green-600 rounded-md flex items-center justify-center">
              <CircleCheck  className='w-5 h-5 text-white' />
            </div>
          }
          rightText={<span className="text-2xl font-semibold text-green-600">0</span>}
          className='h-50 !bg-green-50 border border-green-600'
        >
            Completed tasks
      </Card>
      {/* Card 4 - Blocked Tasks */}
        <Card 
          icon={
            <div className="w-8 h-8 bg-gray-600 rounded-md flex items-center justify-center">
              <CircleX className='w-5 h-5 text-white' />
            </div>
          }
          rightText={<span className="text-2xl font-semibold text-gray-600">0</span>}
          className='h-50 !bg-gray-50 border border-gray-600'
        >
            Blocked tasks
      </Card>
    </div>
  )
}

export default TaskSummarySection