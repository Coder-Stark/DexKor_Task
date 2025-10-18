import { NotepadText, CalendarFold , Ticket, Download, Network, CircleUserRound , HandHeart , BarChart3, Settings} from 'lucide-react';
import DexKorLogo from '../assets/DexKorLogo.png';

function Sidebar() {
  const navItems = [
    { icon: NotepadText, label: 'Dashboard', active: true },
    { icon: CalendarFold , label: 'Calendar', active: false },
    { icon: Ticket, label: 'Tickets', active: false },
    { icon: Download, label: 'Downloads', active: false },
    { icon: Network, label: 'Network', active: false },
    { icon: CircleUserRound , label: 'Profile', active: false },
    { icon: HandHeart , label: 'Break', active: false },
    { icon: BarChart3, label: 'Analytics', active: false },
  ];

  return (
    <aside className="w-14 bg-blue-900 flex flex-col items-center py-4 gap-4">
      {/* Logo */}
      <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-2">
        <img src={DexKorLogo} alt="DexKor" className="w-7 h-7" />
      </div>

      {/* Navigation Icons */}
      <nav className="flex-1 flex flex-col gap-2 w-full">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={`
              w-full h-10 flex items-center justify-center relative group transition-colors
              ${item.active 
                ? 'text-white' 
                : 'text-blue-300 hover:text-white hover:bg-blue-800'
              }
            `}
            title={item.label}
          >
            <item.icon className="w-5 h-5" />
            
            {/* Active indicator */}
            {item.active && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-400 rounded-r"></div>
            )}

            {/* Tooltip */}
            <span className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
              {item.label}
            </span>
          </button>
        ))}
      </nav>

      {/* Settings at Bottom */}
      <button 
        className="w-10 h-10 flex items-center justify-center text-blue-300 hover:text-white hover:bg-blue-800 rounded-lg transition-colors group relative"
        title="Settings"
      >
        <Settings className="w-5 h-5" />
        
        {/* Tooltip */}
        <span className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
          Settings
        </span>
      </button>
    </aside>
  );
}

export default Sidebar;