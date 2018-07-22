import React,  { Component } from 'react';
import RepositoryListItem from '../RepositoryListItem';
import { withStyles } from '@material-ui/core/styles';
import {setSelectedRepository} from '../../actions/repository'
import { connect } from 'react-redux';




const styles = theme => ({
    root: {
     
    },
    list : {
        listStyleType: "none",
        margin: 0,
        padding: 0,
    }
  });

class RepositoryList extends Component{

    constructor(props){
        super(props)
    }

    listItemClicked = (item)=>{
        if(item)
            this.props.setSelectedRepository(item)
    }


    render(){
        const {classes} = this.props;
        return (
            <div>
                <ul className={classes.list}>
                    {this.props.repositories.map(item => {
                        return (<li onClick={()=>this.listItemClicked(item)} key={item.node_id}>
                                    <RepositoryListItem 
                                        fullName={item.name}
                                        description={item.description}
                                        language={item.language}
                                        lastUpdated={item.updated_at}
                                        forks={item.forks}
                                        stars={item.stargazers_count}
                                        />
                                </li>
                            ) 
                        })
                    }
                </ul>
            </div>
        );
    }
}



const component = withStyles(styles)(RepositoryList);


function mapDispatchToProps(dispatch){
    return{
        setSelectedRepository : (selectedRepo)=> dispatch(setSelectedRepository(selectedRepo))
    }
}


export default connect(null,mapDispatchToProps)(component)