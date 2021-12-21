import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { SetStateAction, useState } from "react";
import { useStyle } from "../../../styles/header-styles";

export default function Header() {
  const classes = useStyle();
  const [value, setValue] = useState(0)
  const handleChange = (event: any, value: SetStateAction<number>) => {
    setValue(value);
  };

  return (
    // <ElevationScroll>
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar disableGutters className= {classes.toolbar}>
        <Typography variant="h3" className={classes.logoPart1}>
          TO<span className= {classes.logoPart2}>DO</span>
        </Typography>
        {/* <Tabs 
        // indicatorColor="primary"
        value={value} onChange={ handleChange } className= { classes.tabContainer }>
          <Tab className= {classes.tab} label="Sign Up" />
          <Tab className= {classes.tab} label="Login" />
        </Tabs> */}

        <div className= {classes.toolbarMargin}></div>
      </Toolbar>
    </AppBar>
    // </ElevationScroll>
  );
}
