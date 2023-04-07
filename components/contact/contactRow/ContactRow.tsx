import Card from "@/components/common/Card";
import ContainerWrapper from "../../common/ContainerWrapper";
import Title from "../../common/Title";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function ContactRow() {
  return (
    <ContainerWrapper containerClassName="bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <Title title="Let's Get In Touch" />
        <Card>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <ContactInfo />
            <ContactForm />
          </div>
        </Card>
      </div>
    </ContainerWrapper>
  );
}
