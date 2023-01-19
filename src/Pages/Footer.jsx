import React from "react";
import styles from "../Styles/Footer.module.css";
import {
  Text,
  Box,
  InputGroup,
  Input,
  InputRightAddon,
  Image,
} from "@chakra-ui/react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LockIcon from "@mui/icons-material/Lock";

function Footer() {
  return (
    <div className={styles.footer}>
      <Box className={styles.first_input}>
        <Text>We will keep you posted on new products and great offers</Text>
        <Box>
          <InputGroup>
            <Input
              border={"1px solid black"}
              color="white"
              placeholder="Email Address"
              width={"300px"}
              borderRadius="none"
            />
            <InputRightAddon
              backgroundColor={"black"}
              color="white"
              children={<KeyboardArrowRightIcon />}
            />
          </InputGroup>
        </Box>
      </Box>
      <div className={styles.footer_main}>
        <Box>
          <Text fontWeight={"bold"}>HELP</Text>
          <Text>FAQS</Text>
          <Text>SHIPPING</Text>
          <Text>RETURNS</Text>
          <Text>SIZE GUIDES</Text>
          <Text>SHIRT MULTIBUY</Text>
          <Text>FIND A STORE</Text>
          <Text>CONTACT US</Text>
          <Text>WHERE IS MY ORDER?</Text>
        </Box>
        <Box>
          <Text fontWeight={"bold"}>LEGAL</Text>
          <Text>TERMS AND CONDITIONS</Text>
          <Text>PRIVACY POLICY</Text>
          <Text>OUR COOKIE POLICY</Text>
          <Text>ACCESSIBILITY STATEMENT</Text>
          <Text>ETHICAL TRADING POLICY</Text>
          <Text>MODERN SLAVERY STATEMENT</Text>
          <Text>INCLUSIVE WORKING STATEMENT</Text>
          <Text>MY PERSONAL INFORMATION</Text>
        </Box>
        <Box>
          <Text fontWeight={"bold"}>MORE INFO</Text>
          <Text>ABOUT US</Text>
          <Text>CUSTOM SHIRTS</Text>
          <Text>GIFT VOUCHERS</Text>
          <Text>WHOLESALE PARTNERSHIPS</Text>
          <Text>COUPON CODES</Text>
          <Text>REQUEST A CATALOGUE</Text>
          <Text>DOING THINGS PROPERLY</Text>
        </Box>
        <Box>
          <Text fontWeight={"bold"}>CAREERS</Text>
          <Text>UK VACANCIES</Text>
          <Text>US VACANCIES</Text>
          <Text>OUR BELIEFS</Text>
          <Text>OUR BENEFITS</Text>
          <Text>OUR PEOPLE</Text>
          <Box>
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
          </Box>
        </Box>
      </div>
      <div className={styles.second}>
        <Box>
          <Text>
            <LockIcon /> Shopping is secure with Charles Tyrwhitt.
          </Text>
          <Text>We accept:</Text>
          <Box className={styles.second_div}>
            <Image
              margin={"auto"}
              width={"50px"}
              src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwc61fa691/images/payment_methods/basket_visa.svg"
            />
            <Image
              margin={"auto"}
              width={"50px"}
              src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwb708a05a/images/payment_methods/basket_amex.svg"
            />
            <Image
              margin={"auto"}
              width={"50px"}
              src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw733cef56/images/payment_methods/basket_mastercard.svg"
            />
            <Image
              margin={"auto"}
              width={"50px"}
              src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw043e7c50/images/payment_methods/basket_paypal.svg"
            />
            <Image
              margin={"auto"}
              width={"50px"}
              src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw2f3fbf38/images/payment_methods/basket_apple_pay.svg"
            />
          </Box>
        </Box>
      </div>
      <div className={styles.last}>
        <Box>
          <Image
            margin={"auto"}
            width={"150px"}
            src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/en_US/dwd137d729/partner-footer-us.png"
          />
        </Box>
      </div>
      <div className={styles.end} >
        <Box display={"flex"} justifyContent="space-between" marginBottom={"1rem"}>
          <Text fontSize={"x-small"}>© 2022 Charles Tyrwhitt Shirts Ltd.</Text>
          <Text fontSize={"x-small"}>All products are imported into the US.</Text>
        </Box>
        <Box display={"flex"} justifyContent="space-between">
          <Text fontSize={"sm"}>USDDEFAULT</Text>
          <Text fontSize={"sm"}>CHANGE COUNTRY ›</Text>
        </Box>
      </div>
    </div>
  );
}

export default Footer;
