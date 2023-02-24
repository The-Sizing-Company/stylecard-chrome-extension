import { styled, TextField } from "@mui/material";
import React from "react";

interface customDropdownSelectProps {
  label: string;
  options: any[];
  onClick: any;
}

function CustomDropdownSelect({
  label,
  options,
  onClick,
}: customDropdownSelectProps) {
  const [value, setValue] = React.useState("");
  const handleChange = (event: any) => {
    setValue(event.target.value as string);
    onClick(event.target.value as string);
  };
  return (
    <CustomDropdown
      fullWidth
      select
      label={label}
      onChange={handleChange}
      SelectProps={{
        native: true,
      }}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </CustomDropdown>
  );
}

export default CustomDropdownSelect;

const CustomDropdown = styled(TextField)(({ theme }) => ({
  minWidth: "300px",
  background: "#FFFFFF",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "10px",
  marginTop: "18px",
  color: "#000000 !import",
  ".MuiNativeSelect-select": {
    color: "#000000 !import",
  },
  ".MuiInputBase-input": {
    color: "#000000",
  },
}));
