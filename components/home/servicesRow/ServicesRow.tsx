import ContainerWrapper from "@/components/common/ContainerWrapper";
import Title from "@/components/common/Title";
import { lstServices } from "@/data/data";
import ServiceCard from "./ServiceCard";

interface IServicesRow {
  hideTitle?: boolean;
}

export default function ServicesRow(props: IServicesRow) {
  return (
    <ContainerWrapper>
      {!props.hideTitle && <Title title="Our Services" />}
      <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {lstServices.map((item) => (
          <ServiceCard key={item.id} objService={item} />
        ))}
      </div>
    </ContainerWrapper>
  );
}
