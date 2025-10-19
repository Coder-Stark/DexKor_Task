import { MinusCircle, TrendingUp } from 'lucide-react'
import Card from '../layout/Card2'

function BlockedCompletedSection() {
    return (
        <div className="grid grid-cols-2 gap-4">
          {/* Card 1 - Blocked Tasks */}
          <Card title='Blocked tasks' buttonLabel='View all'>
            <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
              {/* Blocked Icon */}
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <MinusCircle className="w-8 h-8 text-gray-400" />
              </div>
              
              {/* Text */}
              <p className="text-sm text-gray-600 max-w-xs">
                View recently blocked tasks here and help your teams get unblocked faster.
              </p>
            </div>
          </Card>
          {/* Card 2 - Tasks Completed Late*/}
           <Card title='Tasks completed late' buttonLabel='View all'>
            <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
              {/* Completed Late Icon */}
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-gray-400" />
              </div>
              
              {/* Text */}
              <p className="text-sm text-gray-600 max-w-xs">
                See the tasks that took longer to complete than planned here.
              </p>
            </div>
          </Card>
        </div>
    )
}

export default BlockedCompletedSection