import Countdown from "../components/Countdown";
import { Title } from "../components/Title";
import HomeAnimation from "../components/HomeAnimation";
import { useParams } from "react-router-dom";

export default function Home() {
  const { index } = useParams();
  console.log("Index No :", index);

  return (
    <>
      <HomeAnimation />
      <Countdown />
      {/* <p>{index}</p> */}
    </>
  );
}
