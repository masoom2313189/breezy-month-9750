import { Text, Box, Image, Button } from "@chakra-ui/react";
import React from "react";
import styles from "../Styles/Home.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Home() {
  return (
    <div className={styles.home}>
      {/* Video Start */}

      <div>
        <Box>
          <video
            src="https://player.vimeo.com/progressive_redirect/playback/788572412/rendition/720p/file.mp4?loc=external&signature=d302a4ac2d7b06d9a4f3a0ad88015d243844035738d54dba32e5ba17f870829d"
            autoPlay
            loop
            muted
            width={"100%"}
          />
          <Box className={styles.video_text}>
            <Text color={"white"} fontSize="5xl" fontWeight={"500"}>
              Your Presentation Isn't Just
            </Text>
            <Text color={"white"} fontSize="5xl" fontWeight={"500"}>
              On Your Laptop
            </Text>
            <Box marginTop={"10"}>
              <Text color={"#ffd000"} fontSize="3xl">
                4 SHIRTS OR POLOS FOR $239
              </Text>
              <Text color={"#ffd000"} fontSize="3xl">
                SAVE UP TO $235
              </Text>
            </Box>
            <Box marginTop={"10"}>
              <button className={styles.button_main}>SHOP NEW SEASON</button>
              <button
                className={styles.button_main}
                style={{ marginLeft: "2.5rem" }}
              >
                SHOP SHIRTS
              </button>
            </Box>
          </Box>
        </Box>
      </div>

      {/* Video End */}

      {/* Slide Show Start  */}
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4.5}
          loop={true}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <Box className={styles.slider}>
              <Image src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwc543fb2f/merchAssets/SS23/Homepage/hero-carousel/hc-002.jpg" />
              <Box className={styles.slider_text}>
                <Text color={"white"} fontSize="1xl" fontWeight={"600"}>
                  SUITS
                </Text>
                <Text color={"#ffd000"} fontSize="2xl" fontWeight={"bold"}>
                  Ultimate Performance
                </Text>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className={styles.slider}>
              <Image src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw2e88d8fb/merchAssets/SS23/Homepage/hero-carousel/hc-003.jpg" />
              <Box className={styles.slider_text}>
                <Text color={"white"} fontSize="1xl" fontWeight={"600"}>
                  SWEATERS
                </Text>
                <Text color={"#ffd000"} fontSize="2xl" fontWeight={"bold"}>
                  New Colors
                </Text>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className={styles.slider}>
              <Image src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw3bd5e658/merchAssets/SS23/Homepage/hero-carousel/hc-004.jpg" />
              <Box className={styles.slider_text}>
                <Text color={"white"} fontSize="1xl" fontWeight={"600"}>
                  PANTS
                </Text>
                <Text color={"#ffd000"} fontSize="2xl" fontWeight={"bold"}>
                  Buy 2, Save $20
                </Text>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className={styles.slider}>
              <Image src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw0f93f90a/merchAssets/SS23/Homepage/hero-carousel/hc-005.jpg" />
              <Box className={styles.slider_text}>
                <Text color={"white"} fontSize="1xl" fontWeight={"600"}>
                  CASUAL SHIRTS
                </Text>
                <Text color={"#ffd000"} fontSize="2xl" fontWeight={"bold"}>
                  4 for $239, Save $235
                </Text>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className={styles.slider}>
              <Image src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw74322585/merchAssets/SS23/Homepage/hero-carousel/hc-006.jpg" />
              <Box className={styles.slider_text}>
                <Text color={"white"} fontSize="1xl" fontWeight={"600"}>
                  SHOES
                </Text>
                <Text color={"#ffd000"} fontSize="2xl" fontWeight={"bold"}>
                  Shoegazing
                </Text>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className={styles.slider}>
              <Image src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwbaef6588/merchAssets/SS23/Homepage/hero-carousel/hc-001.jpg" />
              <Box className={styles.slider_text}>
                <Text color={"white"} fontSize="1xl" fontWeight={"600"}>
                  DRESS SHIRTS
                </Text>
                <Text color={"#ffd000"} fontSize="2xl" fontWeight={"bold"}>
                  4 for $239, Save $235
                </Text>
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Slide Show End */}

      {/* Main Start */}
      <div>
        <Box>
          <Image
            src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw73d084aa/merchAssets/SS23/Homepage/hp/henley-hp2-desktop.jpg"
            width="100%"
          />
          <Box className={styles.image_text}>
            <Text color={"#ffd000"} fontSize="4xl" fontWeight={"bold"}>
              NEW
            </Text>
            <Text color={"#ffd000"} fontSize="4xl">
              Meet the Henley Weave, our shirt of the season.
            </Text>
            <Text color={"#ffd000"}>
              You won’t find this dobby weave anywhere else. The cutaway collar
              has a modern feel for formal and relaxed looks, and natural
              stretch from 100% cotton keeps things comfy.
            </Text>
            <Text color={"#ffd000"}>
              This non-iron hero comes in 10 designs and 3 fits. Pick from
              checks, fresh pastels and classic blues.
            </Text>
            <Box display={"flex"}>
              <Image
                src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwe953e761/merchAssets/content/USP%20Icons/Cotton_100_White.svg"
                width={"20"}
              />
              <Image
                src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwe298968b/merchAssets/content/USP%20Icons/non-iron-white.svg"
                width={"20"}
              />
              <Image
                src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwe410c02a/merchAssets/content/USP%20Icons/three-fit-white.svg"
                width={"20"}
              />
            </Box>
            <button className={styles.button_main}>SHOP THE COLLECTION</button>
          </Box>
        </Box>
      </div>
      {/* Main End */}

      {/* First Image Starts */}
      <div>
        <Box>
          <Image src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwd93b8878/merchAssets/AW22/Homepage/wide-banner/custom-hp2-desktop.jpg"/>
        </Box>
      </div>
      {/* First Image End */}

       {/* Second Image Starts */}
       <div>
        <Box>
          <Image src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwe28381b4/merchAssets/AW22/Homepage/wide-banner/recycling-hp5-desktop.jpg"/>
        </Box>
      </div>
      {/* Second Image End */}
    </div>
  );
}

export default Home;
