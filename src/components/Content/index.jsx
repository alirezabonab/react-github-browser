import React , {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import RepositoryList from '../RepositoryList';

const styles = theme => ({
    root:{
        flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            alignContent: "flex-start ",
    }
})

class Content extends Component{



    render(){
        return(
            <RepositoryList repositories={this.props.repositories}/>
        )
    }
}


export default withStyles(styles)(Content)