
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme=>({
    root:{
        marginTop: '1.5rem'
    },
    paper: {
        marginTop: theme.spacing(0.5),
        width: '100%',
        height: 'auto',
        backgroundColor: '#a9c6d9',
        padding: '3rem',
        [theme.breakpoints.down('sm')]:{
            padding: '2.7rem',
            width: '80%',
        },
    },
    textField: {
        marginBottom: "0.6rem",
        borderColor: "red",
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white',
            },
        }
      },
      button: {
        height: "3.4rem",
        backgroundColor: "#e7ac63",
        color: "#ffff",
        textTransform: "none",
        fontSize: "1.2rem",
        marginTop: '1.3rem',
        fontWeight: 500
      },
      avatar:{
        background: "rgba(255,255,255,0.85)",
        width: "100px",
        height: "100px",
        boxShadow: "0px 0px 12px rgba(131,153,167,0.99)",
        marginBottom: '3.5rem'
      },
      icon:{
        width: "80px",
        height: "80px",
        color: "rgba(131,153,167,0.79)"
      },
      typography:{
          marginTop: '0.7rem',
          fontSize: '0.8rem',
          color: 'gray'
      },
      linkTypo:{
          marginLeft: '0.5rem'
      }
}))