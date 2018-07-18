import React,  { Component } from 'react';
import RepositoryListItem from '../RepositoryListItem';
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
    root: {
     
    }
  });

class RepositoryList extends Component{



    render(){
        return (
            this.props.repositories.map(item => {
                return (<div>
                    <RepositoryListItem 
                        key={item.node_id}
                        fullName={item.name}
                        description={item.description}
                        language={item.language}
                        lastUpdated={item.updated_at}
                        forks={item.forks}
                        stars={item.stargazers_count}
                        />
                
                        
                 </div>
                ) 
            })
        );
    }
}


export default withStyles(styles)(RepositoryList);