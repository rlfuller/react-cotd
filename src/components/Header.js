import React from "react";

//with an implicit return, remove the opening closing {} and the return
// return automatically whatever is on the same line
const Header = (props) => (
    <header className="top">
        <h1>Catch 
            <span className="ofThe">
                <span className="of">Of</span>
                <span className="the">The</span>
            </span>
            Day</h1>
        <h3 className="tagline">
            <span>{props.tagline}</span>
        </h3>
    </header>
);

// class Header extends React.Component {
//     render() {
//         return (
//             <header className="top">
//                 <h1>Catch 
//                     <span className="ofThe">
//                         <span className="of">Of</span>
//                         <span className="the">The</span>
//                     </span>
//                     Day</h1>
//                 <h3 className="tagline">
//                     <span>{this.props.tagline}</span>
//                 </h3>
//             </header>
            
//         )
//     }
// }

export default Header;