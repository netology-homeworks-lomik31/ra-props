import { Component } from "react";

import MessageType from "../types/Message";
import Author from "../types/Author";

class TextMessage extends Component<{ from: Author; message: MessageType }> {
    render() {
        return (
            <li className="clearfix">
                <div className="message-data align-right">
                    <span className="message-data-time">
                        {this.props.message.time}
                    </span>
                    &nbsp;
                    &nbsp;
                    <span className="message-data-name">
                        {this.props.from.name}
                    </span>
                    <i className="fa fa-circle me"></i>
                </div>
                <div className="message other-message float-right">
                    {this.props.message.text}
                </div>
            </li>
        );
    }
}

export default TextMessage;
