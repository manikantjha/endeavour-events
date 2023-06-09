import { ReactNode } from "react";

export interface IRightColumn {
  renderRightColumn?: () => ReactNode;
  title?: string;
  description?: string;
  onClick?: () => void;
  rightColumnContainerClassName?: string;
}

export default function RightColumn(props: IRightColumn) {
  if (props.renderRightColumn) {
    return <>{props.renderRightColumn()}</>;
  }
  return (
    <div
      className={`flex flex-col justify-center h-full ${
        props.rightColumnContainerClassName
          ? props.rightColumnContainerClassName
          : ""
      }`}
    >
      <h3 className="text-3xl md:text-4xl mb-4 lg:mb-6">{props.title}</h3>
      <p className="leading-relaxed text-base">{props.description}</p>
    </div>
  );
}
