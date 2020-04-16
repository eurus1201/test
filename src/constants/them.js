import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
const breakpoints = createBreakpoints({})

export const theme = createMuiTheme({
  direction: 'rtl',
  typography: {
    fontFamily: [
      'IRANSans',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  overrides: {
    // Style sheet name ⚛️
    MuiDialog: {
      paper:{
        margin:20
      },
      paperScrollPaper: {
        maxHeight: 'calc(100% - 40px)',
      }
    },
    MuiMenu: {
      list: {
        padding: 0,
      },
      paper: {
        borderRadius: 25
      }
    },
    MUIDataTable: {
      paper: {
        borderRadius: 20
      },
      responsiveScrollFullHeight: {
        overflow: 'auto'
      }
    },
    MUIDataTableBodyRow: {
      root: {
        '&:nth-child(odd)': { 
          backgroundColor: '#cdd3d8'
        }
      }
    },
    MuiTablePagination: {
      toolbar:{
        [breakpoints.only('xs')]:{
          paddingLeft: 2,
          paddingRight: 2,
          flexDirection: 'column',
          alignItems: 'center',
        }
      }
    },
    MuiPickersModal:{
      dialogRoot: {
        direction: 'ltr'
      }
    },
    MuiMenuItem: {
      root: {
        lineHeight: '38px'
      }
    },
    MuiInputBase:{
      root:{
        "&$disabled":{
          opacity: 0.5
        }
      }
    },
    MuiInput: {
      root: {
        height: 40,
        textAlign: 'left',
        borderRadius: '1.25rem',
        border: '1px solid #b1b1b1',
        overflow: 'hidden',
        transition: 'all 300ms linear',
        '&$focused': {
          boxShadow: '0 3px 10px rgba(0,0,0,0.1875)'
        }
      },
      input: {
        height: '2.5rem',
        lineHeight: '2.5rem',
        padding: '0 1rem',
      },
      underline: {
        '&:after' : null,
        '&:before' : null
      },
      formControl: {
        "label + &": {
          marginTop: "24px"
        }
      }
    },
    MuiInputLabel: {
      formControl: {
        top: 12,
        left: 25,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: 'calc(100% - 25px)',
      },
      shrink: {
        transform: 'translate(0,-5px) scale(0.75)',
        width: 'calc(133.333% - 33.33px)'
      },
      animated: {
        transition: 'all 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms'
      }
    },
    MuiFormHelperText: {
      root: {
        paddingLeft: 25,
      },
    },
    MuiButton: {
        root: {
            borderRadius: '1.25rem',
            height: '2.5rem',
        }
    },
    MuiPopover:{
      paper: {
        direction: 'ltr'
      }
    },
    MuiFormLabel: {
      root: {
        lineHeight: 1.2,
        marginTop: -1
      }
    }
  },
  props: {
    MuiButton:{
      disableFocusRipple: true,
    }
  }
})