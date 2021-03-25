// // Old Way

// // var React = require("react");
// // var ReactDOM = require("react-dom");

// New way
import React from "react";
import ReactDOM from "react-dom";
// import App from "./components/App.jsx";

// var name = "Santosh";
// // const num = 7;
// var lname = "Kushwaha"
// // ReactDOM.render(What to show, where to show)
// ReactDOM.render(
//   <div>
//     <h1>Hello {name + " " +lname}</h1>
//     <h1>Hello {`${name} ${lname}`}</h1>
//     {/* <---new es6 tempelate---> */}
//     <p>Your lucky number is {Math.sqrt(49)}</p>
//     {/* <p>We are about to make our first React App.</p> */}
//   </div>,
//   document.getElementById("root")
// ); // This is easy
// // the below method is quite hard

// // var h1 = document.createElement("h1");
// // h1.innerHTML = "Hello World!!!";
// // document.getElementById("root").appendChild(h1);

// import React from "react";
// import ReactDOM from "react-dom";

// const customStyle= {
//   color: "red",
//   fontFamily : "Sans-Sarif",
//   fontSize :"50px",
//   border:"1px solid black"
// };

// customStyle.color="green";
ReactDOM.render( <div >
    <h1>My Favourite Food</h1>
    <ul>
        <li>Bacon</li>
        <li>Noodles</li>
        <li>Chowmin</li>
    </ul>
    </div>,
    document.querySelector("#root")
);

// const name = "Santosh";
// var date = new Date();

// ReactDOM.render(<div>
// <p>Created by {name}</p>
// <p>Copyright {date.getFullYear()}</p>
// </div>, document.querySelector("#root"));
// let text = "";
// const customStyle = {
//   color: "red"
// };
// const date = new Date();
// const hours = date.getHours();
// if (hours >= 0 && hours <= 11) {
//   text = "Good Morning!!";
//   customStyle.color = "red";
// } else if (hours >= 12 && hours <= 18) {
//   text = "Good Afternoon";
//   customStyle.color = "green";
// } else {
//   text = "Good Evening";
//   customStyle.color = "blue";
// }

// ReactDOM.render(
//   <div>
//     <h1 style={customStyle}>{text}</h1>
//   </div>,
//   document.querySelector("#root")
// );

// Naming should be in pascal case

// ReactDOM.render(<App />, document.querySelector("#root"));