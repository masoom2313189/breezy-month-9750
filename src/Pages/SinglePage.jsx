import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../Styles/SinglePage.module.css";
import { Image, Box, Text } from "@chakra-ui/react";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { Link as RouterLink } from "react-router-dom";

function SinglePage() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const getData = () => {
    return axios.get(`http://localhost:8080/products/${id}`);
  };

  useEffect(() => {
    getData().then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, [id]);
  return (
    <div>
      <div className={styles.main}>
        <Image width={"750px"} src={data.img1} />
        <Box className={styles.main_div}>
          <Box className={styles.main_first}>
            <Text fontSize={"20px"}>{data.name}</Text>
            <Box display={"flex"} justifyContent="space-between">
              <Text>
                <b>${data.price}</b>
              </Text>
              <Box display={"flex"}>
                <Text>{data.rating}</Text>
                <StarRoundedIcon sx={{ color: "#ffd000", fontSize: 20 }} />
                <StarRoundedIcon sx={{ color: "#ffd000", fontSize: 20 }} />
                <StarRoundedIcon sx={{ color: "#ffd000", fontSize: 20 }} />
                <StarRoundedIcon sx={{ color: "#ffd000", fontSize: 20 }} />
                <StarRoundedIcon sx={{ color: "#ffd000", fontSize: 20 }} />
              </Box>
            </Box>
            <Text fontWeight={"light"}>${data.buy}</Text>
          </Box>
          <Box>
            <Text
              marginBottom={"1rem"}
              marginTop="1rem"
              fontSize={"sm"}
              fontWeight={"light"}
            >
              Meet our Shirt of the Season: the versatile Henley. Like its
              namesake, it's stylish, refined and always draws attention.
            </Text>
            <Text>
              <b>1. COLOR</b> {data.color}
            </Text>
            <Box className={styles.color_image}>
              <RouterLink to={"/products/1"}>
                <Image
                  cursor={"pointer"}
                  _hover={{ border: "1px solid black" }}
                  borderRadius={"50%"}
                  src="https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dw6b4b22ac/swatch/FON2482WHT_SWATCH.jpg?sw=40&sh=40"
                />
              </RouterLink>
              <RouterLink to={"/products/7"}>
                <Image
                  cursor={"pointer"}
                  _hover={{ border: "1px solid black" }}
                  borderRadius={"50%"}
                  src="https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dwb4a9dd82/swatch/FON2482CFW_SWATCH.jpg?sw=40&sh=40"
                />
              </RouterLink>
              <RouterLink to={"/products/5"}>
                <Image
                  cursor={"pointer"}
                  _hover={{ border: "1px solid black" }}
                  borderRadius={"50%"}
                  src="https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dw6625f261/swatch/FON2482OCE_SWATCH.jpg?sw=40&sh=40"
                />
              </RouterLink>
              <RouterLink to={"/products/4"}>
                <Image
                  cursor={"pointer"}
                  _hover={{ border: "1px solid black" }}
                  borderRadius={"50%"}
                  src="https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dwa7f3bc85/swatch/FON2482RYL_SWATCH.jpg?sw=40&sh=40"
                />
              </RouterLink>
              <RouterLink to={"/products/2"}>
                <Image
                  cursor={"pointer"}
                  _hover={{ border: "1px solid black" }}
                  borderRadius={"50%"}
                  src="https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dw8c62fdcf/swatch/FON2482SKY_SWATCH.jpg?sw=40&sh=40"
                />
              </RouterLink>
              <RouterLink to={"/products/4"}>
                <Image
                  cursor={"pointer"}
                  _hover={{ border: "1px solid black" }}
                  borderRadius={"50%"}
                  src="https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dwcb923571/swatch/FON2482LLC_SWATCH.jpg?sw=40&sh=40"
                />
              </RouterLink>
              <RouterLink to={"/products/8"}>
                <Image
                  cursor={"pointer"}
                  _hover={{ border: "1px solid black" }}
                  borderRadius={"50%"}
                  src="https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dw98faa560/swatch/FON2482LPK_SWATCH.jpg?sw=40&sh=40"
                />
              </RouterLink>
              <RouterLink to={"/products/3"}>
                <Image
                  cursor={"pointer"}
                  _hover={{ border: "1px solid black" }}
                  borderRadius={"50%"}
                  src="https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dwf16caec2/swatch/FON2482PNK_SWATCH.jpg?sw=40&sh=40"
                />
              </RouterLink>
              <RouterLink to={"/products/9"}>
                <Image
                  cursor={"pointer"}
                  _hover={{ border: "1px solid black" }}
                  borderRadius={"50%"}
                  src="https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dwfa0a3638/swatch/FON2482PCH_SWATCH.jpg?sw=40&sh=40"
                />
              </RouterLink>
              <RouterLink to={"/products/6"}>
                <Image
                  cursor={"pointer"}
                  _hover={{ border: "1px solid black" }}
                  borderRadius={"50%"}
                  src="https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dw16a19757/swatch/FON2482LGN_SWATCH.jpg?sw=40&sh=40"
                />
              </RouterLink>
            </Box>
            <button className={styles.button_first}>ADD TO BAG</button>
            <button className={styles.button_second}>NEW - BUILD A CUSTOM SHIRT</button>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default SinglePage;
