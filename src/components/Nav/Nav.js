import React, { useState } from "react";
import {
  bubble,
  selection,
  insertion,
  msort,
} from "../../Algorithms/Algrithms";
import styled from "styled-components";

function Nav() {
  const [len, setLen] = useState(20);
  const [speed, setSpeed] = useState(20);
  const [arr, setArr] = useState([]);

  function handleChange(event) {
    setLen(event.target.value);
  }

  function generateArray() {
    const arr = [];
    for (var i = 0; i < len; i++) {
      arr.push(Math.floor(Math.random() * 65) + 20);
    }
    setArr(arr);
  }

  function bvis() {
    const nums = bubble(arr);
    setArr(nums);
  }

  function svis() {
    const nums = selection(arr);
    setArr(nums);
  }

  function ivis() {
    const nums = insertion(arr);
    setArr(nums);
  }

  function mvis() {
    const nums = msort(arr);
    setArr(nums);
  }

  function qvis() {}

  return (
    <Cont>
      <Container>
        <Menu className="row">
          <a href="/">Visualizers</a>
          <Field>
            <label>
              Enter size of array:
              <input
                type="text"
                name="Size"
                value={len}
                onChange={handleChange}
                placeholder="Size of Array"
              />
            </label>
            <button onClick={generateArray}>Generate Array</button>
          </Field>
          <Field>
            <label>
              Speed Of Visualization:
              <input type="range" name="speed" value={speed} />
            </label>
          </Field>
        </Menu>
      </Container>
      <Bars>
          {arr.map((value, index) => (
            <div
              className="arr-bar"
              style={{
                height: `${value}px`,
                width: `50px`,
                backgroundColor: `black`,
                margin: `0.15%`,
              }}
              key={index}
            ></div>
          ))}
        </Bars>
        <Algob>
          <button onClick={bvis}>Bubble</button>
          <button onClick={svis}>Selection</button>
          <button onClick={ivis}>Insertion</button>
          <button onClick={mvis}>Merge</button>
          <button onClick={qvis}>Quick</button>
        </Algob>
    </Cont>
  );
}

export default Nav;

const Cont = styled.div`
display:flex;
flex-direction: column;
font-size: 1.2rem;
font-family: 'Montserrat', sans-serif;
`;

const Container = styled.div`

`;
const Field = styled.div`
  display: flex;
  padding: 2px 2px;
  align-items: center;

  label{
    margin-right:35px;
  }
  input{
    border: 2px solid white;
    right-margin: 2px;
    outline: none;
    border-radius: 5px;
    height: 28px;
    width: 95px;
    background-color: white;
  }
  button{
    border: 2px solid white;
    right-margin: 2px;
    outline: none;
    border-radius: 5px;
    height: 35px;
    width: 95px;
    background-color: white;
 }
`;
const Menu = styled.div`
  display: flex;
  height: 80px;
  
  justify-content: space-between;
  padding: 5px 20px;
  align-items: center;
  background-color: black;
  color: white;
  a {
    color: white;
    text-decoration: none;
    font-size: 2rem;
  }
  
`;

const Bars = styled.div`
  align-items: center;
  display: flex;
  margin-top: auto;
`;
const Algob = styled.div`
  display: flex;
  padding: 0, 20px;
`;
