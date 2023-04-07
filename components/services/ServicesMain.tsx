import Hero from "../common/Hero";
import ServicesRow from "../home/servicesRow/ServicesRow";

export default function ServicesMain() {
  return (
    <div>
      <Hero
        title="Our Services"
        imgSrc="https://images.unsplash.com/photo-1639255752774-f29f1cc405df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
        hasContent
      />
      <ServicesRow hideTitle />
    </div>
  );
}
