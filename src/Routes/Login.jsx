import React from "react";
import styles from "../Styles/Login.module.css";
import { Image, Box, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Login() {
  return (
    <div className={styles.main}>
      <Text
        textAlign="start"
        marginBottom={"3rem"}
        fontSize={"2xl"}
        fontWeight={"bold"}
      >
        My account
      </Text>
      <div className={styles.login}>
        <div className={styles.login_first}>
          <form action="">
            <p>Email address</p>
            <input style={{ marginBottom: "1rem" }} type="text" />
            <p>Password</p>
            <input type="text" />
            <RouterLink>
              <p>Forgotten your password?</p>
            </RouterLink>

            <button className={styles.button_login}>LOG IN</button>
          </form>
        </div>
        <div>
          <Box textAlign={"start"}>
            <Text fontWeight={"bold"}>New customers</Text>
            <Text fontSize={"small"}>
              Set up an account with us and you will be able to:
            </Text>
            <Box
              display={"flex"}
              gap={"10px"}
              marginBottom="1rem"
              marginTop={"1rem"}
            >
              <Image src="https://www.charlestyrwhitt.com/on/demandware.static/Sites-CTShirts-US-Site/-/default/dwf4a735ed/images/svg-icons/order_history.svg" />
              <Text fontSize={"small"}>Check order status</Text>
            </Box>
            <Box
              display={"flex"}
              gap={"10px"}
              marginBottom="1rem"
              marginTop={"1rem"}
            >
              <Image src="https://www.charlestyrwhitt.com/on/demandware.static/Sites-CTShirts-US-Site/-/default/dw6487c802/images/svg-icons/address_book.svg" />
              <Text fontSize={"small"}>
                Save multiple addresses to your address book
              </Text>
            </Box>
            <Box
              display={"flex"}
              gap={"10px"}
              marginBottom="1rem"
              marginTop={"1rem"}
            >
              <Image src="https://www.charlestyrwhitt.com/on/demandware.static/Sites-CTShirts-US-Site/-/default/dw89ca1b9b/images/svg-icons/personal_details.svg" />
              <Text fontSize={"small"}>
                Set your size and monogramming preferences
              </Text>
            </Box>
            <RouterLink to={"/sign-up"}>
              <button className={styles.button_signup}>
                CREATE AN ACCOUNT NOW
              </button>
            </RouterLink>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Login;
