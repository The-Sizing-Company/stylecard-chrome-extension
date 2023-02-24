import { styled, TextField } from "@mui/material";
import { type } from "os";
import React, { useState } from "react";

interface CustomTextInputProps {
  value: string;
  label: string;
  onChange?: any;
  type: string;
}

function CustomTextInput({
  value,
  label,
  onChange,
  type,
}: CustomTextInputProps) {
  const [currentValue, setCurrentValue] = useState(value);
  const [error, setError] = useState(false);
  function validatePhoneNumber(input: string) {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return re.test(input);
  }

  return (
    <>
      <CustomInput
        onChange={(e: any) => {
          setCurrentValue(e.target.value);
          if (type === "phone") {
            const res = validatePhoneNumber(e.target.value);
            if (onChange && typeof onChange !== "undefined" && res === true) {
              onChange(e.target.value);
              setError(false);
            } else {
              setError(true);
              onChange("");
            }
          }
          if (type === "text") {
            setError(false);
            onChange(e.target.value);
          }
        }}
        fullWidth
        required
        value={currentValue}
        label={label}
        type="text"
        error={error}
      />
    </>
  );
}

export default CustomTextInput;

const CustomInput = styled(TextField)(({ theme }) => ({
  background: "#FFFFFF",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "10px",
  marginTop: "12px",
  ".MuiInputBase-input": {
    color: "#000000",
  },
}));
