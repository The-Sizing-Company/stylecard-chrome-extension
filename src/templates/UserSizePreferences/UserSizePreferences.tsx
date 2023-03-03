import {
  Box,
  Button,
  IconButton,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CustomCTAButton from "../../components/CustomCTAButton/CustomCTAButton";
import CustomRadioButton from "../../components/CustomRadioButton/CustomRadioButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CustomDropdownSelect from "../../components/CustomDropdownSelect/CustomDropdownSelect";

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

function UserSizePreferences({ setCurrentView }: UserGeneralInfoProps) {
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
            <IconButton onClick={() => setCurrentView(1)}>
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
      <ContentContainer>
        <PageTitle
          sx={{ marginTop: "17px", textAlign: "left !important" }}
          variant="h5"
        >
          What’s your favorite fit?
        </PageTitle>
        <Typography
          sx={{ textAlign: "left !important", marginTop: "10px" }}
          variant="body1"
        >
          Tell us how you like your styles to fit in each of these key areas to
          get your personalized search results.
        </Typography>
        <CustomDropdownSelect
          label={"T-Shirts, Long-Sleeves, Dresses"}
          options={["t-shirts", "skirts", "dresses"]}
          onClick={() => null}
          style={{ marginBottom: "10px" }}
        />
        <PageTitle sx={{ marginTop: "15px" }} variant="h5">
          T-Shirts
        </PageTitle>
        <ClothingImageWrapper>
          <ClothingImage src="/image/t-shirt-man.png" />
          <ClothingImage src="/image/t-shirt-woman.png" />
        </ClothingImageWrapper>
        <Typography sx={{ marginTop: "9px" }} variant="body1">
          Waist
        </Typography>
        <RadioButtonWrapper>
          <CustomRadioButton vertical value={"tightest"} label={"Tightest"} />
          <CustomRadioButton vertical value={"tighter"} label={"Tighter"} />
          <CustomRadioButton vertical value={"taylored"} label={"Taylored"} />
          <CustomRadioButton vertical value={"looser"} label={"Looser"} />
          <CustomRadioButton vertical value={"loosest"} label={"Loosest"} />
        </RadioButtonWrapper>
        <Typography
          sx={{
            textAlign: "left",
            fontStyle: "italic !important",
            fontFamily: "sans-serif !important",
            marginBottom: "20px",
          }}
        >
          Tailored means the clothing’s meansurement matches your body
          measurment.
        </Typography>
        <Typography variant="body1">Hip</Typography>
        <RadioButtonWrapper>
          <CustomRadioButton vertical value={"tightest"} label={"Tightest"} />
          <CustomRadioButton vertical value={"tighter"} label={"Tighter"} />
          <CustomRadioButton vertical value={"taylored"} label={"Taylored"} />
          <CustomRadioButton vertical value={"looser"} label={"Looser"} />
          <CustomRadioButton vertical value={"loosest"} label={"Loosest"} />
        </RadioButtonWrapper>
        <Typography
          sx={{
            textAlign: "left",
            fontStyle: "italic !important",
            fontFamily: "sans-serif !important",
            marginBottom: "20px",
          }}
        >
          Tailored means the clothing’s meansurement matches your body
          measurment.
        </Typography>
        <Typography variant="body1">Chest</Typography>
        <RadioButtonWrapper>
          <CustomRadioButton vertical value={"tightest"} label={"Tightest"} />
          <CustomRadioButton vertical value={"tighter"} label={"Tighter"} />
          <CustomRadioButton vertical value={"taylored"} label={"Taylored"} />
          <CustomRadioButton vertical value={"looser"} label={"Looser"} />
          <CustomRadioButton vertical value={"loosest"} label={"Loosest"} />
        </RadioButtonWrapper>
        <Typography
          sx={{
            textAlign: "left",
            fontStyle: "italic !important",
            fontFamily: "sans-serif !important",
            marginBottom: "20px",
          }}
        >
          Tailored means the clothing’s meansurement matches your body
          measurment.
        </Typography>
        <CustomCTAButton
          style={{ marginTop: "20px", marginBottom: "50px" }}
          label={"Save fit style Updates"}
          variant={"share"}
          onClick={() => setCurrentView(4)}
        />
      </ContentContainer>
    </AppContainer>
  );
}

export default UserSizePreferences;

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

const HeaderContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  position: "relative",
}));

const BodyOneText = styled(Typography)(({ theme }) => ({
  textAlign: "left",
}));

const H4Text = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  marginTop: "42px",
  width: "100%",
}));

const RadioButtonWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  marginTop: "27px",
  marginBottom: "22px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "20px",
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

const TabWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "21px",
  marginTop: "26px",
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

const PageTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "gilroy-bold",
  fontStyle: "normal",
  fontWeight: 800,
  fontSize: "24px",
  lineHeight: "29px",
  textAlign: "center",
  color: "#000000",
}));

const ClothingImageWrapper = styled(Box)(({ theme }) => ({
  width: "auto",
  height: "auto",
  position: "relative",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "15px",
  marginTop: "6px",
}));

const ClothingImage = styled("img")(({ theme }) => ({
  width: "86px",
  height: "105px",
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  width: "94%",
  height: "510px",
  maxHeight: "510px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflowY: "scroll",
  marginTop: "20px",
  paddingLeft: "40px",
  paddingRight: "40px",
}));
