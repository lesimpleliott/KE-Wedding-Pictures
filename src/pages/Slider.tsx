import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/scrollbar";
import { Autoplay, Keyboard, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import dataPhotos from "../assets/dataPhotos.json";
import CallToAction from "../components/CallToAction";
import TipBoxSlider from "../layouts/TipBoxSlider";
import { RootState } from "../store";

const Slider = () => {
  const { idAlbum } = useParams<{ idAlbum: string }>();
  const album = dataPhotos.albums.find((album) => album.id === idAlbum);
  const photos = album ? album.images : [];
  const selectedPicture = useSelector(
    (state: RootState) => state.app.selectedPicture
  );

  function extractNumber(name: string) {
    const regex = /_(\d+)\b/;
    const match = name.match(regex);
    return match ? `(${match[1]})` : "";
  }

  return (
    album &&
    photos.length > 0 && (
      <SliderStyled className="carousel">
        <button className="navButton prev">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button className="navButton next">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
        <TipBoxSlider />
        <Swiper
          className="mySwiper"
          modules={[Keyboard, Navigation, Scrollbar, Autoplay]}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          keyboard={{ enabled: true }}
          scrollbar={{ draggable: true }}
          spaceBetween={25}
          loop={true}
          initialSlide={selectedPicture}
        >
          {photos.map((image, index) => (
            <SwiperSlide key={index}>
              <CallToAction
                dwlLink={`${album.path}/hd/${image.name}.jpg`}
                icon="fa-solid fa-download"
                text="Télécharger HD"
              />
              <img
                src={`${album.path}/lowRes/${image.name}.webp`}
                alt={`Image ${index}`}
                className="myImage"
              />
              <p className="imgTitle">
                {image.author} - {album.title} {extractNumber(image.name)}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderStyled>
    )
  );
};

const SliderStyled = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  .navButton {
    height: 40px;
    width: 40px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    i {
      color: white;
      font-size: 1.5rem;
    }

    &::after {
      content: "";
      position: absolute;
      width: calc(40px - 8px);
      height: calc(40px - 8px);
      border-radius: 100%;
      border: solid white 1px;
    }

    &.prev {
      left: 2vw;
    }
    &.next {
      right: 2vw;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
      transition: background-color 250ms ease-in-out;
    }
  }

  .mySwiper {
    width: 100%;
    height: 100%;

    .swiper-slide {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 15px 0 25px 0;
      gap: 10px;

      .myImage {
        width: 100%;
        max-width: 100%;
        flex: 1;
        max-height: 85%;
        object-fit: contain;
      }

      .imgTitle {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 0.8rem;
        position: relative;

        @media screen and (min-width: 768px) {
          &::before,
          &::after {
            content: "";
            position: absolute;
            width: 60px;
            height: 1px;
            top: 50%;
            background-color: var(--mainColor);
          }

          &::before {
            left: -70px;
          }
          &::after {
            right: -70px;
          }
        }
      }
    }

    .swiper-scrollbar {
      height: 10px;
      margin-bottom: 5px;

      &-drag {
        background-color: var(--secondColor);
        min-width: 10px;
      }
    }
  }
`;

export default Slider;
