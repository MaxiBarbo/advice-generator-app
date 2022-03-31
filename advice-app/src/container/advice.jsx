import React, { useEffect, useState } from 'react'
import ButtonClick from './button';
import Card from './card';
import Imagen from './imagen';
import './items.css';

export const Advice = () => {

    const [advice, setAdvice] = useState (null)

    const url = "https://api.adviceslip.com/advice"; 

    const fetchAdvice = () => {
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            setAdvice(data);
            console.log(data);
        })
        .catch((error) => console.log(error));
    }

    useEffect(() => {
        fetchAdvice(url)
    }, [])

    return(
        <div>
        {advice ? (
          <Card>
              <p className="adviceid">ADVICE #{advice.slip.id}</p>
              <div className='adviceText'>
                <p className="text">"{advice.slip.advice}"</p>
                  </div>
              <Imagen/>    
              <ButtonClick advice={fetchAdvice}/>
            </Card>
        ) : null}
      </div>
    );
  };