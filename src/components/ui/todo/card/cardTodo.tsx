import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
} from "@material-ui/core";
import { useStyles } from "../../../../styles/todo-style";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import VisibilityIcon from "@material-ui/icons/Visibility";

const CardTodo = () => {
  const classes = useStyles();
  return (
    <Grid>
      <Grid item>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          item
          lg={12}
          xs={12}
          sm={12}
        >
          <Card elevation={3} className={classes.card}>
            <Grid container direction="row">
              <Grid item className={classes.verticalLine} />
              {/* 2 */}
              <Grid item>
                <Grid container direction="column">
                  <Grid item>
                    <CardContent>
                      <Typography className={classes.title}>
                        create SignUp form
                      </Typography>
                    </CardContent>
                  </Grid>

                  <Grid item>
                    <CardActions>
                      <Grid container direction="row">
                        <Grid item>
                          <IconButton aria-label="delete">
                            <DeleteIcon className={classes.deleteIcon} />
                          </IconButton>
                        </Grid>
                        <Grid item>
                          <IconButton aria-label="delete">
                            <VisibilityIcon
                              className={classes.visibleIcon}
                              color="primary"
                            />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </CardActions>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CardTodo;
