import React, { useEffect, useState } from "react";
import styles from "../Styles/Products.module.css";
import { Image, Link, Box, Text, GridItem, Grid } from "@chakra-ui/react";
import axios from "axios";
import {Link as RouterLink} from "react-router-dom";



function Products() {
  const [data, setData] = useState([]);

  const getData = () => {
    return axios.get("http://localhost:8080/products");
  };

  useEffect(() => {
    getData().then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <div className={styles.products}>
      <div>
        <Box>
          <Image
            width={"100%"}
            src="https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw7c5198cb/merchAssets/content/shirt-of-the-season/sots1-hero-desktop.jpg?sw=1440&sfrm=jpg"
          />
          <Text
            width={"70%"}
            margin="auto"
            marginBottom={"2rem"}
            marginTop="2rem"
          >
            Exclusive to Charles Tyrwhitt, you won’t find this dobby weave
            anywhere else. The cutaway collar has a modern feel for both formal
            and more relaxed looks, and natural stretch from 100% cotton keeps
            things comfy. This non-iron hero comes in 10 designs and 3 fits.
            Pick from checks, fresh pastels and classic blues.
          </Text>
          <Box width={"70%"} margin="auto">
            <Image src="https://i.vimeocdn.com/video/1581894689-fd1a4280ff8b053555dc4e4781d229b251dc4b1a81a2c363343bfbed99f1e12b-d?mw=1400&mh=784&q=70" />
            <Box className={styles.image}>
              <Image width={"50px"} src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/mb-tracker/shirt-blue-active.png"/>
              <Box textAlign={"start"}>
                <Text fontWeight={"medium"}>SHIRTS & POLOS (1 of 4 added)</Text>
                <Text fontWeight={"light"}>Buy <b>3 more</b> to unlock multibuy prices</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
      <div className={styles.box}>
        <Box className={styles.box_box}>
          <Box width={"30%"}>
            <Image
              margin={"auto"}
              width={"120px"}
              src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwbd596ecd/merchAssets/content/richmond-weave/cotton-100-65px.svg"
            />
            <Text fontSize={"2xl"} fontWeight="medium">
              COTTON
            </Text>
            <Text marginTop={"1rem"} fontWeight={"light"}>
              High quality cotton has longer fibres, meaning a smoother, more
              durable finish.
            </Text>
          </Box>
          <Box width={"30%"}>
            <Image
              margin={"auto"}
              width={"120px"}
              src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw859558ac/merchAssets/content/richmond-weave/non-iron-65px%20(1).svg"
            />
            <Text fontSize={"2xl"} fontWeight="medium">
              NON - IRON
            </Text>
            <Text marginTop={"1rem"} fontWeight={"light"}>
              Thanks to our non-iron finish, you can put away the iron and
              embrace the lie-in.
            </Text>
          </Box>
          <Box width={"30%"}>
            <Image
              margin={"auto"}
              width={"120px"}
              src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw8eccf692/merchAssets/content/richmond-weave/natural-stretch-65px%20(1).svg"
            />
            <Text fontSize={"2xl"} fontWeight="medium">
              STRETCH
            </Text>
            <Text marginTop={"1rem"} fontWeight={"light"}>
              The natural cotton stretch will keep you comfy; whether you’re in
              meetings all day or at drinks that are running over.
            </Text>
          </Box>
        </Box>
      </div>
      {/* Grid Start */}
      <Box className={styles.grid}>
        <Grid templateColumns="repeat(3, 1fr)" gap={1}>
          {data.map((item) => (
            <RouterLink to={`/products/${item.id}`}>
            <GridItem key={item.id} paddingBottom="2rem">
              <Image width={"340px"} src={item.img1} />
              <Text fontWeight={"light"}>{item.name}</Text>
              <Text fontWeight={"bold"}>${item.price}</Text>
              <Text fontWeight={"thin"}>${item.buy}</Text>
            </GridItem>
            </RouterLink>
          ))}
        </Grid>
      </Box>
      {/* Grid End */}
      <div>
        <Box className={styles.explore}>
          <Text>EXPLORE MORE</Text>
        </Box>
      </div>
      {/* Box Grid Start */}
      <div>
        <Box className={styles.box_grid}>
          <Grid templateColumns="repeat(3, 1fr)" gap={0}>
            <GridItem margin={"auto"}>
              <Image
                textAlign={"center"}
                width={"300px"}
                src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwd543e397/merchAssets/content/style-tips/editorial-shirt-fits.jpg"
              />
              <Text fontSize={"2xl"} fontWeight={"medium"}>
                ABOUT OUR SHIRT FITS
              </Text>
              <Link fontWeight={"light"}>2 MINUTE READ</Link>
            </GridItem>
            <GridItem margin={"auto"}>
              <Image
                width={"300px"}
                src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw0046c889/merchAssets/content/style-tips/editorial-how-to-measure.jpg"
              />
              <Text fontSize={"2xl"} fontWeight={"medium"}>
                HOW TO MEASURE SHIRT
              </Text>
              <Link fontWeight={"light"}>2 MINUTE READ</Link>
            </GridItem>
            <GridItem margin={"auto"}>
              <Image
                width={"300px"}
                src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwdfdbfae4/merchAssets/content/style-tips/editorial-icons.jpg"
              />
              <Text fontSize={"2xl"} fontWeight={"medium"}>
                TYRWHITT ICONS
              </Text>
              <Link fontWeight={"light"}>1 MINUTE READ</Link>
            </GridItem>
          </Grid>
        </Box>
      </div>
      {/* Box Grid End */}
    </div>
  );
}

export default Products;
