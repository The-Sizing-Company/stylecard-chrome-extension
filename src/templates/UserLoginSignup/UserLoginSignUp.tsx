import {
  Box,
  Button,
  IconButton,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import React from "react";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

interface UserLoginSignUpProps {
  setCurrentView: any;
}

function UserLoginSignUp({ setCurrentView }: UserLoginSignUpProps) {
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
          style={{ width: "305px", height: "68px" }}
        />
      </HeaderLogoWrapper>
      <H5Text variant="h5">Login / Sign Up</H5Text>
      <H4Text variant="h4">Welcome to Stylecard</H4Text>
      <CustomDropdownSelect
        fullWidth
        id="phonePrefix"
        select
        label="Country/Region"
        defaultValue="United States (+1)"
        SelectProps={{
          native: true,
        }}
      >
        {currencies.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </CustomDropdownSelect>
      <CustomInput fullWidth required id="phoneNumber" label="Phone Number" />
      <BodyTwoText variant="body2">
        We’ll call of text you to confirm your number. Standard message and data
        rates apply.{" "}
        <a>
          <u>
            <strong>Privacy Policy</strong>
          </u>
        </a>
      </BodyTwoText>
      <CustomButton
        fullWidth
        variant="contained"
        onClick={() => setCurrentView(2)}
      >
        <span>Sign Up</span>
        <DoubleArrowIcon />{" "}
      </CustomButton>
      <H4Text variant="h4">Already have an account?</H4Text>
      <BodyOneText>
        Log in with your phone number below so you can get back to your
        personalized Stylecard.
      </BodyOneText>
      <CustomInput fullWidth required id="phoneNumber" label="Phone Number" />
      <CustomButton fullWidth variant="contained">
        <span>Sign In</span>
        <DoubleArrowIcon />{" "}
      </CustomButton>
      <LogoWrapper>
        <img
          style={{ width: "119px", height: "190px" }}
          src="/image/stylecard-logo-vertical.png"
        />
      </LogoWrapper>
    </AppContainer>
  );
}

export default UserLoginSignUp;

const AppContainer = styled(Box)(({ theme }) => ({
  maxWidth: "390px",
  height: "auto",
  border: "1px solid #ececec",
  borderRadius: "8px 8px 8px 8px",
  background: "#ffffff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "30px 30px",
}));

const PageWrapper = styled(Box)(({ theme }) => ({
  width: "auto",
  // position: "absolute",
  // right: "0px",
  // top: "0px",
  // height: "auto",
  // width: "100%",
  // display: "flex",
  // flexDirection: "column",
  // alignItems: "center",
  // justifyContent: "center",
  // background: "#ececec",
  // paddingTop: "60px",
  // paddingBottom: "60px",
  // [theme.breakpoints.down("md")]: {
  //   paddingTop: "0px",
  //   paddingBottom: "0px",
  // },
}));

const HeaderContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "30px",
  display: "flex",
  flexDirection: "row",
  position: "relative",
}));

const LogoWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "100px",
}));

const HeaderLogoWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "30px",
}));

const BodyOneText = styled(Typography)(({ theme }) => ({
  textAlign: "left",
}));

const H4Text = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  marginTop: "42px",
  width: "100%",
}));

const H5Text = styled(Typography)(({ theme }) => ({
  textAlign: "center",
}));

const BodyTwoText = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  marginTop: "22px",
}));

const CustomInput = styled(TextField)(({ theme }) => ({
  background: "#FFFFFF",
  opacity: 0.25,
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "10px",
  marginTop: "12px",
}));

const CustomDropdownSelect = styled(TextField)(({ theme }) => ({
  minWidth: "300px",
  background: "#FFFFFF",
  opacity: 0.25,
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "10px",
  marginTop: "42px",
}));

const ButtonWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "0px",
  right: "0px",
}));

const CustomButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(0deg, #FFCD00, #FFCD00), #FFCD00",
  mixBlendMode: "normal",
  borderRadius: "10px",
  fontFamily: "Segoe UI",
  fontStyle: "normal",
  fontWeight: 700,
  textTransform: "capitalize",
  fontSize: "20px",
  lineHeight: "27px",
  color: "#FFFFFF",
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  marginTop: "34px",
}));
