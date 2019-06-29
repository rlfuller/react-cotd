import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Fish from "./Fish";
import sampleFishes from "../sample-fishes";
import base from "../base";

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };

    componentDidMount(){
        //first reinstate our local storage
        const localStorageRef = localStorage.getItem(this.props.match.params.storeId);
        if(localStorageRef){
            this.setState({order: JSON.parse(localStorageRef)});
        }
        console.log(localStorageRef);
        this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
            context: this,
            state: "fishes"
        });
    }

    componentDidUpdate(){
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
        console.log("it updated");
    }

    componentWillUnmount(){
        base.removeBinding(this.ref);
    }

    

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

    updateFish = (key, updatedFish) => {
        //1. take a copy of the current state
        const fishes = {...this.state.fishes};
        //2. update that state
        fishes[key] = updatedFish;
        //3. set that to state
        this.setState({fishes:fishes});
    }

    deleteFish = (key) => {
        //1. Take a copy of state
        const fishes = {...this.state.fishes};
        //2. update the state (here we are removing an item - set the fish we don't want to null)
        fishes[key] = null;
        //3. update state
        this.setState({fishes:fishes});
    }

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

    removeFromOrder = (key) => {
        //1. take in a copy of state
        const order = {...this.state.order};
        //2. remove that item from order
        //since we are not mirroring order to firebase, we don't have to set
        //to null, instead we can remove the key
        delete order[key];
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
                <Order
                    fishes={this.state.fishes}
                    order={this.state.order}
                    removeFromOrder={this.removeFromOrder}>
                </Order>
                <Inventory 
                    addFish={this.addFish}
                    updateFish={this.updateFish}
                    deleteFish={this.deleteFish}
                    loadSampleFishes={this.loadSampleFishes}
                    fishes={this.state.fishes}

                />
                
            </div>
        )
    };
}

export default App;