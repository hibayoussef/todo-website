import { makeStyles } from "@material-ui/core";


export const useStyle = makeStyles((theme) => ({
    toolbarMargin: {
      ...theme.mixins.toolbar,
      marginBottom: "1.5em"
    },
  
    tabContainer: {
      marginLeft: "auto"
    },
  
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
      minWidth: 10,
      marginLeft: "25px",
      color: '#E1D9D1'
    },
  
    toolbar:{
      padding: '0 4em 0 4em'
    },
    logoPart1:{
      // backgroundColor: 'white',
      fontWeight: 600,
      color: '#E1D9D1'
    },
    logoPart2:{
      backgroundColor: '#E1D9D1',
      fontWeight: 700,
      borderRadius: 16,
      border: '10px solid #E1D9D1',
      color: '#d32222'
    },
    appBar:{
     backgroundColor: '#e7ac63',
     marginBottom: '8rem'
    }
  }))
