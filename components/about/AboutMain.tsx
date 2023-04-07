import Hero from "../common/Hero";
import Row from "../common/row/Row";
import FounderRow from "./founderRow/FounderRow";
import TeamRow from "./teamRow/TeamRow";

export default function AboutMain() {
  return (
    <div>
      <Hero
        title="About Us"
        imgSrc="https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        hasContent
      />
      <Row
        imgSrc="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        title="Who We Are"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit incidunt sed sit. Tempore totam dolor eligendi corporis, eius nihil vel voluptatem ducimus quibusdam laudantium error consequuntur temporibus suscipit reprehenderit quaerat ipsum consectetur dolorum provident blanditiis porro omnis esse vero distinctio sit. Amet, velit nam deserunt nulla fuga soluta illo quis earum aliquam ab alias harum quisquam omnis! Ducimus numquam laboriosam accusamus ad sequi veritatis ipsam pariatur consequatur expedita animi. Quos odit corrupti fuga beatae dolorum! Inventore nobis omnis cum maiores at, labore illum nam voluptatem dicta nihil magni fugit nesciunt iusto porro eveniet provident tenetur cupiditate dignissimos voluptates quia commodi."
      />
      <Row
        imgSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        title="What We Do"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit incidunt sed sit. Tempore totam dolor eligendi corporis, eius nihil vel voluptatem ducimus quibusdam laudantium error consequuntur temporibus suscipit reprehenderit quaerat ipsum consectetur dolorum provident blanditiis porro omnis esse vero distinctio sit. Amet, velit nam deserunt nulla fuga soluta illo quis earum aliquam ab alias harum quisquam omnis! Ducimus numquam laboriosam accusamus ad sequi veritatis ipsam pariatur consequatur expedita animi. Quos odit corrupti fuga beatae dolorum! Inventore nobis omnis cum maiores at, labore illum nam voluptatem dicta nihil magni fugit nesciunt iusto porro eveniet provident tenetur cupiditate dignissimos voluptates quia commodi."
        isMirrored
        containerClassName="bg-gray-50"
      />
      <Hero
        title="Our Founders"
        imgSrc="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
        hasContent
      />
      <FounderRow />
      <Hero
        title="Our Team"
        imgSrc="https://images.unsplash.com/photo-1510146758428-e5e4b17b8b6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        hasContent
      />
      <TeamRow />
    </div>
  );
}
