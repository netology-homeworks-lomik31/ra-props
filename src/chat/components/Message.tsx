import { Component } from "react";
import Author from "../types/Author";
import MessageType from "../types/Message";
import TextMessage from "./TextMessage";
import ResponseMessage from "./Response";
import TypingMessage from "./Typing";

class Message extends Component<{ from: Author; message: MessageType }> {
    render() {
        if (this.props.message.type === "message")
            return (<TextMessage from={this.props.from} message={this.props.message} />);
        if (this.props.message.type === "response")
            return (<ResponseMessage from={this.props.from} message={this.props.message} />);
        if (this.props.message.type === "typing")
            return (<TypingMessage from={this.props.from} message={this.props.message} />);
        return (
            <div>
                Wrong message type
            </div>
        )
    }
}

export default Message;
