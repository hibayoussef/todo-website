import { Grid } from "@material-ui/core";
import CardTodo from "./cardTodo";
import { useStyles } from "../../../../styles/todo-style";

const Cards = () => {
    const classes = useStyles();
  return (
    <Grid className={classes.cardsGrid} container spacing={1}>
      <Grid container item xs={12} sm={12} spacing={3}>
       <Grid item>
       <Grid container item xs={4}>
        <CardTodo />
       </Grid>
       </Grid>
       <Grid item>
       <CardTodo />
       </Grid>
       <Grid item>
       <CardTodo />
       </Grid>
       <Grid item>
       <CardTodo />
       </Grid>
      </Grid>
      {/* <Grid container item xs={12} spacing={3}>
        <CardTodo />
      </Grid>
      <Grid container item xs={12} spacing={3}>
        <CardTodo />
      </Grid> */}
    </Grid>
  );
};

export default Cards;
