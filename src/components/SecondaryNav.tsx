import { Clock, Calendar, Layout, MessagesSquare, List, AlignVerticalSpaceAround, LayoutPanelLeft, MessageSquarePlus, Megaphone } from 'lucide-react';

function SecondaryNav() {
  const navItems = [
    { icon: Layout, label: 'Overview', active: true },
    { icon: Clock, label: 'Tracked Time', active: false },
    { icon: Calendar, label: 'Project Plan', active: false },
    { icon: AlignVerticalSpaceAround , label: 'Spaces', active: false },
    { icon: MessagesSquare, label: 'Chat', active: false },
    { icon: List, label: 'List', active: false },
    { icon: LayoutPanelLeft, label: 'Board', active: false },
    { icon: MessageSquarePlus, label: 'Project updates', active: false },
    { icon: Megaphone, label: 'Form responses', active: false },
  ];

  return (
    <div className="bg-white border-b border-gray-200 px-4">
      <div className="flex items-center justify-between">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-1">
          {navItems.map((item, index) => (
            <button
              key={index}
              className={`
                flex items-center gap-2 px-3 py-3 text-sm font-medium transition-colors relative
                ${item.active 
                  ? 'text-gray-900' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 cursor-pointer'
                }
              `}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
              
              {/* Active indicator line */}
              {item.active && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
              )}
            </button>
          ))}
        </div>

        {/* Invite Button */}
        <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors cursor-pointer">
          Invite
        </button>
      </div>
    </div>
  );
}

export default SecondaryNav;