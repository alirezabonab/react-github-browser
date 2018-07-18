
import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import blueGrey from '@material-ui/core/colors/blueGrey';
import sizes from '../../design/sizes';
import Icon from '../../microComponents/Icon'

const styles = theme => ({
    root: {
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start ",
      alignContent: "flex-start ",
    },
    stats: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        alignContent: "flex-start ",
    },
    statsItem : {
        marginRight : sizes[4]
    },
    texts: {
        minHeight : sizes[32],
        color : blueGrey[300],
        fontSize : sizes[12],
    },
    fullName : {
        fontWeight: "bold",
        color : blueGrey[600],
        fontSize : sizes[14],
    },
    divider : {
        width : "100%",
        background: "transparent",
        borderTop : "1px solid " + blueGrey[100]
        
    },
    
  });

class RepositoryListItem extends Component{


    render(){
        const { classes } = this.props;
        
        return(
            
            <div className={classes.root}>
                <div className={classes.texts + " " + classes.fullName}> 
                    {this.props.fullName}
                </div>
                {this.props.description && <div className={classes.texts}>
                    {this.props.description}
                </div>}
                <div className={classes.stats + " " + classes.texts}>
                     <div  className={classes.statsItem}> 
                        <Icon icon="fork" color={blueGrey[100]} width="16" height="16" viewBox="0 0 32 32"/> 
                    </div>
                    <div  className={classes.statsItem}> 
                        {this.props.forks}
                    </div>
                    <div  className={classes.statsItem}> 
                        <Icon icon="star" color={blueGrey[100]}  width="16" height="16" viewBox="0 0 32 32"/> 
                    </div>
                    <div  className={classes.statsItem}> 
                        {this.props.stars}
                    </div>
                   
                </div>
                <div className={classes.stats + " " + classes.texts}>
                    {this.props.language && 
                        <div className={classes.statsItem}> {this.props.language} - </div> }
                    <div className={classes.statsItem}> Updated At : {this.props.lastUpdated}</div>
                    
                </div>
                <hr className={classes.divider}/>  
            </div>
        )
    }
}

export default withStyles(styles)(RepositoryListItem);