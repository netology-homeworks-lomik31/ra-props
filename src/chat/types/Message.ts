import Author from "./Author";

interface Message {
    id: string;
    from: Author;
    type: "response" | "message" | "typing";
    time: string;
    text?: string;
}

export default Message;
