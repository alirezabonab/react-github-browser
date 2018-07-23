
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
      lineHeight: 1.6,
        
    },
    message : {
        textAlign : "left",
        color : blueGrey[600],
        fontSize : sizes[14],
    },
    commitDate:{
        textAlign : "left",
        color : blueGrey[300],
        fontSize : sizes[12],
    },
    divider : {
        width : "100%",
        background: "transparent",
        borderTop : "1px solid " + blueGrey[100]  
    },
    
  });

class CommitListItem extends Component{


    render(){
        const { classes } = this.props;
       const { message , commitDate , author,rowNumber} = this.props
        
        return(
            
            <div >
                <div className={classes.root}>
                
                    <div className={classes.commitDate}>
                        {author} - {commitDate}
                    </div>
                    <div className={classes.message}>
                        {message}
                    </div>
                </div>
                <hr className={classes.divider}/>  
            </div>
        )
    }
}

export default withStyles(styles)(CommitListItem);