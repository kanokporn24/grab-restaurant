import React,{Component} from "react";

export default class PostClassComponent extends 
Component{
    render (){
        return(
            <div className="post">
                <p> <strong>{this.props.userID}</strong>
                {this.props.message}
                </p>
                <p>Comments</p>
                <p>{this.props.children}</p>
            </div>
        )
    }
}