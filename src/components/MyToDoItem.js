import React, {Component} from 'react';
import "../App.css";

export default class MyToDoItem extends Component
{
    static defaultProps = {
        done : false,
    }
    state = {
        done : this.props.done
    } 
    
    toogleDone = () => {
        this.setState( {done : !this.state.done});
    }

    render()
    {
        // const {text} = this.props.text;
        const {text} = this.props;
        return(
            <div onClick = {this.toogleDone} className={this.state.done ? "doneTodo":""}>
                <p>{text}</p>
            </div>
        )
    }
}