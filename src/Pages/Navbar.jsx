import {
  Box,
  InputRightAddon,
  Image,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import React from "react";
import styles from "../Styles/Navbar.module.css";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import { Link as RouterLink, Navigate } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div>
        <Box
          w="90%"
          margin="auto"
          display="flex"
          justifyContent="space-between"
          padding={"5"}
        >
          <Box display={"flex"} gap={"10"}>
            <FmdGoodOutlinedIcon />
            <PersonOutlineOutlinedIcon />
          </Box>
          <RouterLink to={"/"}>
            <Image
              src="http://ctshirts-us.custhelp.com/euf/assets/themes/standard/custom/img/ct-logo.svg"
              width={"320px"}
              marginLeft="250px"
            />
          </RouterLink>
          <Box display={"flex"} gap={"10"}>
            <InputGroup>
              <Input width="300px" placeholder="Search" />
              <InputRightAddon children={<SearchOutlinedIcon />} />
            </InputGroup>
            <WorkOutlineOutlinedIcon />
          </Box>
        </Box>
        <div>
          <div className={styles.wrapper}>
            <ul className={styles.nav_links}>
              <li>
                <RouterLink>SHIRTS</RouterLink>
                <div className={styles.box_new}>
                  <div className={styles.content}>
                    <div className={styles.row}>
                      <header>STYLE</header>
                      <ul className={styles.box_links}>
                        <li>
                          <RouterLink>DRESS</RouterLink>
                        </li>
                        <li>
                          <RouterLink>DRESS</RouterLink>
                        </li>
                        <li>
                          <RouterLink>DRESS</RouterLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <RouterLink>SHIRTS</RouterLink>
                <div className={styles.box_new}>
                  <div className={styles.content}>
                    <div className={styles.row}>
                      <header>STYLE</header>
                      <ul className={styles.box_links}>
                        <li>
                          <RouterLink>DRESS</RouterLink>
                        </li>
                        <li>
                          <RouterLink>DRESS</RouterLink>
                        </li>
                        <li>
                          <RouterLink>DRESS</RouterLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
