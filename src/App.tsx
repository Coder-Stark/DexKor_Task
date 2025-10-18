import TopNav from "./components/TopNav";
import SecondaryNav from "./components/SecondaryNav";
import Sidebar from "./components/SideBar";

function App() {
  return (
    <div className="h-screen flex">
      {/* Sidebar - Extreme Left */}
      <Sidebar />
      
      {/* Right Side - All content */}
      <div className="flex-1 flex flex-col">
        <TopNav />
        <SecondaryNav />
        
        {/* Main Content */}
        <div className="flex-1 overflow-auto bg-gray-50">
          <div className="p-4">
            <h1>Main Content</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;