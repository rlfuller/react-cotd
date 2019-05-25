import React from "react";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
    //this can be added inline in the onclick
    // handleClick = () => {
    //     this.props.addToOrder(this.props.index);
    // }
    render() {
        const {image, name, price, desc, status} = this.props.details;
        const isAvailable = status === "available";
        return (
            <li className="menu-fish">
                { image ? <img src={image} alt={name} /> : null }
                <h3 className="fish-name">
                    {name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button disabled={!isAvailable} onClick={() => this.props.addToOrder(this.props.index)}>
                    {isAvailable ? "Add To Cart" : "Sold Out!"}
                </button>
            </li>
        )
    }
}

export default Fish;