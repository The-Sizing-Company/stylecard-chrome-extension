import { Box, Radio, styled, Typography } from "@mui/material";
import React from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

interface CustomRadioButtonProps {
  value: string;
  label: string;
  onChange?: any;
  vertical?: boolean;
  isChecked?: boolean;
}

function CustomRadioButton({
  value,
  label,
  onChange,
  vertical,
  isChecked,
}: CustomRadioButtonProps) {
  return (
    <InputWrapper sx={{ flexDirection: vertical ? "column" : "row" }}>
      <RadioButton
        checked={isChecked}
        onChange={(e: any) => {
          onChange(e.target.value);
        }}
        value={value}
        checkedIcon={<TaskAltIcon />}
      />
      <InputLabel variant="h5">{label}</InputLabel>
    </InputWrapper>
  );
}

export default CustomRadioButton;

const InputWrapper = styled(Box)(({ theme }) => ({
  width: "auto",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "9px",
  color: "#000000",
}));

const InputLabel = styled(Typography)(({ theme }) => ({
  width: "100%",
  display: "flex",
  textTransform: "capitalize",
}));

const RadioButton = styled(Radio)(({ theme }) => ({
  width: "30px",
  display: "flex",
}));
