import React, { useState } from "react";
import styles from "../Styles/Signup.module.css";
import { Image, Box, Text, Select, Checkbox } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { CheckBox } from "@mui/icons-material";
import axios from "axios";

function SignUp() {
  const [form, setForm] = useState({
    title: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const payload = {
    title: "",
    first_name: "",
  };

  const handleSubmit = (e, body) => {
    e.preventDefault();
    axios.post("http://localhost:8080/users", body).then((res) => {
      console.log(res);
    });
    console.log({ ...form });
  };

  const { title, first_name, last_name, email, password, phone } = form;

  return (
    <div className={styles.main}>
      <Text
        textAlign="start"
        marginBottom={"3rem"}
        fontSize={"2xl"}
        fontWeight={"bold"}
      >
        Create account
      </Text>
      <div className={styles.signup}>
        <div className={styles.signup_first}>
          <form>
            <p>Title</p>
            <Select
              onChange={handleChange}
              name="title"
              value={title}
              className={styles.select}
            >
              <option>CHOOSE A TITLE</option>
              <option>MR</option>
              <option>MRS</option>
              <option>MS</option>
              <option>MISS</option>
              <option>DOCTOR</option>
              <option>OTHER</option>
            </Select>

            <p>First name</p>
            <input
              name="first_name"
              value={first_name}
              onChange={handleChange}
              style={{ marginBottom: "1rem" }}
              type="text"
            />
            <p>Last name</p>
            <input
              name="last_name"
              value={last_name}
              onChange={handleChange}
              style={{ marginBottom: "1rem" }}
              type="text"
            />
            <p>Email Address</p>
            <input
              name="email"
              value={email}
              onChange={handleChange}
              style={{ marginBottom: "1rem" }}
              type="text"
            />
            <p>
              <b>Password</b>
            </p>
            <p>
              Your password should be at least 8 characters in length, and
              contain at least 1 number and 1 letter.
            </p>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              style={{ marginBottom: "1rem" }}
            />
            <p>
              <b>Phone</b>
            </p>
            <p>
              We'll only use this to contact you about your order or to send you
              SMS about your delivery
            </p>
            <input
              name="phone"
              value={phone}
              onChange={handleChange}
              style={{ marginBottom: "2rem" }}
              type="number"
            />

            <Box marginBottom={"1rem"}>
              <Checkbox size={"sm"}>
                Emails about offers and our exciting new ranges.
              </Checkbox>
              <Checkbox size={"sm"}>
                If you'd prefer not to receive mail from selected companies,
                please check this box.
              </Checkbox>
              <Text fontSize={"x-small"}>
                By creating an account with Charles Tyrwhitt, you confirm that
                you have read and accept our Terms and Conditions and See
                privacy policy.
              </Text>
            </Box>
            <button onClick={handleSubmit} className={styles.button_signup}>
              LOG IN
            </button>
          </form>
        </div>
        <div>
          <Box textAlign={"start"}>
            <Box className={styles.signup_box}>
              <Image
                width={"50px"}
                src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw35ca6cf0/images/Guarantee.svg"
              />
              <Box>
                <Text>6 MONTHS GUARANTEE</Text>
                <Text fontSize={"small"}>
                  Exchange or return your purchase up to
                </Text>
                <Text fontSize={"small"}> 6 months after receipt</Text>
              </Box>
            </Box>
            <Box className={styles.signup_box}>
              <Image
                width={"50px"}
                src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwb801377e/images/Security.svg"
              />
              <Box>
                <Text>100% SECURE</Text>
                <Text fontSize={"small"}>
                  Shopping is secure with Charles Tyrwhitt
                </Text>
              </Box>
            </Box>
            <Text
              textAlign="start"
              marginBottom={"1rem"}
              fontSize={"1xl"}
              fontWeight={"bold"}
            >
              HAVE AN ACCOUNT?
            </Text>
            <RouterLink to={"/login"}>
              <button className={styles.button_login}>
                CLICK HERE TO LOG IN
              </button>
            </RouterLink>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
