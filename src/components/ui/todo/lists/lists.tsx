import { Grid } from "@material-ui/core";
import SingleList from "./single-list";
import { useStyle } from "../../../../styles/list-styles";
import Header from "../../header-footer/header";
import ListModal from "../modals/list-modal";


const Lists = () => {
  const classes = useStyle();
  
  return (
    <>
      <Header />

      <Grid className={classes.grid}>
        <Grid container className= { classes.addButton }  item direction="row-reverse">
            <ListModal />
        </Grid>
        <Grid container item lg={12} direction="row" spacing={1}>
          <Grid item lg={3} sm={6} xs={12}>
            <SingleList />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <SingleList />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <SingleList />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <SingleList />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <SingleList />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Lists;
