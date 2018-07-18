
import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import blueGrey from '@material-ui/core/colors/blueGrey';
import sizes from '../../design/sizes';
import Icon from '../../microComponents/Icon'

const styles = theme => ({
    root: {
      color: blueGrey[600],
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start ",
      alignContent: "flex-start ",
    },
    stats: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        alignContent: "flex-start ",
    },
    texts: {
        minHeight : sizes[32]
    },
    fullName : {
        fontWeight: "bold"
    }
  });

class RepositoryListItem extends Component{


    render(){
        const { classes } = this.props;
        
        return(
            <div className={classes.root}>
                <div className={classes.texts + " " + classes.fullName}> 
                    {this.props.fullName}
                </div>
                <div className={classes.texts}>
                    {this.props.description}
                </div>
                <div className={classes.stats + " " + classes.texts}>
                    <div> {this.props.language}</div>
                    <div> {this.props.lastUpdated}</div>
                    <div> 
                        <Icon icon="fork" color={blueGrey[100]} width="16" height="16" viewBox="0 0 32 32"/> 
                        {this.props.forks}
                    </div>
                    <div> 
                        <Icon icon="star" color={blueGrey[100]}  width="16" height="16" viewBox="0 0 32 32"/> 
                        {this.props.stars}
                    </div>
                </div>

            </div>
        )
    }
}

export default withStyles(styles)(RepositoryListItem);