/* eslint-disable @next/next/no-img-element */
import React from "react";
import ContainerWrapper from "../../common/ContainerWrapper";
import Title from "../../common/Title";
import FounderCard from "./FounderCard";

export default function FounderRow() {
  return (
    <ContainerWrapper>
      {/* <Title title="Meet Our Founder" /> */}
      <div className="grid grid-cols-1 place-items-center gap-4">
        <FounderCard />
        <FounderCard />
      </div>
    </ContainerWrapper>
  );
}
