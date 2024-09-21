import { CiSearch } from "react-icons/ci";
const Search: React.FC = () => {
  return (
    <div className="bg-primary-surface flex items-center px-6 py-3 rounded-lg gap-3 flex-1">
      <CiSearch size={24} />
      <input
        type="text"
        className=" focus:outline-none bg-transparent w-full"
        placeholder="Keyword: [Menu] [Judul Grafik] [Data]"
      />
    </div>
  );
};

export default Search;
