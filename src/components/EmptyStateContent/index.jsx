import React , {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import  CircularIndicator  from '../../microComponents/CircularIndicator';



const styles = theme => ({
    root:{
        width: "100%",
        flexDirection: "row wrap",
        justifyContent: "center",
        alignItems: "center",
        display:"flex",
        alignContent: "center",
        marginTop: "250px",
        color : blueGrey[300]
    }
})

class NoContent extends Component{



    render(){

        const {classes , isExecuting} = this.props

        return(
            <div className={classes.root}>
                {isExecuting ? <CircularIndicator/>  : 
                    <div>
                        There is no item to show,
                        <br/> Use search Box ;)
                    </div>
                }
             </div>
        )
    }
}


export default withStyles(styles)(NoContent)