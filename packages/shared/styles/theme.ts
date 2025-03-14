type BreakpointSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const theme = {
  colors: {
    primary: {
      500: "#8f55f7",
      600: "#8f55f7",
      700: "#020617",
    },
    secondary: {
      500: "#f1f5f9",
      600: "#e2e8f0",
      700: "#cbd5e1",
    },
    danger: {
      500: "#dc2626",
      600: "#b91c1c",
      700: "#991b1b",
    },
    body: "#F9FAFB",
  },
  font: {
    colors: {
      primary: "#020617",
      secondary: "#cbd5e1",
      danger: "#991b1b",
      white: "#ffffff",
    },
    fontSize: {
      "2xs": "10px",
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "30px",
      "4xl": "36px",
      "5xl": "48px",
      "6xl": "60px",
    },
    fontWeight: {
      normal: "normal",
      medium: "medium",
      semiBold: "semiBold",
      bold: "bold",
    },
  },
  border: {
    colors: {
      default: "#cbd5e1",
      hover: "#94a3b8",
      focus: "#1e293b",
      danger: "#dc2626",
      dangerHover: "#fca5a5",
      dangerFocus: "#b91c1c"
    }
  },
  tokens: {
    Spacing4: '16px',
    Spacing8: '32px',
  },
  breakpoints: {
    up: (size: BreakpointSize) => {
      const sizes = {
        xs: '0px',      // extra-small devices (portrait phones)
        sm: '600px',    // small devices (landscape phones)
        md: '960px',    // medium devices (tablets)
        lg: '1280px',   // large devices (desktops)
        xl: '1920px',   // extra-large devices (large desktops)
      };
      return `@media (min-width: ${sizes[size]})`;
    },
    down: (size: BreakpointSize) => {
      const sizes = {
        xs: '0px',      
        sm: '600px',   
        md: '960px', 
        lg: '1280px',
        xl: '1920px',
      };
      return `@media (max-width: ${sizes[size]})`;
    },
  },
};
