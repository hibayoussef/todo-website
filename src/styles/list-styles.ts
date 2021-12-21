import { makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles((theme) =>({
    root:{
        padding: theme.spacing(2)
        // [theme.breakpoints.down('lg')]:{
            // margin: theme.spacing(10),
        // }
        // margin: '2rem'

    },
    card:{
        backgroundColor:'white',
        padding: '0.4rem',
    },
    button:{
        marginLeft: '0.7rem',
        marginBottom: '0.7rem',
        marginTop: '0.7rem'
    },
    headerTitle:{
        fontSize: '1rem',
        // fontFamily: 'Raleway',
        fontFamily: 'Open Sans',
        fontWeight: 'bold',
        lineHeight: 1.5,
        // fontFamily: 'Montserrat'

    },
    grid:{
        paddingTop: '7.5rem'
    }, 
    addButton:{
        paddingRight: '2rem',
        paddingBottom: '1rem'
    }

}))

