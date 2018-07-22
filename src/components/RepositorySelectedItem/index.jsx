
import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import sizes from '../../design/sizes';
import Icon from '../../microComponents/Icon'
import  blueGrey  from '@material-ui/core/colors/blueGrey';
import  lightBlue  from '@material-ui/core/colors/lightBlue';

const styles = theme => ({
    root: {
      width : "500px",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start ",
      alignContent: "flex-start ",
      borderRadius : "2px",
      backgroundColor : lightBlue[200],
    },
    stats: {
        
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
        color : blueGrey[600],
        fontSize : sizes[12],
        textAlign : "left"
    },
    fullName : {
        fontWeight: "bold",
        color : blueGrey[900],
        fontSize : sizes[14],
    }
    
  });

class RepositorySelectedItem extends Component{


    render(){
        const { classes } = this.props;
        const {fullName , description, forks, stars, language, lastUpdated} = this.props;
        return(
            
            <div className={classes.root}>
                <div className={classes.texts + " " + classes.fullName}> 
                    {fullName}
                </div>
                {description && <div className={classes.texts}>
                    {description}
                </div>}
                <div className={classes.stats + " " + classes.texts}>
                     <div  className={classes.statsItem}> 
                        <Icon icon="fork" color={blueGrey[100]} width="16" height="16" viewBox="0 0 32 32"/> 
                    </div>
                    <div  className={classes.statsItem}> 
                        {forks}
                    </div>
                    <div  className={classes.statsItem}> 
                        <Icon icon="star" color={blueGrey[100]}  width="16" height="16" viewBox="0 0 32 32"/> 
                    </div>
                    <div  className={classes.statsItem}> 
                        {stars}
                    </div>
                   
                </div>
                <div className={classes.stats + " " + classes.texts}>
                    {language && 
                        <div className={classes.statsItem}> {language} - </div> }
                    <div className={classes.statsItem}> Updated At : {lastUpdated}</div>
                    
                </div>
                
            </div>
        )
    }
}

export default withStyles(styles)(RepositorySelectedItem);


