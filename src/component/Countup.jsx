import React, {lazy, useState } from 'react'
import '../style/Countup.css';
// import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { DiCodeigniter } from "react-icons/di";

const CountUp= lazy(()=>import('react-countup'));

const Countup = () => {
    const [CounterOn, setCounterOn] = useState(false);
    return (
        <>
            <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
            >
                <section className='sectionCountup'>
                    <div className='countup'>
                        <div className="countup-container slideInLeft">
                        <span className="countup-logo"><DiCodeigniter/></span>
                            <span>{CounterOn && <CountUp className='num' start={0} suffix='+' end={500} duration={3} />}</span>
                           
                            <span className="text">Code</span>
                        </div>

                        {/* <div className="countup-container">
                        <span className="text">Project</span>
                            {CounterOn && <CountUp className='num' start={0} end={20} suffix='+' duration={3} />}
                           
                        </div>


                        <div className="countup-container slideInRight">
                        <span className="text">Five Stars</span>
                            {CounterOn && <CountUp className='num' start={0} end={50} suffix='+' duration={3} />}
                          
                        </div> */}

                    </div>
                </section>
            </ScrollTrigger>






        </>
    )
}



export default Countup