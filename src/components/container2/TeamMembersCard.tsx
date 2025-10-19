import Card from '../layout/Card';
import { Crown } from 'lucide-react';

function TeamMembersCard() {
  return (
    <Card title='Team Members' buttonLabel='Invite'>
      <div className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center gap-16 text-sm border-b border-gray-200">
            <span className="text-blue-600 font-medium pb-2 border-b-2 border-blue-600">DexKor (1)</span>
            <span className="text-gray-600 pb-2">Acme</span>
          </div>

          <div className="flex items-start gap-3 pt-2 h-50">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold flex-shrink-0">
              NM
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium text-gray-800">Nishi Mishra</p>
                <Crown className='w-4 h-4 text-orange-300'/>
              </div>
              <p className="text-xs text-gray-500">Customer success</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default TeamMembersCard;
