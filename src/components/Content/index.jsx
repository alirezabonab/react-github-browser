import React, { Component } from 'react';
import {connect} from 'react-redux';
import RepositoriesContent from '../RepositoriesContent';
import RepositorySelectedItem from "../RepositorySelectedItem"
import { withStyles } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue'
import CommitContent from '../CommitContent';


const styles = theme =>{
    return{
        root : {
            marginTop: "50px",
        },
        selectedItem : 
        {
            backgroundColor : lightBlue[600],
            padding : "10px",
            marginBottom : "10px",
            display:"flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
        },
        commits:{
            display:"flex",
            flexDirection: "column",
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
        const { repositories , isRepositoryExecuting , commits , isCommitsExecuting} = this.props; 
        return(
            <div className = {classes.root}>
                {
                    selectedRepository ? 
                    <div>
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
                        <div>
                            <CommitContent commits={commits} isExecuting={isCommitsExecuting}/>
                        </div>
                     </div>
                    :
                    <RepositoriesContent repositories={repositories} isExecuting={isRepositoryExecuting}/>  
                }
                
            </div>
        )
    }
}


const component = withStyles(styles)(Content)

function mapStateToProps(state) {
    return {
        repositories: state.repository.repositories,
        isRepositoryExecuting: state.repository.isExecuting,
        commits: state.commit.commits,
        isCommitsExecuting: state.commit.isExecuting,
        selectedRepository : state.repository.selectedRepository
    };
}
  

  
export default connect(mapStateToProps, null)(component);
  