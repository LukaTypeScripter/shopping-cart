import react from "react";

export default function Header(p) {
  const { countCartItems } = p;
  return (
    <header className="row block center ">
      <div>
        <a href="#">
          <h1>Small Shoping Cart</h1>
        </a>
      </div>
      <div>
        <a href="#">
          Cart{" "}
          {countCartItems ? (
            <button className="badge">{countCartItems}</button>
          ) : (
            ""
          )}
        </a>{" "}
        <a href="#">sign</a>
      </div>
    </header>
  );
}
