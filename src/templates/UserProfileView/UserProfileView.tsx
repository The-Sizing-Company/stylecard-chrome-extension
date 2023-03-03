import {
  Box,
  Button,
  IconButton,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CustomDropdownSelect from "../../components/CustomDropdownSelect/CustomDropdownSelect";
import FooterSearchIcon from "../../components/Icons/FooterSearchIcon";
import FooterHeartIcon from "../../components/Icons/FooterHeartIcon";
import FooterStylecardLogo from "../../components/Icons/FooterStylecardLogo";
import CustomRadioButton from "../../components/CustomRadioButton/CustomRadioButton";
import CustomCTAButton from "../../components/CustomCTAButton/CustomCTAButton";
import CustomSquareInput from "../../components/CustomSquareInput/CustomSquareInput";
import CustomEditableTextInput from "../../components/CustomEditableTextInput/CustomEditableTextInput";

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

function UserProfileView({ setCurrentView }: { setCurrentView: any }) {
  // The following hooks represent each data field in the form
  const [name, setName] = useState("Seth");
  const [lastname, setLastname] = useState("Fairbairn");
  const [phone, setPhone] = useState("+1 833-333-4532");
  const [email, setEmail] = useState("SFairbairn@gmail.com");
  const [BDDay, setBDDay] = useState("12");
  const [BDMonth, setBDMonth] = useState("12");
  const [BDYear, setBDYear] = useState("12");
  return (
    <>
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
            <img
              style={{ width: "151px", height: "33px" }}
              src="/image/stylecard-logo-horizontal.png"
            />
          </ButtonWrapperLeft>
        </HeaderContainer>
        <ContentContainer>
          <PageTitle sx={{ marginTop: "17px" }} variant="h4">
            Your Profile
          </PageTitle>
          <PageTitle sx={{ marginTop: "17px" }} variant="h5">
            Fit Style Preferences
          </PageTitle>
          <Typography
            sx={{ textAlign: "left !important", marginTop: "10px" }}
            variant="body1"
          >
            Tell us how you like your styles to fit in each of these key areas
            to help improve your personalized search results.
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
            style={{ marginTop: "20px" }}
            label={"Save fit style Updates"}
            variant={"share"}
          />
          <PageTitle sx={{ marginTop: "38px" }} variant="h4">
            Your Measurements
          </PageTitle>
          <Typography
            sx={{ textAlign: "left", marginTop: "10px" }}
            variant="body1"
          >
            If anything’s changed, please update here so your personalized
            search results remain accurate!
          </Typography>
          <RadioButtonWrapper>
            <CustomRadioButton value={"inches"} label={"Inches"} />
            <CustomRadioButton value={"meters"} label={"Meters"} />
          </RadioButtonWrapper>
          <MeasuresWrapper>
            <CustomSquareInput
              value={BDDay}
              label={"Day"}
              onChange={setBDDay}
            />
            <CustomSquareInput
              value={BDMonth}
              label={"Month"}
              onChange={setBDMonth}
            />
            <CustomSquareInput
              value={BDYear}
              label={"Year"}
              onChange={setBDYear}
            />
          </MeasuresWrapper>
          <Typography
            sx={{ marginTop: "34px", marginBottom: "13px" }}
            variant="body2"
          >
            Names
          </Typography>
          <StatureWrapper>
            <CustomSquareInput
              value={BDMonth}
              label={"Month"}
              onChange={setBDMonth}
            />
            <CustomSquareInput
              value={BDYear}
              label={"Year"}
              onChange={setBDYear}
            />
          </StatureWrapper>
          <CustomCTAButton
            onClick={() => {
              setCurrentView(4);
            }}
            label={"Save Changes"}
            variant={"share"}
            style={{ marginTop: "20px" }}
          />
          <PageTitle sx={{ marginTop: "22px" }} variant="h4">
            General Account Info
          </PageTitle>
          <Typography
            sx={{ marginTop: "10px", textAlign: "left" }}
            variant="body1"
          >
            This helps personalize your experience, keep your account secure,
            and stay up to date with Stylecard news, rewards, and surprises!
          </Typography>
          <Typography
            variant="body2"
            sx={{
              marginTop: "39px",
              textAlign: "center",
            }}
          >
            Clothing Type
          </Typography>
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
          <InfoWrapper>
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
          </InfoWrapper>
          <Typography
            sx={{ marginTop: "40px", marginBottom: "20px" }}
            variant="body2"
          >
            Birthday
          </Typography>
          <BirthdayWrapper>
            <CustomSquareInput
              value={BDDay}
              label={"Day"}
              onChange={setBDDay}
            />
            <CustomSquareInput
              value={BDMonth}
              label={"Month"}
              onChange={setBDMonth}
            />
            <CustomSquareInput
              value={BDYear}
              label={"Year"}
              onChange={setBDYear}
            />
          </BirthdayWrapper>
          <CustomCTAButton
            onClick={() => {
              setCurrentView(3);
            }}
            label={"Save Changes"}
            variant={"share"}
            style={{ marginTop: "60px" }}
          />
          <LogoWrapper src="/image/stylecard-logo-horizontal.png" />
          <Button
            onClick={() => setCurrentView(8)}
            sx={{ marginBottom: "30px" }}
            variant="text"
          >
            <Typography variant="h5">Help</Typography>
          </Button>
        </ContentContainer>
        <Footer>
          <FooterButton onClick={() => setCurrentView(5)}>
            <FooterSearchIcon />
            <FooterButtonLabel>Discover</FooterButtonLabel>
          </FooterButton>
          <FooterButton onClick={() => setCurrentView(6)}>
            <FooterHeartIcon />
            <FooterButtonLabel>Wishlist</FooterButtonLabel>
          </FooterButton>
          <FooterButton onClick={() => setCurrentView(7)}>
            <FooterStylecardLogo></FooterStylecardLogo>
            <FooterButtonLabel>Profile</FooterButtonLabel>
          </FooterButton>
        </Footer>
      </AppContainer>
    </>
  );
}

export default UserProfileView;

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
  position: "relative",
}));

const Footer = styled(Box)(({ theme }) => ({
  width: "400px",
  position: "absolute",
  bottom: "0px",
  height: "73px",
  background: "linear-gradient(0deg, #FFCD00, #FFCD00), #FFCD00",
  mixBlendMode: "normal",
  borderRadius: "0px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  paddingLeft: "25px",
  paddingRight: "25px",
}));

const HeaderContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  position: "relative",
}));

const FooterButton = styled(Button)(({ theme }) => ({
  width: "auto",
  height: "auto",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "none !important",
  border: "none !important",
}));

const FooterButtonLabel = styled(Box)(({ theme }) => ({
  fontFamily: "gilroy-bold",
  fontStyle: "normal",
  fontWeight: 800,
  fontSize: "15px",
  lineHeight: "18px",
  textAlign: "center",
  color: "#FFFFFF",
  textTransform: "capitalize",
}));

const CustomIconImage = styled("img")(({ theme }) => ({
  position: "relative",
  width: "30px",
  height: "30px",
}));

const CustomButton = styled(Button)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  borderRadius: "8px",
  border: "none !important",
  background: "none  !important",
  cursor: "pointer",
  marginTop: "10px",
}));

const ProductName = styled(Typography)(({ theme }) => ({
  fontFamily: "gilroy-bold",
  fontStyle: "normal",
  fontWeight: 800,
  fontSize: "16px",
  lineHeight: "20px",
  color: "#000000",
  textAlign: "left",
  paddingRight: "30px",
  marginTop: "25px",
}));

const ProductImage = styled("img")(({ theme }) => ({
  borderRadius: "15px",
  maxWidth: "212px",
  maxHeight: "257px",
}));

const ProductPrice = styled(Typography)(({ theme }) => ({
  fontFamily: "gilroy-bold",
  fontStyle: "normal",
  fontWeight: 800,
  marginTop: "5px",
  fontSize: "16px",
  lineHeight: "20px",
  display: "flex",
  //alignItems: "center",
  textAlign: "left",
  color: "#000000",
  opacity: 0.75,
  paddingLeft: "0px",
  marginBottom: "30px",
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

const ProductControls = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
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

const ProductDetails = styled(Typography)(({ theme }) => ({
  maxWidth: "212px",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "12px",
  marginTop: "5px",
  lineHeight: "16px",
  color: "#000000",
  opacity: 0.75,
  paddingLeft: "30px",
  textAlign: "left",
}));

const ProductRankingWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "29px",
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

const Size = styled(Typography)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "gilroy-bold",
  fontStyle: "normal",
  fontWeight: 800,
  fontSize: "16px",
  lineHeight: "20px",
  textAlign: "center",
  color: "#000000",
  opacity: 0.75,
  paddingLeft: "0px",
}));

const Score = styled(Typography)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "gilroy-bold",
  fontStyle: "normal",
  fontWeight: 800,
  fontSize: "26px",
  lineHeight: "32px",
  textAlign: "center",
  color: "#000000",
  opacity: 0.75,
}));

const RankingLabel = styled(Typography)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
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

const RadioButtonWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
  marginBottom: "5px",
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  width: "94%",
  height: "510px",
  maxHeight: "510px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflowY: "scroll",
  marginTop: "45px",
  paddingLeft: "40px",
  paddingRight: "40px",
}));

const ProductCard = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  alignItems: "center",
}));

const ProductCardWrapper = styled(Box)(({ theme }) => ({
  width: "115%",
  maxHeight: "384px",
  height: "384px",
  display: "flex",
  flexDirection: "column",
  overflowY: "scroll",
  alignItems: "center",
}));

const StatureWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "60px",
  marginBottom: "34px",
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

const NamesWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "center",
  marginTop: "50px",
}));

const LogoWrapper = styled("img")(({ theme }) => ({
  width: "305px",
  height: "68px",
  display: "flex",
  flexDirection: "column",
  margin: "auto",
  alignItems: "center",
  paddingTop: "80px",
  paddingBottom: "50px",
}));

const InfoWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "20px",
  gap: "16px",
}));

const BirthdayWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  alignItems: "center",
  justifyItems: "center",
}));

const TabWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "21px",
  marginTop: "13px",
}));
