import ContainerWrapper from "@/components/common/ContainerWrapper";
import Title from "@/components/common/Title";
import { lstTestimonials } from "@/data/data";
import TestimonialCard from "./TestimonialCard";

interface ITestimonialsRow {
  numberOfCards?: number;
  hideTitle?: boolean;
}

export default function TestimonialsRow(props: ITestimonialsRow) {
  const slicedLstTestimonials = props.numberOfCards
    ? lstTestimonials.slice(0, props.numberOfCards)
    : lstTestimonials;
  return (
    <ContainerWrapper>
      {!props.hideTitle && <Title title="What Our Clients Have to Say" />}
      <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {slicedLstTestimonials.map((item) => (
          <TestimonialCard key={item.id} objTestimonial={item} />
        ))}
      </div>
    </ContainerWrapper>
  );
}
