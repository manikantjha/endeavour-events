import Hero from "../common/Hero";
import Row from "../common/row/Row";
import ContactRow from "../contact/contactRow/ContactRow";
import FeaturesRow from "./featuresRow/FeaturesRow";
import FiguresRow from "./figuresRow/FiguresRow";
import GalleryRow from "./galleryRow/GalleryRow";
import ServicesRow from "./servicesRow/ServicesRow";
import TestimonialsRow from "./testimonialsRow/TestimonialsRow";

export default function HomeMain() {
  return (
    <div>
      <Hero
        title="Endavour Events"
        imgAlt=""
        imgSrc="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        hasContent
      />
      <Row
        imgSrc="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        title="About Us"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam provident, voluptate eius officiis possimus iure nemo, fugiat repellat optio nobis blanditiis eaque, adipisci minus ut sapiente temporibus porro iste quae laudantium corrupti beatae deserunt atque reiciendis! Officia inventore excepturi, doloremque atque corrupti quas velit suscipit eveniet quasi omnis rem sunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam provident, voluptate eius officiis possimus iure nemo, fugiat repellat optio nobis blanditiis eaque, adipisci minus ut sapiente temporibus porro iste quae laudantium corrupti beatae deserunt atque reiciendis! Officia inventore excepturi, doloremque atque corrupti quas velit suscipit eveniet quasi omnis rem sunt."
      />
      <FeaturesRow />
      <TestimonialsRow numberOfCards={4} />
      <FiguresRow />
      <ServicesRow />
      <GalleryRow />
      <Row
        imgSrc="https://images.unsplash.com/photo-1610703415552-d7fca41a8857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
        title="Saftey First"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam provident, voluptate eius officiis possimus iure nemo, fugiat repellat optio nobis blanditiis eaque, adipisci minus ut sapiente temporibus porro iste quae laudantium corrupti beatae deserunt atque reiciendis! Officia inventore excepturi, doloremque atque corrupti quas velit suscipit eveniet quasi omnis rem sunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam provident, voluptate eius officiis possimus iure nemo, fugiat repellat optio nobis blanditiis eaque, adipisci minus ut sapiente temporibus porro iste quae laudantium corrupti beatae deserunt atque reiciendis! Officia inventore excepturi, doloremque atque corrupti quas velit suscipit eveniet quasi omnis rem sunt."
      />
      <ContactRow />
    </div>
  );
}
