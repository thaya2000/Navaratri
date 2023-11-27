import "./Text.css";
import Navaratri from "../assets/img/Navaratri.png";
import Navaratri_text from "../assets/img/Navatri_text.png";
import Navaratri_animation from "../assets/img/Navaratri_text_animation.png";
import { useParams } from "react-router-dom";

export default function Text() {
  const { index } = useParams();

  var inviteesList = {
    1: "John Doe",
    2: "Jane Smith",
    3: "DR. KUSHAN SUDHEERA",
    guest3: "Bob Johnson",
  };
  return (
    <>
      <div className="text">
        <p> We extend a gracious invitation to.</p>
        <h1>{index == null ? "KUSHAN SUDHEERA" : inviteesList[index]}</h1>
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
