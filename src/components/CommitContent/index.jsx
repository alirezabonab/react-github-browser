import React , {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import CommitList from '../CommitList';
import EmptyStateContent from '../EmptyStateContent';    
import SearchInput from '../../microComponents/SearchInput'
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
        
    },
    commitList:{
        width:"100%"
    }
})

class CommitContent extends Component{

    constructor(props){
        super(props)
        this.state = {
            filterValue : ''
        }
    }

    searchInputValueChanged = (value) =>{
        this.setState({filterValue:value})
    }

    render(){

        const {classes} = this.props
        const {commits , isExecuting } = this.props
        
        return(
            <div >
                
            {(isExecuting || commits.length == 0) ? 
                <EmptyStateContent isExecuting={this.props.isExecuting}/> :
                <div className={classes.root} >
                    <div className={classes.sideLeft} ></div>
                    <div className={classes.content}>
                        <div className={classes.searchBoxContent}>
                            <SearchInput 
                                placeholder="search in comments"
                                onChange={this.searchInputValueChanged} 
                                className={classes.searchInput}
                                disableUnderLine={false} />
                            <div className={classes.commitList}>
                                <CommitList  commits={
                                    this.state.filterValue !== '' ? 
                                    this.props.commits.filter((item)=>{
                                       return item.commit.message.toLowerCase().includes(this.state.filterValue.toLowerCase())
                                    }):
                                    this.props.commits
                                }
                                />
                            </div>
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