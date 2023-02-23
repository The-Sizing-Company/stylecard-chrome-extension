import { styled, TextField } from "@mui/material";
import React from "react";

interface CustomTextInputProps {
  value: string;
  label: string;
  onChange?: any;
}

function CustomTextInput({ value, label, onChange }: CustomTextInputProps) {
  return (
    <>
      <CustomInput
        onChange={(e: any) => {
          if (onChange && typeof onChange !== "undefined") {
            onChange(e.target.value);
          }
        }}
        fullWidth
        required
        value={value}
        label={label}
      />
    </>
  );
}

export default CustomTextInput;

const CustomInput = styled(TextField)(({ theme }) => ({
  background: "#FFFFFF",
  opacity: 0.25,
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "10px",
  marginTop: "12px",
}));
