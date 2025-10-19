import { AlertTriangle } from 'lucide-react'
import Card from '../layout/Card2'

function TaskAtRisksSection() {
    return(
        <div className="grid grid-cols-2 gap-4">
          {/* Card 1 - Tasks at risk */}
          <Card title='Tasks at risk' buttonLabel='View all'>
            <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
              {/* Warning Icon */}
              <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="w-8 h-8 text-yellow-500" />
              </div>
              
              {/* Text */}
              <p className="text-sm text-gray-600 max-w-xs">
                Catch tasks "at risk" here and help your teams quickly resolve them.
              </p>
            </div>
          </Card>
        </div>
    )
}

export default TaskAtRisksSection