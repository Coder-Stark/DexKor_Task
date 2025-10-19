import Card from '../layout/Card2';
import { Calendar } from 'lucide-react'; // or your icon library

function KeyEventsSection() {
    return (
        <div className="grid grid-cols-1 gap-4">
          {/* Card - Key Events */}
          <Card>
            {/* Tabs */}
            <div className="flex gap-6 border-b border-gray-200 mb-6">
              <button className="pb-3 px-1 text-sm font-medium text-blue-600 border-b-2 border-blue-600">
                Key events (1)
              </button>
              <button className="pb-3 px-1 text-sm font-medium text-gray-500 hover:text-gray-700">
                Intervals
              </button>
            </div>
            {/* Content */}
            <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
              {/* Calendar Icon */}
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8 text-gray-400" />
              </div>
              
              {/* Title */}
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                Key events
              </h3>
              
              {/* Description */}
              <p className="text-sm text-gray-600 mb-4 max-w-md">
                Capture the dates of significant moments in projects such as Kick-off call, Go-live etc with Key events. 
                Automate capturing these Key events from project templates.
              </p>
              
              {/* Link */}
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span className="text-gray-700">Manage Key events</span>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  here
                </a>
              </div>
            </div>
          </Card>
        </div>
    )
}

export default KeyEventsSection;
