import { Component, JSX } from "react";

import Item from "../types/Item";

class Listing extends Component<{items: Item[]}> {
    render(): JSX.Element {
        const result: JSX.Element[] = [];
        this.props.items.forEach((item: Item) => {
            if (item.state !== "active")
                return;
            result.push(
                <div className="item" key={item.listing_id}>
                    <div className="item-image">
                        <a href={item.url}>
                            <img src={item.MainImage.url_570xN} />
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title">{item.title.length > 50 ? `${item.title.slice(0, 50)}…` : item.title}</p>
                        <p className="item-price">
                            {
                            item.currency_code == "USD" ?`$${item.price}` :
                            item.currency_code == "EUR" ? `€${item.price}` :
                            `${item.price} ${item.currency_code}`
                            }
                        </p>
                        <p className={`item-quantity level-${item.quantity > 20 ? "high" : item.quantity > 10 ? "medium" : "low"}`}>
                            {item.quantity} left
                        </p>
                    </div>
                </div>
            );
        });

        return (
            <div className="item-list">
                {result}
            </div>
        );
    }
}

export default Listing;
