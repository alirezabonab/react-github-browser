import React , {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import CommitList from '../CommitList';
import blueGrey from '@material-ui/core/colors/blueGrey';
import EmptyStateContent from '../EmptyStateContent';    
import SearchInput from '../../microComponents/SearchInput'
import CircularIndicator from '../../microComponents/CircularIndicator';

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
    },
    searchBoxContent:{
        width:"100%",
        display:"flex",
        flexDirection: "column",
        alignItems : "center"
    },
    searchInput : {
        backgroundColor : blueGrey[50],
    },
    commitList:{
        width:"100%"
    }
})

class CommitContent extends Component{

    constructor(props){
        super(props)
        this.state = {
            filterValue : '',
            isLoading : false,
            fetchCount : 20
        }
    }

    searchInputValueChanged = (value) =>{
        this.setState({
            filterValue:value,
            fetchCount : 20,
        })
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
        
    }
  
    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }

    onScroll = () => {
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) &&
            this.getFilteredCommits().length &&
            !this.state.isLoading) {

            this.onPaginatedSearch();
        }   
    }
    
    onPaginatedSearch = ()=>{

        if(this.state.fetchCount >= this.getFilteredCommits().length ) {
            return
        }

        this.setState({
            isLoading : true
        })

        setTimeout(
            ()=>{
            this.setState({
                fetchCount : this.state.fetchCount + 20,
                isLoading : false
            })
        } 
        , 2000)
        
    }

    getFilteredCommits = () => {
        if( this.state.filterValue !== '' ) 
        {
            return this.props.commits.filter((item)=>{
                        return item.commit.message.toLowerCase().includes(this.state.filterValue.toLowerCase())
                    })
        }
        else
        {
            return this.props.commits
        }
    }

    getCommits = () =>{
        let items = Array.from(this.getFilteredCommits()) ;
       
        

        return items.splice(0,this.state.fetchCount)
    }

    render(){

        const {classes} = this.props
        const {  isExecuting } = this.props
        
        return(
            <div >
                
            {(isExecuting || this.getCommits().length == 0) ? 
                <EmptyStateContent isExecuting={this.props.isExecuting}/> :
                <div className={classes.root} >
                    <div className={classes.sideLeft} ></div>
                    <div className={classes.content}>
                        <div className={classes.searchBoxContent}>
                            <SearchInput 
                                placeholder="search in comments"
                                onChange={this.searchInputValueChanged} 
                                className={classes.searchInput}
                                 />
                            <div className={classes.commitList}>
                                <CommitList  commits={
                                    this.getCommits()
                                }
                                />
                                
                            </div>
                            {this.state.isLoading ? <CircularIndicator />  : ""}
                        </div>
                    </div>
                    <div className={classes.sideRight}></div>
                </div>
            }
            </div>
        )
    }
}


export default withStyles(styles)(CommitContent)