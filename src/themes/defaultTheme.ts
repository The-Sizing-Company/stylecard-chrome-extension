import { createTheme } from "@mui/material/styles";
import createBreakpoints from "@mui/system/createTheme/createBreakpoints";

const breakpoints = createBreakpoints({});
const [xs, sm, md, lg] = breakpoints.keys;

export const FONT_FAMILIES = {
  REG: "Segoe UI, sans-serif",
  SUPER: "Segoe UI, sans-serif",
};

const defaultTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 1280,
      xl: 1536,
    },
  },
  //   shape: {
  //     borderRadius: 8,
  //   },
  //   components: {
  //     MuiButton: {
  //       styleOverrides: {
  //         contained: {
  //           height: "50px",
  //           fontFamily: FONT_FAMILIES.REG,
  //           fontWeight: "normal",
  //           fontSize: 16,
  //           textTransform: "none",
  //           letterSpacing: 0,
  //           borderRadius: 8,
  //           minWidth: 50,
  //           boxShadow: "none",
  //         },
  //         textPrimary: {
  //           fontSize: 16,
  //           fontFamily: FONT_FAMILIES.REG,
  //           fontWeight: "normal",
  //           textTransform: "none",
  //           letterSpacing: 0,
  //         },
  //         outlined: {
  //           minWidth: "0px",
  //         },
  //       },
  //     },
  //     MuiTab: {
  //       styleOverrides: {
  //         textColorPrimary: {
  //           fontSize: 16,
  //           fontFamily: FONT_FAMILIES.REG,
  //           padding: "4px 0px",
  //           minHeight: "unset",
  //           minWidth: "unset",
  //           textTransform: "none",
  //           marginRight: 20,
  //           "&.Mui-selected": {
  //             color: "#0826A1",
  //           },
  //           "&:hover": {
  //             color: "#0826A1",
  //           },
  //           ".MuiTouchRipple-root": {
  //             display: "none",
  //           },
  //         },
  //       },
  //     },
  //     MuiTabs: {
  //       styleOverrides: {
  //         root: {
  //           minHeight: 30,
  //         },
  //         indicator: {
  //           backgroundColor: "#0826A1",
  //         },
  //       },
  //     },
  //     MuiSwitch: {
  //       styleOverrides: {
  //         root: {
  //           marginRight: "20px !important",
  //           width: 60,
  //           height: 34,
  //           padding: 0,
  //           "& .MuiSwitch-switchBase": {
  //             padding: 0,
  //             margin: 4,
  //             transitionDuration: "300ms",
  //             "&.Mui-checked": {
  //               color: "#fff",
  //               transform: "translateX(26px)",
  //               "& + .MuiSwitch-track": {
  //                 backgroundColor: "#0826A1",
  //                 opacity: 1,
  //                 border: 0,
  //               },
  //               "&.Mui-disabled + .MuiSwitch-track": {
  //                 opacity: 0.5,
  //               },
  //             },
  //             "&.Mui-focusVisible .MuiSwitch-thumb": {
  //               color: "#0826A1",
  //               border: "6px solid #fff",
  //             },
  //             "&.Mui-disabled + .MuiSwitch-track": {
  //               opacity: 0.7,
  //             },
  //           },
  //           "& .MuiSwitch-thumb": {
  //             boxSizing: "border-box",
  //             width: 26,
  //             height: 26,
  //           },
  //           "& .MuiSwitch-track": {
  //             borderRadius: "100px",
  //             backgroundColor: "#CBCBCB",
  //             opacity: 1,
  //           },
  //         },
  //       },
  //     },
  //     MuiRadio: {
  //       styleOverrides: {
  //         root: {
  //           "&.Mui-checked": {
  //             color: "#0D2EB5",
  //           },
  //         },
  //       },
  //     },
  //     MuiOutlinedInput: {
  //       styleOverrides: {
  //         root: {
  //           ".MuiOutlinedInput-input": {
  //             border: "1px solid #0D2EB5",
  //             overflow: "hidden",
  //             borderRadius: 8,
  //             backgroundColor: "transparent",
  //             transition: "border-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  //             "&[aria-expanded='true']": {
  //               borderRadius: "8px 8px 0 0",
  //             },
  //           },
  //           "&:hover": {},
  //           ".MuiOutlinedInput-notchedOutline": {
  //             border: "none !important",
  //           },
  //         },
  //       },
  //     },
  //     MuiSelect: {
  //       styleOverrides: {
  //         filled: {
  //           border: "1px solid #0D2EB5",
  //           overflow: "hidden",
  //           borderRadius: 8,
  //           backgroundColor: "transparent",
  //           transition: "border-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  //           "&[aria-expanded='true']": {
  //             borderRadius: "8px 8px 0 0",
  //           },
  //         },
  //         outlined: {
  //           height: 50,
  //           minHeight: "unset",
  //           paddingTop: 0,
  //           paddingBottom: 0,
  //           display: "flex",
  //           alignItems: "center",
  //           "&.Mui-focused": {
  //             borderRadius: 8,
  //           },
  //         },
  //       },
  //     },
  //     MuiAutocomplete: {
  //       styleOverrides: {
  //         inputRoot: {
  //           backgroundColor: "#ffffff",
  //         },
  //       },
  //     },
  //     MuiFilledInput: {
  //       styleOverrides: {
  //         root: {
  //           border: "1px solid #e2e2e1",
  //           overflow: "hidden",
  //           borderRadius: 8,
  //           backgroundColor: "transparent",
  //           transition: "border-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  //           "&[class*='MuiSelect']": {
  //             border: "none",
  //           },
  //           "&:before": {
  //             display: "none",
  //           },
  //           "&.Mui-error": {
  //             border: "1px solid #FF2626",
  //             "&:after": {
  //               display: "none",
  //             },
  //           },
  //           "&:after": {
  //             display: "none",
  //           },
  //           ".MuiFormHelperText-root": {
  //             marginLeft: 0,
  //           },
  //         },
  //       },
  //     },
  //     MuiPaper: {
  //       styleOverrides: {
  //         root: {
  //           "&.MuiPopover-paper": {
  //             outline: "solid 1px #0D2EB5",
  //             borderRadius: "0 0 8px 8px",
  //             boxShadow: "none",
  //           },
  //         },
  //       },
  //     },
  //     MuiInputLabel: {
  //       styleOverrides: {
  //         root: {
  //           fontSize: 16,
  //           top: "4px",
  //         },
  //       },
  //     },
  //     MuiFormLabel: {
  //       styleOverrides: {
  //         root: {
  //           "&.Mui-focused, &.MuiInputLabel-shrink": {
  //             color: "#61696B",
  //             fontSize: 15,
  //             top: 4,
  //           },
  //         },
  //       },
  //     },
  //     MuiChip: {
  //       styleOverrides: {
  //         root: {
  //           height: 24,
  //         },
  //       },
  //     },
  //     MuiCheckbox: {
  //       styleOverrides: {
  //         root: {
  //           "&.Mui-checked": {
  //             color: "#0D2EB5",
  //           },
  //         },
  //       },
  //     },
  //     MuiPagination: {
  //       styleOverrides: {
  //         ul: {
  //           "li:first-of-type": {
  //             ".MuiPaginationItem-root": {
  //               marginRight: 20,
  //             },
  //           },
  //           "li:last-of-type": {
  //             ".MuiPaginationItem-root": {
  //               marginLeft: 20,
  //             },
  //           },
  //         },
  //       },
  //     },
  //     MuiPaginationItem: {
  //       styleOverrides: {
  //         root: {
  //           padding: 0,
  //           minWidth: 17,
  //           height: 20,
  //           "&:hover": {
  //             backgroundColor: "transparent",
  //             color: "#0D2EB5",
  //           },
  //           "&.Mui-selected": {
  //             color: "#0D2EB5",
  //             backgroundColor: "transparent",
  //           },
  //           "&.Mui-selected:hover": {
  //             backgroundColor: "transparent",
  //           },
  //           "&.Mui-selected::after": {
  //             position: "absolute",
  //             content: '""',
  //             borderBottom: "solid 2px #0D2EB5",
  //             width: "10px",
  //             bottom: 0,
  //           },
  //           ".MuiTouchRipple-root": {
  //             display: "none",
  //           },
  //         },
  //         previousNext: {
  //           backgroundColor: "#0D2EB5",
  //           height: 30,
  //           width: 30,
  //           color: "#ffffff",
  //           "&:hover": {
  //             backgroundColor: "#0D2EB5",
  //             color: "#ffffff",
  //           },
  //           "&.Mui-disabled": {
  //             backgroundColor: "#E5E5E5",
  //             color: "#5F5D5D",
  //           },
  //           "&.Mui-disabled:hover": {
  //             backgroundColor: "#E5E5E5",
  //             color: "#5F5D5D",
  //           },
  //         },
  //       },
  //     },
  //     MuiContainer: {
  //       styleOverrides: {
  //         root: {
  //           [breakpoints.up(xs)]: {
  //             maxWidth: 1190,
  //             paddingLeft: 20,
  //             paddingRight: 20,
  //           },
  //         },
  //       },
  //     },
  //     MuiDialog: {
  //       styleOverrides: {
  //         root: {
  //           ".MuiPaper-root": {
  //             width: "100%",
  //             maxWidth: 550,
  //             margin: 20,
  //           },
  //         },
  //       },
  //     },
  //     MuiToolbar: {
  //       styleOverrides: {
  //         root: {
  //           paddingLeft: 0,
  //           paddingRight: 0,
  //         },
  //       },
  //     },
  //   },
});

// defaultTheme.typography.h1 = {
//   fontFamily: `${FONT_FAMILIES.SUPER}`,
//   fontWeight: 900,
//   [defaultTheme.breakpoints.up("md")]: {
//     fontSize: "64px",
//     lineHeight: "74px",
//   },
//   [defaultTheme.breakpoints.down("md")]: {
//     fontSize: "36px",
//     lineHeight: "46px",
//   },
// };
// defaultTheme.typography.h2 = {
//   fontFamily: `${FONT_FAMILIES.SUPER}`,
//   fontWeight: 900,
//   [defaultTheme.breakpoints.up("md")]: {
//     fontSize: "48px",
//     lineHeight: "58px",
//     letterSpacing: "-0.5px",
//   },
//   [defaultTheme.breakpoints.down("md")]: {
//     fontSize: "32px",
//     lineHeight: "40px",
//   },
// };
// defaultTheme.typography.h3 = {
//   fontFamily: `${FONT_FAMILIES.SUPER}`,
//   fontWeight: 900,
//   [defaultTheme.breakpoints.up("md")]: {
//     fontSize: "36px",
//     lineHeight: "46px",
//     letterSpacing: "-0.5px",
//   },
//   [defaultTheme.breakpoints.down("md")]: {
//     fontSize: "26px",
//     lineHeight: "34px",
//     letterSpacing: "-0.3px",
//   },
// };
defaultTheme.typography.h4 = {
  fontFamily: `${FONT_FAMILIES.SUPER}`,
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: "27px",
  color: "#000000",
};
defaultTheme.typography.h5 = {
  fontFamily: `${FONT_FAMILIES.REG}`,
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "21px",
  color: "#000000",
  textTransform: "none",
};
/* 16px */
defaultTheme.typography.body1 = {
  fontFamily: `${FONT_FAMILIES.REG}`,
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "21px",
  color: "#000000",
  opacity: 0.75,
};
/* 14px */
defaultTheme.typography.body2 = {
  fontFamily: `${FONT_FAMILIES.REG}`,
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "16px",
  color: "#000000",
  opacity: "0.75",
};
// defaultTheme.typography.overline = {
//   fontFamily: `${FONT_FAMILIES.REG}`,
//   fontWeight: 700,
//   fontSize: "10px",
//   lineHeight: "14px",
// };
// defaultTheme.typography.button = {
//   fontFamily: `${FONT_FAMILIES.REG}`,
//   fontWeight: 500,
//   fontSize: "16px",
//   lineHeight: "24px",
//   textTransform: "unset",
// };

export { defaultTheme };
