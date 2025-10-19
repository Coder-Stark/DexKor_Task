import TopNav from "./components/layout/TopNav";
import SecondaryNav from "./components/layout/SecondaryNav";
import Sidebar from "./components/layout/SideBar";
import MainContent from "./components/layout/MainContent";

function App() {
  return (
    <div className="h-screen flex">
      {/* Sidebar - Extreme Left */}
      <Sidebar />
      
      {/* Right Side - All content */}
      <div className="flex-1 flex flex-col">
        <TopNav />
        <SecondaryNav />
        <MainContent />
      </div>
    </div>
  );
}

export default App;