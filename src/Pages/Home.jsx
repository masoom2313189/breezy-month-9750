import { Text, Box, Image, Button } from "@chakra-ui/react";
import React from "react";
import styles from "../Styles/Home.module.css";
import { Link, Navigate } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import StarRoundedIcon from "@mui/icons-material/StarRounded";

function Home() {

  const handleClick = () => {
  return <Navigate to="/products"/>
  }

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
            <button onClick={handleClick} className={styles.button_main}>SHOP THE COLLECTION</button>
          </Box>
        </Box>
      </div>
      {/* Main End */}

      {/* Flex Div Start */}
      <div>
        <Box
          display={"flex"}
          justifyContent="space-between"
          marginTop={"20"}
          marginBottom={"20"}
        >
          <Box margin={"auto"}>
            <Text fontSize="2xl" fontWeight={"bold"}>
              4 SHIRTS OR POLOS
            </Text>
            <Text fontSize="6xl" fontWeight={"bold"}>
              $239
            </Text>
            <Text fontSize="1xl" fontWeight={"bold"} marginBottom="10">
              SAVE UP TO $235
            </Text>
            <Text>For the office to working from home,</Text>
            <Text>and everything in between. Easy-to-</Text>
            <Text>wear shirts. At easy prices.</Text>
            <Button
              fontWeight={"thin"}
              border={"1px solid black"}
              backgroundColor="white"
              borderRadius={"none"}
              width="220px"
              height={"50px"}
              marginTop={"10"}
            >
              SHOP NOW
            </Button>
          </Box>
          <Image
            width={"900px"}
            src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwbf2d6a6e/merchAssets/AW22/Homepage/multibuy/Multibuybook4-hp3.jpg"
          />
        </Box>
      </div>
      {/* Flex Div End */}
      {/* Rating Start */}
      <div className={styles.main_rating}>
        6
        <div className={styles.rating}>
          <div>
            <Box
              display={"flex"}
              justifyContent="center"
              margin="auto"
              textAlign={"center"}
              alignItems="center"
            >
              <Text>Average Customer Rating:</Text>
              <StarRoundedIcon sx={{ color: "#ffd000", fontSize: 30 }} />
              <StarRoundedIcon sx={{ color: "#ffd000", fontSize: 30 }} />
              <StarRoundedIcon sx={{ color: "#ffd000", fontSize: 30 }} />
              <StarRoundedIcon sx={{ color: "#ffd000", fontSize: 30 }} />
              <StarRoundedIcon sx={{ color: "#ffd000", fontSize: 30 }} />
              <Text fontWeight={"bold"} fontSize="2xl">
                4.7
              </Text>
              <Text fontSize="2xl">/5</Text>
              <Text color={"gray.200"} fontSize="2xl">
                |
              </Text>
              <Image
                width={"100px"}
                marginLeft="10px"
                marginTop="25px"
                src="https://site.feefo.com/hubfs/Feefo_logo_greyyellow-1.png"
              />
            </Box>
            <Box
              display={"flex"}
              justifyContent="center"
              margin="auto"
              textAlign={"center"}
              alignItems="center"
            >
              <Text color={"gray"} fontWeight={"bold"} fontSize="x-small">
                Independent Service Rating
              </Text>
              <Text color={"gray"} fontSize="x-small">
                based on
              </Text>
              <Text color={"gray"} fontWeight={"bold"} fontSize="x-small">
                687525
              </Text>
              <Text color={"gray"} fontSize="x-small">
                verified reviews.
              </Text>
              <Link
                style={{
                  color: "#368ec4",
                  fontSize: "13px",
                  fontWeight: "bold",
                }}
                to=""
              >
                Read all reviews
              </Link>
            </Box>
          </div>
          <Image
            width={"100px"}
            marginBottom={"2rem"}
            src="http://blog.everythingdinosaur.com/wp-content/uploads/2023/01/Platinum-Trusted-Service-Award-Badge-site.jpg"
          />
        </div>
        <div className={styles.rating_slider}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <Box>
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <Text fontWeight={"light"}>
                  Very Professsional and insighful guidance
                </Text>
                <Text fontSize={"x-small"} fontStyle="italic">
                  Mr. D Deji - Wednesday, January 18 2023
                </Text>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box>
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <Text fontWeight={"light"}>
                  Very Professsional and insighful guidance
                </Text>
                <Text fontSize={"x-small"} fontStyle="italic">
                  Mr. D Deji - Wednesday, January 18 2023
                </Text>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box>
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <Text fontWeight={"light"}>
                  Very Professsional and insighful guidance
                </Text>
                <Text fontSize={"x-small"} fontStyle="italic">
                  Mr. D Deji - Wednesday, January 18 2023
                </Text>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box>
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <Text fontWeight={"light"}>
                  Very Professsional and insighful guidance
                </Text>
                <Text fontSize={"x-small"} fontStyle="italic">
                  Mr. D Deji - Wednesday, January 18 2023
                </Text>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box>
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <Text fontWeight={"light"}>
                  Very Professsional and insighful guidance
                </Text>
                <Text fontSize={"x-small"} fontStyle="italic">
                  Mr. D Deji - Wednesday, January 18 2023
                </Text>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box>
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <Text fontWeight={"light"}>
                  Very Professsional and insighful guidance
                </Text>
                <Text fontSize={"x-small"} fontStyle="italic">
                  Mr. D Deji - Wednesday, January 18 2023
                </Text>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box>
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <Text fontWeight={"light"}>
                  Very Professsional and insighful guidance
                </Text>
                <Text fontSize={"x-small"} fontStyle="italic">
                  Mr. D Deji - Wednesday, January 18 2023
                </Text>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box>
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <Text fontWeight={"light"}>
                  Very Professsional and insighful guidance
                </Text>
                <Text fontSize={"x-small"} fontStyle="italic">
                  Mr. D Deji - Wednesday, January 18 2023
                </Text>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box>
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <Text fontWeight={"light"}>
                  Very Professsional and insighful guidance
                </Text>
                <Text fontSize={"x-small"} fontStyle="italic">
                  Mr. D Deji - Wednesday, January 18 2023
                </Text>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box>
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <Text fontWeight={"light"}>
                  Very Professsional and insighful guidance
                </Text>
                <Text fontSize={"x-small"} fontStyle="italic">
                  Mr. D Deji - Wednesday, January 18 2023
                </Text>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box>
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <Text fontWeight={"light"}>
                  Very Professsional and insighful guidance
                </Text>
                <Text fontSize={"x-small"} fontStyle="italic">
                  Mr. D Deji - Wednesday, January 18 2023
                </Text>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box>
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <Text fontWeight={"light"}>
                  Very Professsional and insighful guidance
                </Text>
                <Text fontSize={"x-small"} fontStyle="italic">
                  Mr. D Deji - Wednesday, January 18 2023
                </Text>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box>
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <Text fontWeight={"light"}>
                  Very Professsional and insighful guidance
                </Text>
                <Text fontSize={"x-small"} fontStyle="italic">
                  Mr. D Deji - Wednesday, January 18 2023
                </Text>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box>
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <Text fontWeight={"light"}>
                  Very Professsional and insighful guidance
                </Text>
                <Text fontSize={"x-small"} fontStyle="italic">
                  Mr. D Deji - Wednesday, January 18 2023
                </Text>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box>
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <Text fontWeight={"light"}>
                  Very Professsional and insighful guidance
                </Text>
                <Text fontSize={"x-small"} fontStyle="italic">
                  Mr. D Deji - Wednesday, January 18 2023
                </Text>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box>
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <StarRoundedIcon sx={{ color: "#ffd000" }} />
                <Text fontWeight={"light"}>
                  Very Professsional and insighful guidance
                </Text>
                <Text fontSize={"x-small"} fontStyle="italic">
                  Mr. D Deji - Wednesday, January 18 2023
                </Text>
              </Box>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* Rating End */}
      {/* First Image Starts */}
      <div>
        <Box>
          <Image src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwd93b8878/merchAssets/AW22/Homepage/wide-banner/custom-hp2-desktop.jpg" />
        </Box>
        <Box className={styles.first_image_text}>
          <Image
            width={"300px"}
            margin="auto"
            src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw8c98a202/merchAssets/AW22/Homepage/wide-banner/Custom22.svg"
          />
          <Text fontWeight={"thin"}>
            Our new Custom Shirt tool is here! Get creative as you pick your
            fabric, collar, cuffs and all the details that make it
            one-of-a-kind, then get it fitted to your measurements.
          </Text>
          <button className={styles.image_button}>TELL ME MORE</button>
          <button className={styles.image_button}>CUSTOMIZE YOUR SHIRTS</button>
        </Box>
      </div>
      {/* First Image End */}
      {/* Box Div Start */}
      <div className={styles.box_div}>
        <Box width={"20%"}>
          <Image
            margin={"auto"}
            width={"60px"}
            src="https://www.planetmark.com/wp-content/uploads/2021/06/Planet_Mark_Logo.png"
          />
          <Text marginBottom={"30px"} marginTop="30px" fontWeight={"bold"}>
            CARBON NEUTRAL
          </Text>
          <Text fontWeight={"light"}>
            We are proud to be Carbon Neutral with Planet Mark
          </Text>
        </Box>
        <Box width={"20%"}>
          <Image
            margin={"auto"}
            width={"60px"}
            src="https://www.charlestyrwhitt.com/on/demandware.static/Sites-CTShirts-US-Site/-/default/dwa0544bbe/images/icons-large/express-delivery.svg"
          />
          <Text marginBottom={"30px"} marginTop="30px" fontWeight={"bold"}>
            SECURE DELIVERY WITH PREMIUM SHIPPING
          </Text>
          <Text fontWeight={"light"}>
            Premium shipping options available at checkout for full tracking
            end-to-end
          </Text>
        </Box>
        <Box width={"20%"}>
          <Image
            margin={"auto"}
            width={"60px"}
            src="https://www.charlestyrwhitt.com/on/demandware.static/Sites-CTShirts-US-Site/-/default/dw51f76f12/images/icons-large/padlock.svg"
          />
          <Text marginBottom={"30px"} marginTop="30px" fontWeight={"bold"}>
            SAFE & EASY PAYMENT
          </Text>
          <Text fontWeight={"light"}>
            Shopping is safe with Charles Tyrwhitt. We accept payments via
            credit card, PayPal and Apple Pay
          </Text>
        </Box>
        <Box width={"20%"}>
          <Image
            margin={"auto"}
            width={"60px"}
            src="https://www.charlestyrwhitt.com/on/demandware.static/Sites-CTShirts-US-Site/-/default/dw308ba3fe/images/icons-large/click-and-collect.svg"
          />
          <Text marginBottom={"30px"} marginTop="30px" fontWeight={"bold"}>
            6-MONTH RETURNS
          </Text>
          <Text fontWeight={"light"}>
            Exchange or return your purchase to stores or online, up to six
            months after receiving them
          </Text>
        </Box>
      </div>
      {/* Box Div End */}
      {/* Second Image Starts */}
      <div>
        <Box>
          <Image src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwe28381b4/merchAssets/AW22/Homepage/wide-banner/recycling-hp5-desktop.jpg" />
        </Box>
        <Box className={styles.second_image_text}>
          <Text fontSize={"5xl"}>Donate & Save up to $40</Text>
          <Text marginBottom={"1rem"} marginTop="1rem" fontWeight={"bold"}>
            For every shirt you donate, you get $10 off a fresh one, or bring in
            4 and you’ll get $40 off our shirt multibuy. Win-win.
          </Text>
          <Text marginBottom={"1rem"} fontWeight={"bold"}>
            Bring any old shirt or polo (Tyrwhitt or not) to your nearest store,
            and we’ll donate them to local charities, so they can be reused.
          </Text>
          <button className={styles.button_main}>FIND OUT MORE</button>
        </Box>
      </div>
      {/* Second Image End */}

      {/* Last Image Start */}
      <div className={styles.last_image}>
        <Box>
          <Image width={"700px"} src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw4b7530c7/merchAssets/SS22/Homepage/wide-banner/hp6-store-desktop.jpg" />
        </Box>
        <Box margin={"auto"}>
          <Text margin={"auto"} width={"50%"} marginBottom={"2rem"} fontSize="3xl">Explore our stores with an experience catered to you</Text>
          <button className={styles.last_button}>PERSONAL APPOINTMENTS</button>
        </Box>
      </div>
      {/* Last Image End */}
    </div>
  );
}

export default Home;
