import React from "react";
import styled from "styled-components";
import ActionButton from "../components/ActionButton";
import useWindowSize from "../hooks/useWindowSize";
import { ImageType } from "../types/imageType";

type MasonryRowProps = {
  images: ImageType[];
};

const MasonryRow: React.FC<MasonryRowProps> = ({ images }) => {
  const [windowWidth] = useWindowSize();

  const handleDownload = (url: string, filename: string) => {
    // Créer un lien invisible pour le téléchargement
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCart = (id: number, filename: string) => {
    console.log(`Image ${id} added to cart: ${filename}`);
  };

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
        <RowStyled key={rowIndex} height={row.height}>
          {row.images.map((image) => {
            const aspectRatio = image.size.width / image.size.height;
            const imageWidth = row.height * aspectRatio;

            return (
              <ImageContainerStyled
                key={image.id}
                style={{ width: `${imageWidth}px`, height: `${row.height}px` }}
              >
                <img
                  src={image.path.display}
                  alt={image.filename}
                  loading="lazy"
                />
                <div className="actionContainer">
                  <ActionButton
                    icon="fa-solid fa-download"
                    onClick={() =>
                      handleDownload(image.path.hd, image.filename)
                    }
                  />
                  <ActionButton
                    icon="fa-solid fa-cart-arrow-down"
                    onClick={() => handleCart(image.id, image.filename)}
                  />
                </div>
              </ImageContainerStyled>
            );
          })}
        </RowStyled>
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

const RowStyled = styled.div.attrs<{ height: number }>((props) => ({
  style: {
    height: `${props.height}px`,
  },
}))`
  display: flex;
  gap: 10px; /* Espace entre les images */
  width: 100%;
`;

const ImageContainerStyled = styled.div`
  position: relative;
  overflow: hidden;
  cursor: zoom-in;
  transition: all 300ms ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: var(--mainColor-light);
    transition: transform 500ms ease;
  }

  .actionContainer {
    opacity: 0;
  }

  &:hover {
    img {
      transform: scale(1.05);
    }

    .actionContainer {
      position: absolute;
      top: 10px;
      right: 10px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      opacity: 1;
      transition: opacity 200ms ease-in-out;
    }
  }
`;

export default MasonryRow;
