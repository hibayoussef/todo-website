import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  card: {
    padding: "0.2rem 0 0 0",
    backgroundColor: "	#F9FFFF",
    minWidth: '14rem',
    height: 'auto',
    borderRadius: '0.5rem'
    
  },
  title: {
      fontSize: '0.8rem',
      fontWeight: 500,
      fontFamily: 'Raleway',    
  },
  deleteIcon:{
      color: '#FF0000',
      fontSize: '1.3rem'
  },
  verticalLine:{
    backgroundColor: "#e7ac63",
      width: '0.3rem',
      height: '7rem'
  },
  visibleIcon:{
    fontSize: '1.3rem'
  },
  cardsGrid:{
      // padding: '4rem'
  }
}));
