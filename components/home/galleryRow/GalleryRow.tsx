import ContainerWrapper from "@/components/common/ContainerWrapper";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
    originalHeight: 200,
    originalClass:
      "md:h-[500px] [&>img]:h-full [&>img]:w-full [&>img]:object-cover",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
    originalClass:
      "md:h-[500px] [&>img]:h-full [&>img]:w-full [&>img]:object-cover",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
    originalClass:
      "md:h-[500px] [&>img]:h-full [&>img]:w-full [&>img]:object-cover",
  },
];

export default function GalleryRow() {
  return (
    <ContainerWrapper containerClassName="bg-gray-50">
      <ImageGallery items={images} />;
    </ContainerWrapper>
  );
}
