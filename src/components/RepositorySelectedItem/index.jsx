
import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import sizes from '../../design/sizes';
import Icon from '../../microComponents/Icon'
import  blueGrey  from '@material-ui/core/colors/blueGrey';
import  lightBlue  from '@material-ui/core/colors/lightBlue';
import { setSelectedRepository } from '../../actions/repository';
import {connect} from 'react-redux';

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
       
    },
    
    
  });

class RepositorySelectedItem extends Component{

    OnCloseButtonClick = () => {
this.props.clearSelectedRepository()
    }

    render(){
        const { classes } = this.props;
        const {fullName , description, forks, stars, language, lastUpdated} = this.props;
        return(
            
               
                <div className={classes.root}  onClick={this.OnCloseButtonClick}>
                    
                        
                        <div className={classes.texts + " " + classes.fullName}> 
                            {fullName}
                        </div>
                    
                

                    
                    {description ? 
                        <div className={classes.texts}>
                            description
                        </div> : 
                        ""
                    }
                

                    <div className={classes.stats + " " + classes.texts}>
                        <div  className={classes.statsItem}> 
                            <Icon icon="fork" color="#fff" width="16" height="16" viewBox="0 0 32 32"/> 
                        </div>
                        <div  className={classes.statsItem}> 
                            {forks}
                        </div>
                        <div  className={classes.statsItem}> 
                            <Icon icon="star" color="#fff"  width="16" height="16" viewBox="0 0 32 32"/> 
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

const component =  withStyles(styles)(RepositorySelectedItem);


function mapDispatchToProps (dispatch){
    return{
        clearSelectedRepository: ()=>{
            dispatch(setSelectedRepository(null))
        }
    }
}

export default connect(null , mapDispatchToProps)(component)