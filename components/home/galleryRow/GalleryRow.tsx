import ContainerWrapper from "@/components/common/ContainerWrapper";
import Title from "@/components/common/Title";
import { MouseEventHandler } from "react";
import ImageGallery from "react-image-gallery";
import FullScreenBtn from "./FullScreenBtn";
import LeftNavBtn from "./LeftNavBtn";
import PlayPauseBtn from "./PlayPauseBtn";
import RightNavBtn from "./RightNavBtn";
import { images } from "./galleryHelper";

interface IGalleryRow {
  hideTitle?: boolean;
}

export default function GalleryRow(props: IGalleryRow) {
  return (
    <ContainerWrapper containerClassName="bg-gray-50">
      {!props.hideTitle && <Title title="Recent Work" />}
      <ImageGallery
        items={images}
        renderRightNav={(
          onClick: MouseEventHandler<HTMLButtonElement>,
          disabled: boolean
        ) => <RightNavBtn onClick={onClick} disabled={disabled} />}
        renderLeftNav={(
          onClick: MouseEventHandler<HTMLButtonElement>,
          disabled: boolean
        ) => <LeftNavBtn onClick={onClick} disabled={disabled} />}
        renderPlayPauseButton={(
          onClick: MouseEventHandler<HTMLButtonElement>,
          isPlaying: boolean
        ) => <PlayPauseBtn isPlaying={isPlaying} onClick={onClick} />}
        renderFullscreenButton={(
          onClick: MouseEventHandler<HTMLButtonElement>,
          isFullscreen: boolean
        ) => <FullScreenBtn onClick={onClick} isFullscreen={isFullscreen} />}
      />
      ;
    </ContainerWrapper>
  );
}
