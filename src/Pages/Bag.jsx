import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../Styles/Bag.module.css";

function Bag() {
  return (
    <div>
      <Box className={styles.main}>
        <Text fontSize={"3xl"} fontWeight="bold">BAG</Text>
        <Box display={"flex"} gap="5px" width={"20%"}>
          <Image width={"30px"} src="https://www.charlestyrwhitt.com/on/demandware.static/Sites-CTShirts-US-Site/-/default/dwd9fc8d70/images/svg-icons/padlock.svg" />
          <Text textAlign={"start"} fontSize={"small"}>Shopping is secure with Charles Tyrwhitt.</Text>
        </Box>
      </Box>
      <Box className={styles.second}>
        <Text fontSize={"2xl"}>There are no items in your bag</Text>
      </Box>
      <Box className={styles.last}>
        <Text fontSize={"3xl"} marginBottom="1rem" fontWeight={"bold"}>RECENTLY VIEWED</Text>
        <Image src="https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dw9c0db6de/hi-res/FOB0697TEL_COLLAR_DETAIL.jpg?sw=430&sh=538&sm=fit&q=42" />
        <Text>Semi-Spread Collar Non-Iron Stretch Texture Shirt - Teal Green</Text>
        <Text><b>$119</b></Text>
      </Box>
    </div>
  );
}

export default Bag;
