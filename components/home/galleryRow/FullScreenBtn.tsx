import { MouseEventHandler } from "react";

interface IFullScreenBtn {
  onClick: MouseEventHandler<HTMLButtonElement>;
  isFullscreen: boolean;
}

export default function FullScreenBtn(props: IFullScreenBtn) {
  return (
    <>
      {!props.isFullscreen ? (
        <button
          type="button"
          className="absolute bottom-0 right-0 z-30 px-4 pb-4 cursor-pointer group focus:outline-none"
          onClick={props.onClick}
        >
          <span className="inline-flex items-center justify-center w-7 h-7 md:w-10 md:h-10 rounded-full bg-white/70 group-hover:bg-white/90  group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4 md:w-6 md:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
              />
            </svg>

            <span className="sr-only">Maximize</span>
          </span>
        </button>
      ) : (
        <button
          type="button"
          className="absolute bottom-0 right-0 z-30 px-4 pb-4 cursor-pointer group focus:outline-none"
          onClick={props.onClick}
        >
          <span className="inline-flex items-center justify-center w-7 h-7 md:w-10 md:h-10 rounded-full bg-white/70 group-hover:bg-white/90  group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4 md:w-6 md:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
              />
            </svg>

            <span className="sr-only">Restore</span>
          </span>
        </button>
      )}
    </>
  );
}
