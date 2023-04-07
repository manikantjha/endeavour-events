import Hero from "../common/Hero";
import GalleryRow from "../home/galleryRow/GalleryRow";

export default function WorkMain() {
  return (
    <div>
      <Hero
        title="Recent Work"
        imgSrc="https://images.unsplash.com/photo-1603190287605-e6ade32fa852?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        hasContent
      />
      <GalleryRow hideTitle />
    </div>
  );
}
