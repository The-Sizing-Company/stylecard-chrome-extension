import {
  Box,
  Button,
  IconButton,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CustomDropdownSelect from "../../components/CustomDropdownSelect/CustomDropdownSelect";
import FooterSearchIcon from "../../components/Icons/FooterSearchIcon";
import FooterHeartIcon from "../../components/Icons/FooterHeartIcon";
import FooterStylecardLogo from "../../components/Icons/FooterStylecardLogo";

function WishlistView({ setCurrentView }: { setCurrentView: any }) {
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
          <img
            style={{ width: "151px", height: "33px" }}
            src="/image/stylecard-logo-horizontal.png"
          />
          <ButtonWrapperLeft>
            <img
              src="/image/send.png"
              style={{ width: "25px", height: "25px" }}
            />
            <Typography variant="h5">Share All</Typography>
          </ButtonWrapperLeft>
        </HeaderContainer>
        <PageTitle variant="h5">Your Wishlist</PageTitle>
        <CustomDropdownSelect
          label={"T-Shirts, Long-Sleeves, Dresses"}
          options={["t-shirts", "skirts", "dresses"]}
          onClick={() => null}
          style={{ marginBottom: "10px" }}
        />
        <ProductCardWrapper>
          <ProductCard>
            <ProductDescription>
              <ProductName>TET Responsible Wear</ProductName>
              <ProductImage src="/image/sample-wear.png"></ProductImage>
              <ProductDetails>
                Dri-FIT One Lux Women’s Slim Fit Short-Sleeve Top
              </ProductDetails>
              <ProductPrice>$258.99</ProductPrice>
            </ProductDescription>
            <ProductControls>
              <ProductRankingWrapper>
                <Size variant="h4">XXL</Size>
                <Score variant="h5">98%</Score>
                <RankingLabel variant="h5">Fit Rating</RankingLabel>
              </ProductRankingWrapper>
              <CustomButton>
                <CustomIconImage src="/image/heart.png" />
                <RankingLabel variant="h5">Add to Wishlist</RankingLabel>
              </CustomButton>
              <CustomButton>
                <CustomIconImage src="/image/send.png" />
                <RankingLabel variant="h5">Share this Style</RankingLabel>
              </CustomButton>
              <CustomButton>
                <CustomIconImage src="/image/shopping-cart.png" />
                <RankingLabel variant="h5">Add to Cart</RankingLabel>
              </CustomButton>
            </ProductControls>
          </ProductCard>
          <ProductCard>
            <ProductDescription>
              <ProductName>TET Responsible Wear</ProductName>
              <ProductImage src="/image/sample-wear.png"></ProductImage>
              <ProductDetails>
                Dri-FIT One Lux Women’s Slim Fit Short-Sleeve Top
              </ProductDetails>
              <ProductPrice>$258.99</ProductPrice>
            </ProductDescription>
            <ProductControls>
              <ProductRankingWrapper>
                <Size variant="h4">XXL</Size>
                <Score variant="h5">98%</Score>
                <RankingLabel variant="h5">Fit Rating</RankingLabel>
              </ProductRankingWrapper>
              <CustomButton>
                <CustomIconImage src="/image/heart.png" />
                <RankingLabel variant="h5">Add to Wishlist</RankingLabel>
              </CustomButton>
              <CustomButton>
                <CustomIconImage src="/image/send.png" />
                <RankingLabel variant="h5">Share this Style</RankingLabel>
              </CustomButton>
              <CustomButton>
                <CustomIconImage src="/image/shopping-cart.png" />
                <RankingLabel variant="h5">Add to Cart</RankingLabel>
              </CustomButton>
            </ProductControls>
          </ProductCard>
        </ProductCardWrapper>

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

export default WishlistView;

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

const ProductDescription = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
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
  marginTop: "15px",
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
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
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

const HeaderLogoWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "24px",
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
