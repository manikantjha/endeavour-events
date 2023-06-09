/* eslint-disable @next/next/no-img-element */

interface IHero {
  imgSrc: string;
  imgAlt?: string;
  hasContent?: boolean;
  title?: string;
  description?: string;
}

export default function Hero(props: IHero) {
  return (
    <div
      className="h-[65vh] w-full overflow-hidden relative"
      style={{
        backgroundImage: `url(${props.imgSrc})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* <img
        src={props.imgSrc}
        alt={props.imgAlt}
        className="h-full w-full object-cover"
      /> */}
      {props.hasContent && (
        <>
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)]" />
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 text-center w-full p-4">
            <h2 className="text-3xl md:text-6xl text-white mb-4 tracking-wide w-full">
              {props.title}
            </h2>
            <p className="text-white text-lg md:text-2xl">
              {props.description}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
