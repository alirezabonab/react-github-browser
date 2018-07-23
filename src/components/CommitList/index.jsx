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
        this.state = {
            isLoading : false,
            pageIndex : Math.min( 20 , this.props.commits.length),
        
            
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
        this.loadItems()
    }

    componentWillUpdate(nextProps , nextState) {
    
        if (nextProps.commits.length !== this.props.commits.length) {
          this.setState({
            isLoading : false,
            pageIndex : Math.min( 20 , nextProps.commits.length),
          }) 
        }
    }
  
    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }
  
    onScroll = () => {
    if (
        (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) &&
        this.props.commits.length &&
        !this.state.isLoading
        ) {
            this.onPaginatedSearch();
        }
    }

    onPaginatedSearch = ()=>{

        if(this.state.pageIndex >= this.props.commits.length ) {
            return
        }

        this.setState({
            isLoading : true
        })

        setTimeout(
            ()=>{
            this.setState({
                pageIndex : Math.min((this.state.pageIndex + 20) , this.props.commits.length),
                isLoading : false
            })
        } 
        , 1000)
       
    }

    loadItems() {
       
       
        var items = [];
        var len = this.state.pageIndex;
        
        var commits = this.props.commits;
       
        for (var i = 0; i < len; i++) {
            let item = commits[i]
            if(item)
                items.push(
                    <li  key={item.node_id}>
                        <CommitListItem 
                            rowNumber = {i + 1 }
                            message={item.commit.message}
                            author = {item.commit.author.name}
                            commitDate = {item.commit.author.date}
                        />
                    </li>
                ) 
            
        }

        return items;
    }

    render(){
        const {classes} = this.props;

        return (
            <div>
               
                <ul className={classes.list}>
                    {this.loadItems()}
                </ul>
                {this.state.loadingState ? <p> loading More Items..</p> : ""}
            </div>
        );
    }
}



export default withStyles(styles)(CommitList);
