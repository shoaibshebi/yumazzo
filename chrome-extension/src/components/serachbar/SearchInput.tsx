import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface Props {
  value: string | number | readonly string[] | undefined;
  changeValue: Function;
}

function SearchInput({ value, changeValue }: Props) {
  return (
    <div className="relative ">
      <MagnifyingGlassIcon className="absolute top-0 left-0 mt-3 ml-3 h-5 w-5 text-white" />

      <input
        type="text"
        className=" text-white text-base px-3 py-2 bg-[#131823] pl-9 font-helvetica-neue outline-none rounded-md w-full shadow-sm border-[#5B6178] border placeholder-[#737992]"
        placeholder="Search cuisine"
        value={value}
        onChange={(e) => changeValue(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;
