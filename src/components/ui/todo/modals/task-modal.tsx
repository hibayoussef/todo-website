import { Fade, Grid, Modal, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import NotesIcon from "@material-ui/icons/Notes";
import SubtitlesIcon from "@material-ui/icons/Subtitles";
import useStyle from "../../../../styles/task-modal-style";
import AddIcon from "@material-ui/icons/Add";

const TaskModal = () => {
  const classes = useStyle();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={handleClickOpen}
        className={classes.createTaskbutton}
        startIcon={<AddIcon style={{ fontSize: 17 }} />}
      >
        Create new task
      </Button>

      <Dialog
      fullWidth
      maxWidth="sm"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
       <Grid container direction="column" className={classes.root}>
            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <DialogTitle id="form-dialog-title">
                    <Grid container direction="column">
                      <Grid item>
                        <Grid container direction="row">
                          <Grid item>
                            <SubtitlesIcon className={classes.icon} />
                          </Grid>

                          <Grid item>
                            <Typography className={classes.text}>
                              Task Title
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <TextField
                        fullWidth
                          className={classes.titleField}
                          id="standard-basic"
                        />
                      </Grid>
                    </Grid>
                  </DialogTitle>
                </Grid>
                <Grid item>{/* llll */}</Grid>
              </Grid>
            </Grid>
            <Grid item>
              <DialogContent>
                <DialogContentText>
                  <Grid container direction="row">
                    <Grid item>
                      <NotesIcon className={classes.icon} />
                    </Grid>
                    <Grid item>
                      <Typography className={classes.text}>
                        Description
                      </Typography>
                    </Grid>
                  </Grid>
                </DialogContentText>
                <TextField
                fullWidth
                  variant="outlined"
                  style={{ textAlign: "left" }}
                  multiline
                  rows={4}
                  className={classes.titleField}
                />
              </DialogContent>
            </Grid>
            <Grid
              item
              container
              direction="row-reverse"
              // justifyContent="center"
              // alignItems="flex-end"
            >
              <DialogActions>
                <Button
                  variant="contained"
                  className={classes.button}
                  onClick={handleClose}
                >
                  Create Task
                </Button>
              </DialogActions>
            </Grid>
          </Grid>
      </Dialog>
    </>
  );
};

export default TaskModal;
