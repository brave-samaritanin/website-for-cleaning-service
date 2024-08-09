import React from 'react';
import classes from './WhyChoseUs.module.css'
import {GiTakeMyMoney} from 'react-icons/gi';
import {FaAward} from 'react-icons/fa';
import {AiOutlineCheck} from 'react-icons/ai';
import {FaShippingFast} from 'react-icons/fa';



const charges = <GiTakeMyMoney size='30px' />
const quality = <FaAward size='30px' />
const experienced = <AiOutlineCheck size='30px'/>
const quick = <FaShippingFast size='30px'/>

const WhyChoseUs = () => {
  return(
    <div className={classes.WhyChoseUs} 
    style={{
    backgroundRepeat:"no-repeat", backgroundSize: "cover", 
    backgroundPosition: "center", color: "white"}}
  >
          <h2> Why Chose Us?</h2>
          <div className={classes.Container}>
            <div className={classes.Wrapper}>
                <div className={classes.Charges}>
                  <h3>Unbeatable charges</h3>
                  {charges}
                </div>

                <div className={classes.Experience}>
                  <h3>Highly experienced</h3>
                  {experienced}
                </div>

                <div className={classes.Quality}>
                  <h3>Quality service</h3>
                  {quality}
                </div>

                <div className={classes.Quick}>
                  <h3>Quick response</h3>
                  {quick}
                </div>
            </div>
          </div>
        </div>
  );

}


export default WhyChoseUs;