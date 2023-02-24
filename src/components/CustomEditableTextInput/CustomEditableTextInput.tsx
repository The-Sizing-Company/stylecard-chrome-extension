import { Box, IconButton, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CustomTextInput from "../CustomTextInput/CustomTextInput";

interface CustomEditableTextInputProps {
  value: string;
  label: string;
  onChange: any;
}

function CustomEditableTextInput({
  value,
  label,
  onChange,
}: CustomEditableTextInputProps) {
  // this hook controls is the edit button is enabled or not
  const [editEnabled, setEditEnabled] = useState(false);

  return (
    <InputContainer>
      <InputLabel variant="body2">{label}</InputLabel>
      <TextFieldWrapper>
        {!editEnabled && (
          <>
            <IconButton onClick={() => setEditEnabled(true)}>
              <EditOutlinedIcon />
            </IconButton>
            <CurrentValue variant="h5">{value}</CurrentValue>
          </>
        )}
        {editEnabled && (
          <>
            <IconButton onClick={() => setEditEnabled(false)}>
              <CancelOutlinedIcon />
            </IconButton>
            <CustomTextInput type="text" onChange={onChange} value={value} label={label} />
          </>
        )}
      </TextFieldWrapper>
    </InputContainer>
  );
}

export default CustomEditableTextInput;

const InputContainer = styled(Box)(({ theme }) => ({
  minWidth: "145px",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const InputLabel = styled(Typography)(({ theme }) => ({
  width: "100%",
  textAlign: "center",
}));

const CurrentValue = styled(Typography)(({ theme }) => ({
  width: "100%",
  textAlign: "center",
}));

const TextFieldWrapper = styled(Box)(({ theme }) => ({
  minWidth: "145px",
  height: "auto",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
}));
