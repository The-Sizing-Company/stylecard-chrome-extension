import { Button, styled } from "@mui/material";
import React from "react";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import KeyboardDoubleArrowUpOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowUpOutlined";
import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

interface CustomCTAButtonProps {
  onClick?: any;
  label: string;
  variant: "left" | "right" | "up" | "search" | "share";
}

function CustomCTAButton({ onClick, label, variant }: CustomCTAButtonProps) {
  return (
    <CustomButton
      fullWidth
      variant="contained"
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      {variant === "up" && <KeyboardDoubleArrowUpOutlinedIcon />}
      {variant === "right" && <KeyboardDoubleArrowRightOutlinedIcon />}
      {variant === "search" && <SearchOutlinedIcon />}
      {variant === "share" && <ShareOutlinedIcon />}

      <span>{label}</span>
      {variant === "left" && <KeyboardDoubleArrowLeftOutlinedIcon />}
      {variant === "up" && <KeyboardDoubleArrowUpOutlinedIcon />}
    </CustomButton>
  );
}

export default CustomCTAButton;

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
