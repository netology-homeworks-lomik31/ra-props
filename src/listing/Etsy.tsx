import { Component  } from "react";

import Item from "./types/Item";
import Listing from "./components/Listing";
import './Etsy.css';
import rawData from './data.json';

class Etsy extends Component {
    static data = rawData as Item[]
    render() {
        return (
            <Listing items={Etsy.data} />
        )
    }
}

export default Etsy;
