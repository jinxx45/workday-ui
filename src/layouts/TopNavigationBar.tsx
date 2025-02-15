import SearchBar from "@/components/SearchBar";
import { Menu, Bell, Mail, Settings, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface TopNavigationBarProps {
  logoSrc: string;
}

const TopNavigationBar: React.FC<TopNavigationBarProps> = ({ logoSrc }) => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-6 py-3 bg-white shadow-md">
        {/* Left: Menu Icon & Logo */}
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-md hover:bg-gray-100">
            <Menu className="h-6 w-6" />
          </button>
          {/* Company Logo */}
          <img
            onClick={() => navigate("/")}
            src={logoSrc}
            alt="Company Logo"
            className="h-15 w-12"
          />
        </div>

        {/* Center: Search Bar */}
        <SearchBar />

        {/* Right: Icons */}
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-md hover:bg-gray-100">
            <Bell className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-md hover:bg-gray-100">
            <Mail className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-md hover:bg-gray-100">
            <Settings className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-md hover:bg-gray-100">
            <User className="h-5 w-5" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default TopNavigationBar;
