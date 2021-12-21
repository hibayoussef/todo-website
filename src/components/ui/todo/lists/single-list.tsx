import {
  Card,
  CardContent,
  CardHeader,
  Grid,
} from "@material-ui/core";
import { useStyle } from "../../../../styles/list-styles";
import CardTodo from "../card/cardTodo";
import TaskModal from "../modals/task-modal";

const SingleList = () => {
  const classes = useStyle();
  return (
      <Grid className={classes.root}>

        {/* 1 */}
        <Grid item>
          <Grid container>
            {/* 1-1 */}
            <Grid item>
              <Card elevation={4} className={classes.card}>
                  <Grid item>
                      <Grid container>
                          <CardHeader 
                          classes={{
                            title: classes.headerTitle
                          }} 
                           title="Shrimp and Chorizo Paella">
                          
                          </CardHeader>
                          </Grid>
                  </Grid>
                {/* 1-1-1 */}
                <Grid item>
                  <Grid container>
                    <CardContent>
                     <Grid container direction="column" spacing={3}>
                          {/* 1-1-1-1 */}
                      <Grid item >
                         <CardTodo />
                      </Grid>
                      <Grid item >
                          <CardTodo />
                      </Grid>
                     </Grid>
                    </CardContent>
                  </Grid>
                </Grid>

                {/* 1-1-2 */}
                <Grid item className={classes.button}>
                  <TaskModal />
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  );
};

export default SingleList;
