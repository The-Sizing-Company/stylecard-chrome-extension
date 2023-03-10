import {
  Box,
  IconButton,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import React, { useState } from "react";
import CustomEditableTextInput from "../../components/CustomEditableTextInput/CustomEditableTextInput";
import CustomSquareInput from "../../components/CustomSquareInput/CustomSquareInput";
import CustomCTAButton from "../../components/CustomCTAButton/CustomCTAButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

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

function UserGeneralInfo({ setCurrentView }: UserGeneralInfoProps) {
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
            <IconButton onClick={() => setCurrentView(3)}>
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
      <H4Text variant="h4">General Account Info</H4Text>
      <BodyOneText variant="body1">
        Helps us personalize your experience with Stylecard!
      </BodyOneText>
      <NamesWrapper>
        <CustomEditableTextInput
          value={name}
          label={"Name"}
          onChange={setName}
        />
        <CustomEditableTextInput
          value={lastname}
          label={"Lastname"}
          onChange={setLastname}
        />
      </NamesWrapper>
      <CustomDropdownSelect
        fullWidth
        select
        label="Clothing Type"
        defaultValue="Women"
        SelectProps={{
          native: true,
        }}
      >
        {ClothingType.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </CustomDropdownSelect>
      <NamesWrapper>
        <CustomEditableTextInput
          value={phone}
          label={"Phone Number"}
          onChange={setPhone}
        />
        <CustomEditableTextInput
          value={email}
          label={"Email"}
          onChange={setEmail}
        />
      </NamesWrapper>
      <SectionTitle variant="body2">Birthday</SectionTitle>
      <BirthdayWrapper>
        <CustomSquareInput value={BDDay} label={"Day"} onChange={setBDDay} />
        <CustomSquareInput
          value={BDMonth}
          label={"Month"}
          onChange={setBDMonth}
        />
        <CustomSquareInput value={BDYear} label={"Year"} onChange={setBDYear} />
      </BirthdayWrapper>
      <CustomCTAButton
        onClick={() => {
          setCurrentView(3);
        }}
        label={"Save Changes"}
        variant={"share"}
        style={{ marginTop: "20px" }}
      />
    </AppContainer>
  );
}

export default UserGeneralInfo;

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
  height: "30px",
  display: "flex",
  flexDirection: "row",
  position: "relative",
  marginBottom: "20px",
}));

const NamesWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "center",
  marginTop: "20px",
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
  marginTop: "20px",
  width: "100%",
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  marginTop: "27px",
  marginBottom: "22px",
}));

const CustomDropdownSelect = styled(TextField)(({ theme }) => ({
  minWidth: "300px",
  background: "#FFFFFF",
  opacity: 0.25,
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "10px",
  marginTop: "20px",
}));

const HeaderLogoWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
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
