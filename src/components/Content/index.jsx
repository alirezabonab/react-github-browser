import React , {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import RepositoryList from '../RepositoryList';

const styles = theme => ({
    root:{
        width: "100%",
        flexDirection: "row wrap",
        justifyContent: "flex-start",
        alignItems: "center",
        display:"flex",
        alignContent: "flex-start ",
        marginTop: "200px",
    },
    sideLeft : {
        flex:1,
        
    },
    sideRight :{
        flex:1
    },
    content : {
        flex: 2
    }
})

class Content extends Component{



    render(){

        const {classes} = this.props

        return(
            <div className={classes.root}>
                <div className={classes.sideLeft} ></div>
                <div className={classes.content}>
                    <RepositoryList  repositories={this.props.repositories}/>
                </div>
                <div className={classes.sideRight}></div>
            </div>
        )
    }
}


export default withStyles(styles)(Content)