import Card from '../layout/Card';
import { Monitor } from 'lucide-react';

function CustomerPortalCard() {
  return (
    <Card title='Customer Portal'>
      <div className="space-y-3">
        <div className="flex items-start gap-3 p-3 rounded-lg">
          <Monitor className='w-5 h-5 text-purple-600'/>
          <div className="flex-1">
            <p className="text-sm text-gray-700 font-medium">Default portal</p>
            <p className="text-xs text-gray-600 mt-1">Set by Nishi Mishra on 13 Oct 25</p>
          </div>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium flex-shrink-0 cursor-pointer">
            Change
          </button>
        </div>
      </div>
    </Card>
  );
}

export default CustomerPortalCard;
