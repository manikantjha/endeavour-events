import { ReactNode } from "react";

interface IFeatureCard {
  objFeature: {
    icon: ReactNode;
    title: string;
    description: string;
  };
}

export default function FeatureCard(props: IFeatureCard) {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg text-center">
      <div className="mx-auto w-[40px] text-orange-500">
        {props.objFeature.icon}
      </div>
      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
        {props.objFeature.title}
      </h5>
      <p className="mb-3 font-normal text-gray-500">
        {props.objFeature.description}
      </p>
    </div>
  );
}
