import { Search, Send, Trophy, Bell, GraduationCap, LayoutGrid, NotepadText } from 'lucide-react';
import ProfileImage from '../../assets/profileImage.jpeg';

function TopNav() {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-2">
      <div className="flex items-center justify-between">
        {/* Left Section - Logo & Projects */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <NotepadText className="w-5 h-5 text-gray-600" />
            <span className="text-2xl font-medium text-gray-700">Projects</span>
          </div>
          
          {/* Search Bar */}
          <div className="relative ml-40">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search" 
              className="pl-10 pr-4 py-1.5 w-120 bg-gray-50 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Right Section - Icons & Profile */}
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
            <LayoutGrid className="w-5 h-5 text-gray-600" />
          </button>
          
          <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
            <GraduationCap className="w-5 h-5 text-gray-600" />
          </button>
          
          <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
            <Send className="w-5 h-5 text-gray-600" />
          </button>
          
          <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
            <Trophy className="w-5 h-5 text-gray-600" />
          </button>
          
          <button className="p-2 hover:bg-gray-100 rounded-md transition-colors relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-semibold">
              20
            </span>
          </button>

          {/* Divider */}
          <div className="w-px h-6 bg-gray-300"></div>

          {/* User Profile */}
          <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 rounded-md px-2 py-1 transition-colors">
            <img 
              src={ProfileImage}
              alt="Mark Anderson" 
              className="w-8 h-8 rounded-full"
            />
            <div className="text-left">
              <div className="text-sm font-medium text-gray-900">Mark Anderson</div>
              <div className="text-xs text-gray-500">Admin</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default TopNav;