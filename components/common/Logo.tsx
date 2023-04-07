/* eslint-disable @next/next/no-img-element */

export default function Logo() {
  return (
    <div className="flex items-center w-full">
      <img
        src="/assets/logo.svg"
        className="md:h-16 mr-3 h-12"
        alt="Flowbite Logo"
      />
      {/* <h1 className="text-3xl font-bold flex-shrink-0 text-gray-700">
        Endavour Eevents
      </h1> */}
    </div>
  );
}
