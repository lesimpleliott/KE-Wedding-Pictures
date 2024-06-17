import styled from "styled-components";
import "swiper/css";
import "swiper/css/scrollbar";
import { Autoplay, Keyboard, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import dataTest from "../assets/dataPhotos.json";

const Slider = () => {
  const album = dataTest.albums[6];
  const photos = album.images;

  function extractNumber(fileName: string) {
    const regex = /_(\d+)\.webp$/;
    const match = fileName.match(regex);
    if (match) {
      return `(${match[1]})`;
    } else {
      return "";
    }
  }

  return (
    <SliderStyled className="carousel">
      <button className="navButton prev">
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button className="navButton next">
        <i className="fa-solid fa-chevron-right"></i>
      </button>
      <Swiper
        className="mySwiper"
        modules={[Keyboard, Navigation, Scrollbar, Autoplay]}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        keyboard={{ enabled: true }}
        scrollbar={{ draggable: true }}
        rewind={true}
        loop={true}
        initialSlide={100}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {photos.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={`${album.path}/lowRes/${image.lowRes}`}
              alt={`Image ${index}`}
              className="myImage"
            />
            <p className="imgTitle">
              {image.author} - {album.title} {extractNumber(image.lowRes)}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderStyled>
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
      left: 10px;
    }
    &.next {
      right: 10px;
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
        max-height: 95%;
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
