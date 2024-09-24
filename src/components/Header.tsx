import { IoNotificationsOutline } from "react-icons/io5";
import Search from "./ui/Search";
import Profile from "./ui/Profile";
const Header: React.FC = () => {
  return (
    <div className="flex items-center px-10 py-7 gap-6">
      <Search />
      <div>
        <IoNotificationsOutline size={36} />
      </div>
      <Profile />
    </div>
  );
};

export default Header;
