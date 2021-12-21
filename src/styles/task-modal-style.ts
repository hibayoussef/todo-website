import { makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles((theme) => ({
  root: {
    padding: '1rem 2rem 1rem 2rem',
    backgroundColor: "#f4f5f7",
  },
  titleField: {
    // padding: "0 0 0 2rem",
  },
  button: {
    backgroundColor: "#4BB543",
    color: "white",
    textTransform: "none",
    fontSize: "0.9rem",
    fontWeight: 600,
    fontFamily: "Open Sans",
    padding: '0.4rem 2rem 0.4rem 2rem', 
    marginRight: '1rem', 
    marginTop: '1rem'
  },
  text: {
    color: "black",
    textTransform: "none",
    fontSize: "1rem",
    fontWeight: 700,
    fontFamily: "Open Sans",
  },
  icon:{
      color: 'black',
      marginRight: '0.7rem'    
  },
  createTaskbutton:{
    border: 'none',
    textTransform: 'none',
    fontSize: '0.9rem',
  fontFamily: 'Raleway',
  color: '#1E90FF'
  } 
}));

export default useStyle;
