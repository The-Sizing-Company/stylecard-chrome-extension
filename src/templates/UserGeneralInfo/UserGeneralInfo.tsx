import {
  Box,
  Button,
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
        <ButtonWrapper>
          <Tooltip title="Help">
            <Button variant="text">
              <Typography variant="h5">Help</Typography>
            </Button>
          </Tooltip>
        </ButtonWrapper>
        <LogomarkWrapper>
          <img
            src="/image/stylecard-logomark.png"
            style={{ width: "34px", height: "60px" }}
          />
        </LogomarkWrapper>
      </HeaderContainer>
      <H4Text variant="h4">General Account Info</H4Text>
      <BodyOneText variant="body1">
        This helps personalize your experience, keep your account secure, and
        stay up to date with Stylecard news, rewards, and surprises!
      </BodyOneText>
      <SectionTitle variant="body2">Names</SectionTitle>
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
      <SingleInputWrapper>
        <CustomEditableTextInput
          value={phone}
          label={"Phone Number"}
          onChange={setPhone}
        />
      </SingleInputWrapper>
      <SingleInputWrapper>
        <CustomEditableTextInput
          value={email}
          label={"Email"}
          onChange={setEmail}
        />
      </SingleInputWrapper>
      <SectionTitle variant="body2">Names</SectionTitle>
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
      />
      <LogoWrapper>
        <img
          style={{ width: "119px", height: "190px" }}
          src="/image/stylecard-logo-vertical.png"
        />
      </LogoWrapper>
    </AppContainer>
  );
}

export default UserGeneralInfo;

const AppContainer = styled(Box)(({ theme }) => ({
  maxWidth: "390px",
  height: "auto",
  border: "1px solid #ececec",
  borderRadius: "8px 8px 8px 8px",
  background: "#ffffff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "40px 40px",
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
  height: "30px",
  display: "flex",
  flexDirection: "row",
  position: "relative",
  marginBottom: "20px",
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

const SectionTitle = styled(Typography)(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  marginTop: "27px",
  marginBottom: "22px",
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

const LogomarkWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "0px",
  left: "0px",
}));
