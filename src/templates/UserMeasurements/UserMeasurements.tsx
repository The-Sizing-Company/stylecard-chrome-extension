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
import React, { useState } from "react";
import CustomSquareInput from "../../components/CustomSquareInput/CustomSquareInput";
import CustomCTAButton from "../../components/CustomCTAButton/CustomCTAButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CustomRadioButton from "../../components/CustomRadioButton/CustomRadioButton";

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

function UserMeasurements({ setCurrentView }: UserGeneralInfoProps) {
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
            <IconButton onClick={() => setCurrentView(2)}>
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
      <H4Text variant="h4">What are your measurements?</H4Text>
      <BodyOneText variant="body1">
        We need a few key measurements from you to personalize your results.
        It’s best to be as accurate as possible!
      </BodyOneText>
      <RadioButtonWrapper>
        <CustomRadioButton value={"inches"} label={"Inches"} />
        <CustomRadioButton value={"meters"} label={"Meters"} />
      </RadioButtonWrapper>
      <MeasuresWrapper>
        <CustomSquareInput value={BDDay} label={"Day"} onChange={setBDDay} />
        <CustomSquareInput
          value={BDMonth}
          label={"Month"}
          onChange={setBDMonth}
        />
        <CustomSquareInput value={BDYear} label={"Year"} onChange={setBDYear} />
      </MeasuresWrapper>
      <SectionTitle variant="body2">Names</SectionTitle>
      <StatureWrapper>
        <CustomSquareInput
          value={BDMonth}
          label={"Month"}
          onChange={setBDMonth}
        />
        <CustomSquareInput value={BDYear} label={"Year"} onChange={setBDYear} />
      </StatureWrapper>
      <CustomCTAButton
        onClick={() => {
          setCurrentView(5);
        }}
        label={"Save Changes"}
        variant={"share"}
        style={{ marginTop: "30px" }}
      />
    </AppContainer>
  );
}

export default UserMeasurements;

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
  display: "flex",
  flexDirection: "row",
  position: "relative",
}));

const RadioButtonWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: "60px",
  marginTop: "27px",
}));

const MeasuresWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  alignItems: "center",
  justifyItems: "center",
  marginTop: "28px",
}));

const StatureWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "60px",
}));

const BodyOneText = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  marginTop: "3px",
}));

const H4Text = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  marginTop: "20px",
  width: "100%",
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  marginTop: "27px",
  marginBottom: "22px",
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

const HeaderLogoWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "24px",
}));
