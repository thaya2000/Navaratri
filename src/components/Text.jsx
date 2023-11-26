import "./Text.css";
import Navaratri from "../assets/img/Navaratri.png";
import Navaratri_text from "../assets/img/Navatri_text.png";
import Navaratri_animation from "../assets/img/Navaratri_text_animation.png";


export default function Text() {
  return (
    <>
      <div className="text">
        <p> We extend a gracious invitation to.</p>
        <h1>DR. KUSHAN SUDHEERA</h1>
        {/* <h2>etuhj;jpup tpoh 2023</h2> */}
        <img src={Navaratri_text} alt="" />
        <h2>Navaratri Vizha 2023</h2>
        <h3>DATE : 20.11.2023</h3>
        <h3>VENUE : AUDITORIUM</h3>
        <h3>TIME : 5.05PM ONWARDS</h3>
      </div>
    </>
  );
}
