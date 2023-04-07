import Hero from "../common/Hero";
import TestimonialsRow from "../home/testimonialsRow/TestimonialsRow";

export default function TestimonialsMain() {
  return (
    <div>
      <Hero
        title="Applauses"
        imgSrc="https://images.unsplash.com/photo-1543980932-b5fc649a8000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        hasContent
      />
      <TestimonialsRow hideTitle />
    </div>
  );
}
