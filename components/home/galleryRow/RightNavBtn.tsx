import { MouseEventHandler } from "react";

interface IRightNavBtn {
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}

export default function RightNavBtn(props: IRightNavBtn) {
  return (
    <button
      type="button"
      className="absolute top-[50%] right-0 translate-y-[-50%] z-30 px-4 cursor-pointer group focus:outline-none"
      data-carousel-next
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
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
        <span className="sr-only">Next</span>
      </span>
    </button>
  );
}
