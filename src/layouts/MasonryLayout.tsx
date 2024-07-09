// MasonryLayout.tsx

import React from "react";
import styled from "styled-components";
import MasonryRow from "../components/masonry/MasonryRow";
import useWindowSize from "../hooks/useWindowSize";
import { ImageType } from "../types/imageType";

type MasonryLayoutProps = {
  images: ImageType[];
};

const MasonryLayout: React.FC<MasonryLayoutProps> = ({ images }) => {
  const [windowWidth] = useWindowSize();

  const createRows = (images: ImageType[], containerWidth: number) => {
    const rows: Array<{ images: ImageType[]; height: number }> = [];
    let currentRow: ImageType[] = [];
    let totalAspectRatio = 0;

    images.forEach((image) => {
      const aspectRatio = image.size.width / image.size.height;

      if (
        (totalAspectRatio + aspectRatio) * 280 >
        containerWidth - currentRow.length * 10
      ) {
        const rowHeight = containerWidth / totalAspectRatio;
        rows.push({ images: currentRow, height: rowHeight });
        currentRow = [];
        totalAspectRatio = 0;
      }

      currentRow.push(image);
      totalAspectRatio += aspectRatio;
    });

    if (currentRow.length > 0) {
      // Si la dernière ligne n'est pas entièrement remplie, utiliser une hauteur standard de 350px
      const rowHeight =
        currentRow.length === 1 ? 350 : containerWidth / totalAspectRatio;
      rows.push({ images: currentRow, height: rowHeight });
    }

    return rows;
  };
  const rows = createRows(images, windowWidth);

  return (
    <GalleryContainerStyled className="masonryContainer">
      {rows.map((row, rowIndex) => (
        <MasonryRow key={rowIndex} images={row.images} rowHeight={row.height} />
      ))}
    </GalleryContainerStyled>
  );
};

// Styled-components
const GalleryContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export default MasonryLayout;
