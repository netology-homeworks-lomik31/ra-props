import { Component } from "react";

import MessageType from "../types/Message";
import Author from "../types/Author";

class Response extends Component<{from: Author; message: MessageType}> {
    render() {
        return (
            <li>
                <div className="message-data">
                    <span className="message-data-name">
                        <i className="fa fa-circle online"></i>
                        {this.props.from.name}
                    </span>
                    <span className="message-data-time">
                        {this.props.message.time}
                    </span>
                </div>
                <div className="message my-message">
                    {this.props.message.text}
                </div>
            </li>
        );
    }
}

export default Response;
