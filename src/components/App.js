import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";


class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };
    addFish = fish => {
        console.log("adding a fish");
        //1. take a copy of the existing state
        const fishes = {...this.state.fishes} //will take a copy of everything in fishes

        //2. add out new fish to that fishes variable
        fishes[`fish${Date.now()}`] = fish;

        //3. set the new fishes object to state
        this.setState({
            fishes: fishes
        });
    };
    render(){
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"></Header>
                </div>
                <Order></Order>
                <Inventory addFish={this.addFish}>
                </Inventory>
                
            </div>
        )
    };
}

export default App;