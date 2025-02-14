import SearchBar from "../../components/SearchBar";

interface TopNavigationBarProps {
  logoSrc: string;
}

const TopNavigationBar: React.FC<TopNavigationBarProps> = ({ logoSrc }) => {
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white shadow-md">
      {/* Left: Breadcrumb/Menu Icon */}
      <div className="flex items-center gap-2">
        <button className="p-2 rounded-md hover:bg-gray-100">
          <span className="text-xl">☰</span>
        </button>
        {/* Company Logo */}
        <img src={logoSrc} alt="Company Logo" className="h-15 w-12" />
      </div>

      {/* Center: Search Bar */}
      <SearchBar />

      {/* Right: Icons */}
      <div className="flex items-center gap-2">
        <button className="p-2 rounded-md hover:bg-gray-100">🔔</button>
        <button className="p-2 rounded-md hover:bg-gray-100">📩</button>
        <button className="p-2 rounded-md hover:bg-gray-100">⚙️</button>
        <button className="p-2 rounded-md hover:bg-gray-100">👤</button>
      </div>
    </nav>
  );
};

export default TopNavigationBar;
