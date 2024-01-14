const createElement = React.createElement("h1", {id: "heading"}, "Hello world from Javascript");

/* 
* <div id = "parent">
*   <div id = "child1">
        <h1>
            I'm an h1 tag.
        </h1>
        <h2>
            I'm an h2 tag.
        </h2>
    </div>
* </div>
*/

const parent = React.createElement("div", {id : "parentTag"},
    React.createElement(
    "div", {id: "child"}, [React.createElement("h1", {id: "header"}, "I am an h1 tag"),
    React.createElement("h2", {id: "heading"}, "I am h2 tag.")
    ]),
    React.createElement(
    "div", {id: "child"}, [React.createElement("h1", {id: "header"}, "I am an h1 tag"),
    React.createElement("h2", {id: "heading"}, "I am h2 tag.")
    ])
    );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);