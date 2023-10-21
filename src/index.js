import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
function BookList() {
  return (
    <div className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  );
}

function Book() {
  return (
    <section>
      <Image />
      <Title />
      <Author />
      <Price />
    </section>
  );
}

function Title() {
  return <h1>book title</h1>;
}

function Image() {
  return (
    <img
      src="https://m.media-amazon.com/images/I/51qihDDNLFL._SY425_.jpg"
      alt=""
    />
  );
}

function Author() {
  return <h4>by Jon Gordon and Ken Blanchard</h4>;
}

function Price() {
  return <h4>299.00</h4>;
}
ReactDOM.render(<BookList />, document.getElementById("root"));
