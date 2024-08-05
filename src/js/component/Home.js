import React from 'react';
import Digit from './Digit';
import { FaRegClock } from "react-icons/fa";

const Home = () => {
  
function contador(counter){
  counter = 0;
  if(counter > 999999){
    counter = 0;
    
  };
  const six = Math.floor((counter % 1000000) / 100000);
  const five = Math.floor((counter % 100000) / 10000);
  const four = Math.floor((counter % 10000) / 1000);
  const three = Math.floor((counter % 1000) / 100);
  const two = Math.floor((counter % 100) / 10);
  const one = Math.floor((counter % 10));
  counter++;
}
  
let positions = [{value: six}, {value: five}, {value: four}, {value: three}, {value: two}, {value: one}]

  return (
    <div className='bigCounter'>
      <div><FaRegClock /></div>
      {positions.map((position, index) => {
        return (<Digit key={index} value={position.value} />)
      }
      )}

    </div>
  )
}

export default Home