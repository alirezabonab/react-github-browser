import React , {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import CommitList from '../CommitList';
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

class CommitContent extends Component{



    render(){

        const {classes} = this.props
        const {commits , isExecuting } = this.props
        return(
            <div>
            {(isExecuting || commits.length == 0) ? 
                <EmptyStateContent isExecuting={this.props.isExecuting}/> :
                <div className={classes.root}>
                    <div className={classes.sideLeft} ></div>
                    <div className={classes.content}>
                        <CommitList  commits={this.props.commits}/>
                    </div>
                    <div className={classes.sideRight}></div>
                </div>
            }
            </div>
        )
    }
}


export default withStyles(styles)(CommitContent)