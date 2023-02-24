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
          style={{ width: "224px", height: "50px" }}
        />
      </HeaderLogoWrapper>
      <H5Text variant="h5">Login</H5Text>
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
      <CustomButton
        sx={{ marginTop: "44px" }}
        fullWidth
        variant="contained"
        onClick={() => setCurrentView(2)}
      >
        <span>Sign In</span>
        <DoubleArrowIcon />{" "}
      </CustomButton>
      <H4Text sx={{ marginTop: "60px" }} variant="h4">
        Need to create an account instead?
      </H4Text>
      <CustomButton sx={{ marginTop: "19px" }} fullWidth variant="contained">
        <span>Sign Up</span>
        <DoubleArrowIcon />{" "}
      </CustomButton>
    </AppContainer>
  );
}

export default UserLoginSignUp;

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
  marginTop: "24px",
}));

const BodyOneText = styled(Typography)(({ theme }) => ({
  textAlign: "left",
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
  marginTop: "18px",
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
  minHeight:'48px',
}));
