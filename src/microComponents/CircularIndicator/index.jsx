import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import lightBlue from '@material-ui/core/colors/lightBlue';
import { Component } from 'react';


const styles = theme => ({
    progress: {
      margin: theme.spacing.unit * 2,
    },
  });

class CircularIndicator extends Component{

    

    render(){
        const {classes} = this.props;
        
        return(
            <div>
                <CircularProgress className={classes.progress} style={{ color: lightBlue[500] }} />
            </div>
        )
    }
}
  
  
export default withStyles(styles)(CircularIndicator);