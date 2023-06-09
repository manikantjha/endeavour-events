import { lstNavbarMenu } from "@/data/data";
import { Dispatch, SetStateAction } from "react";
import { checkIsActive } from "./navbarHelper";
import NavbarMenuItem from "./NavbarMenuItem";

interface INavDrawerNavDrawer {
  routerPathName: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function NavDrawer(props: INavDrawerNavDrawer) {
  return (
    <div className="fixed top-[60] left-0 right-0 h-[calc(100vh_-_60px)] z-[1000] p-4 overflow-y-auto bg-white w-full shadow-lg transition-all grid grid-rows-[auto_1fr] gap-4">
      <button
        type="button"
        className="text-gray-400 bg-gray-200 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 w-fit ml-auto inline-flex items-center"
        onClick={() => props.setIsOpen(false)}
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Close menu</span>
      </button>
      <ul className="flex flex-col p-4 border border-gray-100 rounded-lg space-y-4">
        {lstNavbarMenu.map((item) => (
          <NavbarMenuItem
            key={item.id}
            objMenuItem={item}
            isActive={checkIsActive(item.path, props.routerPathName)}
            onClick={() => props.setIsOpen(false)}
          />
        ))}
      </ul>
    </div>
  );
}
