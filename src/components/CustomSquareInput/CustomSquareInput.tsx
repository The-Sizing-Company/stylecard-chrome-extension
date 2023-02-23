import { Box, styled, Typography } from "@mui/material";
import React from "react";

interface CustomSquareInputProps {
  value: string;
  label: string;
  onChange?: any;
}

function CustomSquareInput({ value, label, onChange }: CustomSquareInputProps) {
  return (
    <FieldWrapper>
      <FieldLabel variant="body2">{label}</FieldLabel>
      <FieldInput
        type="text"
        value={value}
        onChange={(e: any) => {
          onChange(e.target.value);
        }}
      />
    </FieldWrapper>
  );
}

export default CustomSquareInput;

const FieldWrapper = styled(Box)(({ theme }) => ({
  width: "70px",
  height: "70px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  background: "#FFFFFF",
  border: "1px solid rgba(0,0,0,0.25)",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "10px",
}));

const FieldLabel = styled(Typography)(({ theme }) => ({}));

const FieldInput = styled("input")(({ theme }) => ({
  fontFamily: "Segoe UI",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "26px",
  lineHeight: "35px",
  textAlign: "center",
  color: "#000000",
  border: "none",
  outline: "none",
  "&:hover": {
    border: "none",
  },
  "&:active": {
    border: "none",
  },
  "&:focus": {
    border: "none",
  },
}));
