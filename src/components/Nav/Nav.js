import React,{useState} from 'react';
import { Button } from 'react-bootstrap';
import styled from "styled-components";

function Nav() {
  const [len, setLen]= useState(20);
  const [speed, setSpeed] = useState(20);
  const [arr,setArr] = useState([]);

  function handleChange(event) {
    console.log(event.target.value);
    setLen(event.target.value);
  }

  function generateArray(){
     for(var i=0;i<len;i++)
     {
       
      let entry=Math.floor(Math.random() * 65)+10;
      setArr(arr.push(entry));
      //setArr({arr:[...arr,entry]});
      //setArr()
      console.log(entry)
     
    }
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
            <div className='arr-bar' key={index}>
                <h1>{value}</h1> 
            </div>
          ))}
      </Bars>       
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

`