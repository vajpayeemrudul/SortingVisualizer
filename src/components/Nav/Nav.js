import React,{useState} from 'react';
import { Button } from 'react-bootstrap';
import {bubble,selection,insertion,msort} from '../../Algorithms/Algrithms';
import styled from "styled-components";

function Nav() {
  const [len, setLen]= useState(20);
  const [speed, setSpeed] = useState(20);
  const [arr,setArr] = useState([]);

  function handleChange(event) {
    setLen(event.target.value);
  }

  function generateArray(){
    const arr=[];
     for(var i=0;i<len;i++)
     {
      arr.push(Math.floor(Math.random() * 65)+20);
     
    }
    setArr(arr);
  }

  function bvis()
  {
        const nums=bubble(arr);
        setArr(nums);
  }

  function svis(){
    const nums=selection(arr);
    setArr(nums);
  }

  function ivis(){
    const nums=insertion(arr);
    setArr(nums);
  }

  function mvis()
  {
    const nums=msort(arr);
    setArr(nums);
  }

  function qvis(){

  }

  return (
    <Container>
      <Menu>
      <a href="/">Visualizers</a>
          <Field>
                <label>Enter size of array:
                  <input type="text" name="Size" value={len} onChange={handleChange} placeholder='Size of Array'/>
                </label>
                <button onClick={generateArray}>Generate Array</button>
          </Field>
          <Field>
               <label>Speed Of Visualization:
                  <input type="range" name="speed" value={speed}/>
               </label>
          </Field>
      </Menu>

      <Bars>
          {arr.map((value,index) =>(
            <div className='arr-bar' style={{height:`${value}px`,width:`50px`,backgroundColor:`black`,margin:`0.15%`}} key={index} ></div>
          ))}
      </Bars>
      <Algob>
         <button onClick={bvis}>Bubble</button>
         <button onClick={svis}>Selection</button>
         <button onClick={ivis}>Insertion</button>
         <button onClick={mvis}>Merge</button>
         <button onClick={qvis}>Quick</button>
      </Algob>       
    </Container>  
  )
}

export default Nav;

const Container = styled.div`

`
const Field = styled.div`

`
const Menu = styled.div`
display: flex;
justify-content: space-between;
padding: 5px 20px;
align-items: center;
`

const Bars=styled.div`
  align-items: center;
  display: flex;
  margin-top: auto; 
`
const Algob=styled.div`
  display:flex;
  padding: 0,20px;
`