import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: `'Ubuntu', 'sans-serif'`,
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#9c27b0',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#1976D2',
      contrastText: '#ffffff',
    },
    divider: 'rgba(0,0,0,0.05)',
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          border: '1px solid RGB(229, 234, 242)',
          boxShadow: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          boxShadow: 'none',
          textTransform: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'elevation' && {
            borderRadius: '8px',
            boxShadow: '0 3px 15px rgba(22, 41, 124, 0.1)',
            '&:hover': {
              boxShadow: '0 3px 15px rgba(22, 41, 124, 0.2)',
            },
          }),
          height: '100%',
          transition: '0.4s',
          '&:hover': {
            transform: 'scale(1.1)',
          },
        }),
      },
    },
    MuiChip: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(!ownerState.color && {
            borderColor: 'RGB(229, 234, 242)',
          }),
        }),
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          borderColor: 'RGB(229, 234, 242)',
          fontWeight: 'bold',
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderColor: 'RGB(229, 234, 242)',
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          justifyContent: 'center',
          display: 'flex',
        },
      },
    },
  },
});

export default theme;
