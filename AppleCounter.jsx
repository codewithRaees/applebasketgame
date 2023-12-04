import React, { useState } from "react";
import Button from "./Button";
import Leftarrow from "./assets/images/left.png";
import Rightarrow from "./assets/images/right.png";
import AppleBasket from "./AppleBasket";

const AppleCounter = () => {
  let totalApple = 10;
  const [RightAppleCount, setRightAppleCount] = useState(0);
  const [leftSideApple, setleftSideApple] = useState(
    totalApple - RightAppleCount
  );
  const [lposition, setlposition] = useState(null);
  const [rposition, setrposition] = useState(null);
  const HandleLeftClick = () => {
    if (leftSideApple < 10) {
      setRightAppleCount(RightAppleCount - 1);
      setleftSideApple(leftSideApple + 1);
      setlposition("");
      setrposition("");
    } else {
      setlposition("Full");
      setrposition("Empty");
    }
  };
  const HandleRightClick = () => {
    if (RightAppleCount < 10) {
      setRightAppleCount(RightAppleCount + 1);
      setleftSideApple(leftSideApple - 1);
      setlposition("");
      setrposition("");
    } else {
      setlposition("Empty");
      setrposition("Full");
    }
  };
  return (
    <>
    <h1 style={{textAlign:"center", margin:"20px", backgroundColor:"lightgray"}}>Basket Game</h1>
    <section>
        
      <AppleBasket count={leftSideApple} status={lposition} />
      <Button
        image={Leftarrow}
        title="Left Arrow"
        HandleClick={HandleLeftClick}
      />
      <Button
        image={Rightarrow}
        title="Right Arrow"
        HandleClick={HandleRightClick}
      />
      <AppleBasket count={RightAppleCount} status={rposition} />
    </section>
    </>
    
  );
};

export default AppleCounter;
