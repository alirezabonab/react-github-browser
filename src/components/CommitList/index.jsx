import React,  { Component } from 'react';
import CommitListItem from '../CommitListItem';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
     
    },
    list : {
        listStyleType: "none",
        margin: 0,
        padding: 0,
    }
  });

class CommitList extends Component{

    constructor(props){
        super(props)
    }



    render(){
        const {classes} = this.props;
        const { commits = []} = this.props
        return (
            <div>
                <ul className={classes.list}>
                    {commits.map(item => {
                        return (<li  key={item.node_id}>
                                    <CommitListItem 
                                        message={item.commit.message}
                                        author = {item.commit.author.name}
                                        commitDate = {item.commit.author.date}
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



export default withStyles(styles)(CommitList);
