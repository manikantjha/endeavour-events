import { MouseEventHandler } from "react";

interface IPlayPauseBtn {
  onClick: MouseEventHandler<HTMLButtonElement>;
  isPlaying: boolean;
}

export default function PlayPauseBtn(props: IPlayPauseBtn) {
  return (
    <>
      {!props.isPlaying ? (
        <button
          type="button"
          className="absolute bottom-0 left-0 z-30 px-4 pb-4 cursor-pointer group focus:outline-none"
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
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
              />
            </svg>

            <span className="sr-only">Play</span>
          </span>
        </button>
      ) : (
        <button
          type="button"
          className="absolute bottom-0 left-0 z-30 px-4 pb-4 cursor-pointer group focus:outline-none"
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
                d="M15.75 5.25v13.5m-7.5-13.5v13.5"
              />
            </svg>

            <span className="sr-only">Pause</span>
          </span>
        </button>
      )}
    </>
  );
}
