import { useEffect } from "react";
import img1 from "../assets/img/right.png";
import img2 from "../assets/img/left.png";
import "./Header.css";

export default function Header() {
  useEffect(() => {
    $(".sakura-falling").sakura();
  }, []);
  return (
    <div>
      <div className="sakura-falling"></div>
      <img src={img1} alt="image-top-right" className="top-right-decoration" />
      <img src={img2} alt="image-top-left" className="top-left-decoration" />
      <div className="wrap">
        <div className="title">
          <h1>Navaratri Vizha</h1>
          <h2>2023</h2>
          <p></p>
        </div>
      </div>
    </div>
  );
}
