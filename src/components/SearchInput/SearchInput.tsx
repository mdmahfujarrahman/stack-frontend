import { StackImages } from "../../assets";

const SearchInput: React.FC = () => {
    return (
        <div className="flex items-center w-3/6 py-5 bg-ternary rounded-[14px]">
            <input
                type="text"
                placeholder="Search "
                className="border-none bg-transparent outline-none w-11/12 px-4"
            />
            <img className="pe-5" src={StackImages.search} alt="search icon" />
        </div>
    );
};

export default SearchInput;
