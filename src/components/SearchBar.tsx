import { Input } from "@/components/ui/input";

const SearchBar = () => {
  return (
    <>
      <div className="hidden md:block w-64">
        <Input className="bg-gray-100" placeholder="Search" />
      </div>
    </>
  );
};

export default SearchBar;
