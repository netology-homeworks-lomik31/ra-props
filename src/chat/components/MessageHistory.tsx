import { Component } from "react";

import MessageType from "../types/Message";
import Message from "./Message";

class MessageHistory extends Component<{ list: MessageType[]}> {
    render() {
        if (this.props.list.length === 0)
            return;
        return (
            <ul>
                {this.props.list.map((message) => {
                    return (
                        <Message key={message.id} from={message.from} message={message} />
                    );
                })}
            </ul>
        );
    }
}

export default MessageHistory;
