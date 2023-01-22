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
import { Link as RouterLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className={styles.header}>
        <Box
          w="90%"
          margin="auto"
          display="flex"
          justifyContent="space-between"
          padding={"5"}
        >
          <Box display={"flex"} gap={"10"}>
            <RouterLink to={"/locations"}>
              <FmdGoodOutlinedIcon sx={{ fontSize: 35 }} />
            </RouterLink>
            <RouterLink to={"/login"}>
              <PersonOutlineOutlinedIcon sx={{ fontSize: 35 }} />
            </RouterLink>
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
            <RouterLink to={"/shoping-bag"}>
              <WorkOutlineOutlinedIcon sx={{ fontSize: 35 }} />
            </RouterLink>
          </Box>
        </Box>
      </div>
      <div className={styles.main_navbar}>
        <div className={styles.wrapper}>
          <ul className={styles.nav_links}>
            <li>
              <RouterLink>SHIRTS</RouterLink>
              <div className={styles.box_new}>
                <div className={styles.content}>
                  <Image
                    width={"150px"}
                    src="https://www.charlestyrwhitt.com/on/demandware.static/-/Sites-ctshirts-site-us/default/dw9d168f4e/tn-ss23-001.jpg#cm_sp=TN-new-shirts"
                  />
                  <Image
                    width={"150px"}
                    src="https://www.charlestyrwhitt.com/on/demandware.static/-/Sites-ctshirts-site-us/default/dw53e8d1e4/tn-ss23-002.jpg#cm_sp=TN-polos"
                  />
                  <Image
                    width={"150px"}
                    src="https://www.charlestyrwhitt.com/on/demandware.static/-/Sites-ctshirts-site-us/default/dw752743f9/tn-aw22-035.jpg#cm_sp=TN-accessories_belts"
                  />
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

              <RouterLink>SUITS</RouterLink>
              <div className={styles.box_new}>
                <div className={styles.content}>
                  <Image
                    width={"150px"}
                    src="https://www.charlestyrwhitt.com/on/demandware.static/-/Sites-ctshirts-site-us/default/dwdd7dd88d/tn-ss23-004.jpg#cm_sp=TN-suits_new_season"
                  />
                  <Image
                    width={"150px"}
                    src="https://www.charlestyrwhitt.com/on/demandware.static/-/Sites-ctshirts-site-us/default/dw1ce69c52/tn-ss23-005.jpg#cm_sp=TN-suits_business"
                  />
                  <Image
                    width={"150px"}
                    src="https://www.charlestyrwhitt.com/on/demandware.static/-/Sites-ctshirts-site-us/default/dw83b98a47/tn-ss23-006.jpg#cm_sp=TN-blazers"
                  />
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

              <RouterLink>PANTS</RouterLink>
              <div className={styles.box_new}>
                <div className={styles.content}>
                  <Image
                    width={"150px"}
                    src="https://www.charlestyrwhitt.com/on/demandware.static/-/Sites-ctshirts-site-us/default/dwd29c2a89/tn-ss23-007.jpg#cm_sp=TN-trousers-new-season"
                  />
                  <Image
                    width={"150px"}
                    src="https://www.charlestyrwhitt.com/on/demandware.static/-/Sites-ctshirts-site-us/default/dwc08a472d/tn-aw22-002.jpg#cm_sp=TN-trousers-chinos"
                  />
                  <Image
                    width={"150px"}
                    src="https://www.charlestyrwhitt.com/on/demandware.static/-/Sites-ctshirts-site-us/default/dw6147d4cb/tn-ss23-024-new.jpg#cm_sp=TN-Trousers-smart-trousers"
                  />
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
              <RouterLink>SWEATERS</RouterLink>
              <div className={styles.box_new}>
                <div className={styles.content}>
                  <Image
                    width={"150px"}
                    src="https://www.charlestyrwhitt.com/on/demandware.static/-/Sites-ctshirts-site-us/default/dw055705ac/tn-ss23-008.jpg#cm_sp=TN-knitwear-new-season"
                  />
                  <Image
                    width={"150px"}
                    src="https://www.charlestyrwhitt.com/on/demandware.static/-/Sites-ctshirts-site-us/default/dw2dde8d44/tn-ss23-009.jpg#cm_sp=TN-knitwear-zip-neck"
                  />
                  <Image
                    width={"150px"}
                    src="https://www.charlestyrwhitt.com/on/demandware.static/-/Sites-ctshirts-site-us/default/dw1db4d68e/tn-ss23-010.jpg#cm_sp=TN-knitwear-jumpers"
                  />
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
              <RouterLink>JACKETS & COATS</RouterLink>
              <div className={styles.box_new}>
                <div className={styles.content}>
                  <Image
                    width={"150px"}
                    src="https://www.charlestyrwhitt.com/on/demandware.static/-/Sites-ctshirts-site-us/default/dw6b41f18f/tn-ss23-011.jpg#cm_sp=TN-outerwear_new_season"
                  />
                  <Image
                    width={"150px"}
                    src="https://www.charlestyrwhitt.com/on/demandware.static/-/Sites-ctshirts-site-us/default/dwa092db49/tn-ss23-012.jpg#cm_sp=TN-outerwear_coats"
                  />
                  <Image
                    width={"150px"}
                    src="https://www.charlestyrwhitt.com/on/demandware.static/-/Sites-ctshirts-site-us/default/dwa768efcf/tn-aw22-041.jpg#cm_sp=TN-outerwear_gilet"
                  />
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
              <RouterLink>SHOES</RouterLink>
              <div className={styles.box_new}>
                <div className={styles.content}>
                  <Image
                    width={"200px"}
                    src="https://www.charlestyrwhitt.com/on/demandware.static/-/Sites-ctshirts-site-us/default/dw0e07f559/tn-ss23-023.jpg#cm_sp=TN-shoes"
                  />
                  
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
              <RouterLink>ACCESSORIES</RouterLink>
              <div className={styles.box_new}>
                <div className={styles.content}>
                  <Image
                    width={"150px"}
                    src="https://www.charlestyrwhitt.com/on/demandware.static/-/Sites-ctshirts-site-us/default/dwbdbbefb5/tn-ss23-017.jpg#cm_sp=TN-accessories_newAccessories"
                  />
                  <Image
                    width={"150px"}
                    src="https://www.charlestyrwhitt.com/on/demandware.static/-/Sites-ctshirts-site-us/default/dwbee3ed15/tn-ss23-018.jpg#cm_sp=TN-accessories_ties"
                  />
                  <Image
                    width={"150px"}
                    src="https://www.charlestyrwhitt.com/on/demandware.static/-/Sites-ctshirts-site-us/default/dw57380990/tn-ss23-016.jpg#cm_sp=TN-accessories_socks"
                  />
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
    </>
  );
}

export default Navbar;
