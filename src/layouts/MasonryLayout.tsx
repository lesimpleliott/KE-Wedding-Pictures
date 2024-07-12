import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MasonryRow from "../components/masonry/MasonryRow";
import useResizeObserver from "../hooks/useResizeObserver";
import { ImageType } from "../types/imageType";

type MasonryLayoutProps = {
  images: ImageType[];
};

const MasonryLayout: React.FC<MasonryLayoutProps> = ({ images }) => {
  const { width: containerWidth, containerRef } = useResizeObserver();
  const [rows, setRows] = useState<
    Array<{ images: ImageType[]; height: number }>
  >([]);

  useEffect(() => {
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
          if (currentRow.length > 0) {
            const rowHeight = containerWidth / totalAspectRatio;
            rows.push({ images: currentRow, height: rowHeight });
          }
          currentRow = [];
          totalAspectRatio = 0;
        }

        currentRow.push(image);
        totalAspectRatio += aspectRatio;
      });

      if (currentRow.length > 0) {
        const rowHeight = containerWidth / totalAspectRatio;
        rows.push({ images: currentRow, height: rowHeight });
      }

      return rows;
    };

    if (containerWidth) {
      const newRows = createRows(images, containerWidth);
      setRows(newRows);
    }
  }, [images, containerWidth]);

  return (
    <GalleryContainerStyled className="masonryContainer" ref={containerRef}>
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
