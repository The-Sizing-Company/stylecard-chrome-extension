import {
  Box,
  Button,
  IconButton,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import React, { useState } from "react";
import CustomCTAButton from "../../components/CustomCTAButton/CustomCTAButton";
import CustomDropdownSelect from "../../components/CustomDropdownSelect/CustomDropdownSelect";
import CustomTextInput from "../../components/CustomTextInput/CustomTextInput";

const countries = [
  {
    value: "(+1)",
    label: "United States (+1)",
  },
  {
    value: "(+44)",
    label: "United Kingdom (+44)",
  },
];

interface UserSignInProps {
  setCurrentView: any;
}

function UserSignUp({ setCurrentView }: UserSignInProps) {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <AppContainer>
      <HeaderContainer>
        <ButtonWrapper>
          <Tooltip title="Close">
            <IconButton>
              <HighlightOffIcon sx={{ color: "#000000" }} />
            </IconButton>
          </Tooltip>
        </ButtonWrapper>
      </HeaderContainer>
      <HeaderLogoWrapper>
        <img
          src="/image/stylecard-logo-horizontal.png"
          style={{ width: "224px", height: "50px" }}
        />
      </HeaderLogoWrapper>
      <H5Text variant="h5">Sign Up</H5Text>
      <H4Text variant="h4">Welcome to Stylecard</H4Text>
      <CustomTextInput
        value={name}
        label={"First Name"}
        onChange={setName}
        type="text"
      />
      <CustomDropdownSelect
        label="Country / Region"
        options={countries}
        onClick={setCountry}
      />
      <CustomTextInput
        value={phone}
        label={"Phone Number"}
        onChange={setPhone}
        type="phone"
      />
      <BodyTwoText variant="body2">
        We’ll call of text you to confirm your number. Standard message and data
        rates apply.{" "}
      </BodyTwoText>
      <CustomCTAButton
        style={{ marginTop: "12px" }}
        onClick={() => {
          setCurrentView(2);
        }}
        label={"Create Account"}
        variant={"right"}
        disabled={name && country && phone ? false : true}
      />
      <H4Text sx={{ marginTop: "26px" }} variant="h4">
        Already have an account?
      </H4Text>
      <CustomCTAButton
        style={{ marginTop: "12px" }}
        onClick={() => {
          setCurrentView(1);
        }}
        label={"Sign In"}
        variant={"right"}
      />
    </AppContainer>
  );
}

export default UserSignUp;

const AppContainer = styled(Box)(({ theme }) => ({
  maxWidth: "390px",
  height: "600px",
  border: "1px solid #ececec",
  background: "#ffffff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "28px 28px",
}));

const HeaderContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "30px",
  display: "flex",
  flexDirection: "row",
  position: "relative",
}));

const HeaderLogoWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "24px",
}));

const H4Text = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  marginTop: "11px",
  fontWeight: "bolder",
  width: "100%",
}));

const H5Text = styled(Typography)(({ theme }) => ({
  marginTop: "15px",
  textAlign: "center",
}));

const ButtonWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "0px",
  right: "0px",
}));

const BodyTwoText = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  marginTop: "22px",
}));
