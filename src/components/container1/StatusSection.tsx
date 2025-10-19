// src/components/container1/StatusSection.tsx

import Card from '../layout/Card2';
import { Calendar, ChartNoAxesCombined, Target } from 'lucide-react';

function StatusSection() {
  const completionPercentage = 0;
  
  return (
    <div className="grid grid-cols-3 gap-4">
      {/* Card 1 - Status */}
      <Card title='Status'>
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
            Proposed
          </span>
      </Card>

      {/* Card 2 - Project Dates */}
      <Card title='Project dates' icon={<Calendar className='w-5 h-5 text-blue-600'/>}>
          <p className="text-xl font-semibold text-gray-900">13 Oct - 26 Nov</p>
      </Card>

      {/* Card 3 - Completion */}
      <Card title='Completion' icon={<ChartNoAxesCombined className='w-5 h-5 text-purple-600'/>} rightText='0/23 Tasks'>
        <div className="flex items-center gap-3">
          {/* Percentage */}
          <p className="text-2xl font-semibold text-gray-900">{completionPercentage}%</p>
          
          {/* Progress Bar */}
          <div className="flex-1 bg-gray-200 rounded-full h-2">
            <div 
              className="bg-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default StatusSection;
