import React , {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import RepositoryList from '../RepositoryList';
import EmptyStateContent from '../EmptyStateContent';    

const styles = theme => ({
    root:{
        width: "100%",
        flexDirection: "row wrap",
        justifyContent: "flex-start",
        alignItems: "center",
        display:"flex",
        alignContent: "flex-start ",
        
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

class RepositoriesContent extends Component{



    render(){

        const {classes} = this.props
        const {repositories , isExecuting } = this.props
        return(
            <div>
            {(isExecuting || repositories.length == 0) ? 
                <EmptyStateContent isExecuting={this.props.isExecuting}/> :
                <div className={classes.root}>
                    <div className={classes.sideLeft} ></div>
                    <div className={classes.content}>
                        <RepositoryList  repositories={this.props.repositories}/>
                    </div>
                    <div className={classes.sideRight}></div>
                </div>
            }
            </div>
        )
    }
}


export default withStyles(styles)(RepositoriesContent)