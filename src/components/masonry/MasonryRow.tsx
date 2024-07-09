import React from "react";
import styled from "styled-components";
import { ImageType } from "../../types/imageType";
import ImageCard from "./ImageCard";

type MasonryRowProps = {
  images: ImageType[];
  rowHeight: number;
};

const MasonryRow: React.FC<MasonryRowProps> = ({ images, rowHeight }) => {
  return (
    <RowStyled style={{ height: `${rowHeight}px` }}>
      {images.map((image) => (
        <ImageCard key={image.id} image={image} rowHeight={rowHeight} />
      ))}
    </RowStyled>
  );
};

// Styled-components
const RowStyled = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;

export default MasonryRow;
