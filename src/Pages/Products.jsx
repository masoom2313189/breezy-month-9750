import React from 'react';
import styles from "../Styles/Products.module.css";
import { Image, Box, Text} from '@chakra-ui/react';

function Products() {
  return (
    <div>
      <div>
        <Box>
          <Image width={"100%"} src='https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw7c5198cb/merchAssets/content/shirt-of-the-season/sots1-hero-desktop.jpg?sw=1440&sfrm=jpg' />
          <Text width={"70%"} margin="auto" marginBottom={"2rem"} marginTop="2rem">Exclusive to Charles Tyrwhitt, you won’t find this dobby weave anywhere else. The cutaway collar has a modern feel for both formal and more relaxed looks, and natural stretch from 100% cotton keeps things comfy. This non-iron hero comes in 10 designs and 3 fits. Pick from checks, fresh pastels and classic blues.</Text>
          <iframe width={"80%"} margin="auto" height={"800px"}  src="https://i.vimeocdn.com/video/1581894689-fd1a4280ff8b053555dc4e4781d229b251dc4b1a81a2c363343bfbed99f1e12b-d?mw=1400&mh=784&q=70" frameborder="0"></iframe>
        </Box>
      </div>
    </div>
  )
}

export default Products