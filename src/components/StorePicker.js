import React, {Fragment} from 'react';
import { getFunName } from "../helpers.js";

class StorePicker extends React.Component {
    myInput = React.createRef();

    //property set to an arrow function, which binds this
    goToStore = (event) =>  {
        //1. stop the form from submitting
        event.preventDefault();
        
        //2. get the text from that input
        const storeName = this.myInput.current.value;

        //3. change the page to /store/whatever they entered
        this.props.history.push(`/store/${storeName}`);
    }

    render(){
        return (
        // <React.Fragment>
        
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                <input 
                    type="text" 
                    ref={this.myInput}
                    required 
                    placeholder="Store Name" 
                    defaultValue={getFunName()} 
                />
                <button type="submit">Visit Store -></button>
            </form>
        
        // </React.Fragment>
        
        )
    }
}

export default StorePicker;