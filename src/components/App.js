import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Fish from "./Fish";
import sampleFishes from "../sample-fishes";

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

    loadSampleFishes = () => {
        this.setState({fishes: sampleFishes});
    };

    addToOrder = (key) => {
        //1. take in a copy of state
        const order = {...this.state.order};
        //2. either add to order or update the number in the order
        order[key] = order[key] + 1 || 1;
        //3. call setState to update our state object
        this.setState({order: order});
    }

    render(){
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"></Header>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => (
                            <Fish 
                                key={key} 
                                index={key}
                                details={this.state.fishes[key]} 
                                addToOrder={this.addToOrder}
                            />
                        ))}
                    </ul>
                </div>
                <Order></Order>
                <Inventory 
                    addFish={this.addFish}
                    loadSampleFishes={this.loadSampleFishes}
                />
                
            </div>
        )
    };
}

export default App;