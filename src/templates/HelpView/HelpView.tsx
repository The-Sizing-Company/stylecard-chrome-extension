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
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";

interface UserSignInProps {
  setCurrentView: any;
}

function HelpView({ setCurrentView }: UserSignInProps) {
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
      <H5Text variant="h5">Help</H5Text>
      <Typography variant="h4">Need help with your Stylecard?</Typography>
      <PhoneInTalkOutlinedIcon
        sx={{
          width: "40px",
          height: "40px",
          marginTop: "5px",
          color: "#000000",
        }}
      />
      <H4Text sx={{ marginTop: "26px" }} variant="h4">
        Call us at{" "}
        <strong style={{ fontFamily: "gilroy-bold", fontWeight: 700 }}>
          610-751-5099
        </strong>{" "}
        so we can help get you back to finding the styles and brands perfect for
        YOU. <br />
        <br /> Thanks for your patience!
      </H4Text>
      <CustomCTAButton
        style={{ marginTop: "30px" }}
        onClick={() => {
          setCurrentView(5);
        }}
        label={"Back"}
        variant={"left"}
      />
      <img
        src="/image/doodle.png"
        style={{
          width: "228px",
          height: "181px",
          margin: "auto",
          paddingTop: "12px",
          paddingBottom: "12px",
        }}
      />
    </AppContainer>
  );
}

export default HelpView;

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
  textAlign: "left",
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
