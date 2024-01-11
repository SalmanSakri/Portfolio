
import React, { useState } from 'react';
import { GoPlus } from "react-icons/go";
import { CgMathMinus } from "react-icons/cg";
import "../style/FrequentlyAsked.css"
const FrequentlyAsked = () => {

    const faqData = [
        { question: 'What do you need to start working on my project?', answer: 'It mostly depends on the type of project. But in general, you need a fair idea of what you want, then we can take it from there.' },
        { question: 'How long will my project take to complete?', answer: 'This depends on the complexity of the project, your available, and your payment. Once you have this sorted out, I will give you a completion date.'},
        { question: 'Is hosting and domain registration inclusive in your pricing?', answer: 'No! Hosting and domain is taken care of seperately. You can pay for it or take care of it on your own if you know how to.'},
        { question: 'How much do you charge for an average website or app?', answer: `Once again, this depends. But my prices are affordable so you're good.`},
        { question: `What's your payment plan?`, answer: 'Payment is divided into 3. An initial 30% upfront payment to get me started once all the details of the projec is set, 40% once the project is completed, and 30% once the project is delivered.'},
        { question: `What if the project doesn't turn out good?`, answer: 'You will be a part of the process from the start. You will know how the whole project is going until the end. And I will make sure to give you the best.'},
    ];
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className='FrequentlyAsked'>
            <div className='faq-description'>
                <h2>Frequently Asked Questions</h2>
                <p>Here are some questions I usually get. Click to toggle the answer, and if you still have some more questions, shoot me a message from the contact section!</p>
            </div>

            <div className="faq-container">
                <div className="faq-box">
                <ul className="faq-list">
                    {faqData.map((item, index) => (
                        <li key={index} className={"faq-item"}>
                            <div className="faq-question" onClick={() => handleToggle(index)}>
                                <p>{item.question}</p>
                               <span className='faq-question-logo'>{activeIndex === index ?<CgMathMinus />: <GoPlus />}</span>
                            </div>
                            {activeIndex === index && 
                            <p className="faq-answer">{item.answer}</p>
                            }
                        </li>
                    ))}
                </ul>
                </div>
            </div>
        </section >
    )
}

export default FrequentlyAsked