import { MouseEventHandler } from "react";

interface ILeftNavBtn {
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}

export default function LeftNavBtn(props: ILeftNavBtn) {
  return (
    <button
      type="button"
      className="absolute top-[50%] translate-y-[-50%] left-0 z-30 px-4 cursor-pointer group focus:outline-none"
      data-carousel-prev
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <span className="inline-flex items-center justify-center w-7 h-7 md:w-10 md:h-10 rounded-full bg-white/70 group-hover:bg-white/90  group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
        <svg
          aria-hidden="true"
          className="w-4 h-4 md:w-6 md:h-6 text-white dark:text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
        <span className="sr-only">Previous</span>
      </span>
    </button>
  );
}
