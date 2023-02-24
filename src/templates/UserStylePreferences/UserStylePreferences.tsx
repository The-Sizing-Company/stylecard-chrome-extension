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
import React, { useState } from "react";
import CustomEditableTextInput from "../../components/CustomEditableTextInput/CustomEditableTextInput";
import CustomSquareInput from "../../components/CustomSquareInput/CustomSquareInput";
import CustomCTAButton from "../../components/CustomCTAButton/CustomCTAButton";
import CustomRadioButton from "../../components/CustomRadioButton/CustomRadioButton";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const ClothingType = [
  {
    value: "men",
    label: "Men",
  },
  {
    value: "women",
    label: "Women",
  },
  {
    value: "both",
    label: "Both",
  },
];

interface UserGeneralInfoProps {
  setCurrentView: any;
}

function UserStylePreferences({ setCurrentView }: UserGeneralInfoProps) {
  // The following hooks represent each data field in the form
  const [name, setName] = useState("Seth");
  const [lastname, setLastname] = useState("Fairbairn");
  const [phone, setPhone] = useState("+1 833-333-4532");
  const [email, setEmail] = useState("SFairbairn@gmail.com");
  const [BDDay, setBDDay] = useState("12");
  const [BDMonth, setBDMonth] = useState("12");
  const [BDYear, setBDYear] = useState("12");
  return (
    <AppContainer>
      <HeaderContainer>
        <ButtonWrapperRight>
          <Tooltip title="Close">
            <IconButton>
              <HighlightOffIcon sx={{ color: "#000000" }} />
            </IconButton>
          </Tooltip>
        </ButtonWrapperRight>
        <ButtonWrapperLeft>
          <Tooltip title="Go Back">
            <IconButton>
              <ChevronLeftIcon sx={{ color: "#000000" }} />
            </IconButton>
          </Tooltip>
        </ButtonWrapperLeft>
      </HeaderContainer>
      <HeaderLogoWrapper>
        <img
          src="/image/stylecard-logo-horizontal.png"
          style={{ width: "224px", height: "50px" }}
        />
      </HeaderLogoWrapper>
      <TabWrapper>
        <TabButton
          sx={{
            background: "#ffffff !important",
            color: "#000000 !important",
            border: "1px solid #0000000 !important",
          }}
          variant="contained"
        >
          Men
        </TabButton>
        <TabButton
          sx={{
            background: "linear-gradient(0deg, #FFCD00, #FFCD00), #FFCD00",
          }}
          variant="contained"
        >
          Women
        </TabButton>
        <TabButton
          sx={{
            background: "#ffffff !important",
            color: "#000000 !important",
            border: "1px solid #0000000 !important",
          }}
          variant="contained"
        >
          Both
        </TabButton>
      </TabWrapper>
      <H4Text variant="h4">Find your best fit with Stylecard</H4Text>
      <BodyOneText variant="body1">
        Discover styles and brands perfect for{" "}
        <i>
          <strong>YOU</strong>
        </i>{" "}
        based on your preferences.
      </BodyOneText>
      <RadioButtonWrapper>
        <CustomRadioButton value={"t-shirts"} label={"T-Shirts"} />
        <CustomRadioButton value={"long-sleeves"} label={"Long-Sleeves"} />
        <CustomRadioButton value={"dresses"} label={"Dresses"} />
      </RadioButtonWrapper>
      <CustomCTAButton
        onClick={() => {
          setCurrentView(3);
        }}
        label={"Save Changes"}
        variant={"share"}
      />
    </AppContainer>
  );
}

export default UserStylePreferences;

const AppContainer = styled(Box)(({ theme }) => ({
  maxWidth: "390px",
  height: "600px",
  border: "1px solid #ececec",
  borderRadius: "8px 8px 8px 8px",
  background: "#ffffff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "28px 28px",
}));

const PageWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: "#ececec",
  paddingTop: "60px",
  paddingBottom: "60px",
  [theme.breakpoints.down("md")]: {
    paddingTop: "0px",
    paddingBottom: "0px",
  },
}));

const HeaderContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
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

const SingleInputWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "44px",
}));

const NamesWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "center",
}));

const BirthdayWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  alignItems: "center",
  justifyItems: "center",
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

const RadioButtonWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  marginTop: "27px",
  marginBottom: "22px",
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
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

const ButtonWrapperRight = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "0px",
  right: "0px",
}));

const ButtonWrapperLeft = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "0px",
  left: "0px",
}));

const LogomarkWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "0px",
  left: "0px",
}));

const TabWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "21px",
  marginTop: "26px",
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

const TabButton = styled(Button)(({ theme }) => ({
  width: "77px",
  height: "30px",
  mixBlendMode: "normal",
  borderRadius: "10px",
  fontFamily: "Segoe UI",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "21px",
  color: "#FFFFFF",
  textTransform: "none",
}));

const HeaderLogoWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "24px",
}));
