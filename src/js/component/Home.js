import React, { useEffect, useState } from 'react';
import Digit from './Digit';
import { FaRegClock } from "react-icons/fa";

const Home = () => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCounter(prevCounter => prevCounter + 1);
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    const six = Math.floor((counter % 1000000) / 100000);
    const five = Math.floor((counter % 100000) / 10000);
    const four = Math.floor((counter % 10000) / 1000);
    const three = Math.floor((counter % 1000) / 100);
    const two = Math.floor((counter % 100) / 10);
    const one = Math.floor((counter % 10));

    const positions = [{ value: six }, { value: five }, { value: four }, { value: three }, { value: two }, { value: one }];

    return (
      <div>
        <div className='bigCounter'>
        <div><FaRegClock /></div>
        {positions.map((position, index) => {
          return (<Digit key={index} value={position.value} />);
        }
        )}
      </div>
      <div>
        <button className='btn btn-success' type='button'>Parar</button>
        <button className='btn btn-success' type='reset'>Reiniciar</button>
      </div>
      </div>
    );
  }

  export default Home;