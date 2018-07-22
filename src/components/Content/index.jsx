import React, { Component } from 'react';
import {connect} from 'react-redux';
import RepositoriesContent from '../RepositoriesContent';
import RepositorySelectedItem from "../RepositorySelectedItem"
import { withStyles } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue'


const styles = theme =>{
    return{
        root : {
            marginTop: "50px",
        },
        selectedItem : 
        {
            backgroundColor : lightBlue[600],
            padding : "10px",
            display:"flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
        }
    }
}

class Content extends Component{

   

    render(){
        const { selectedRepository } = this.props
        const { classes } = this.props
        return(
            <div className = {classes.root}>
                {
                    selectedRepository ? 
                    <div className={classes.selectedItem}>
                        <RepositorySelectedItem
                            fullName={selectedRepository.name}
                            description={selectedRepository.description}
                            language={selectedRepository.language}
                            lastUpdated={selectedRepository.updated_at}
                            forks={selectedRepository.forks}
                            stars={selectedRepository.stargazers_count}
                        />
                     </div>
                    :
                    <RepositoriesContent repositories={this.props.repositories} isExecuting={this.props.isExecuting}/>  
                }
                
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        repositories: state.repository.repositories,
        isExecuting: state.repository.isExecuting,
        selectedRepository : state.repository.selectedRepository
    };
}
  
const component = withStyles(styles)(Content)
  
export default connect(mapStateToProps, null)(component);
  