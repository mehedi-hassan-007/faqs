import React, { useState }from 'react';

const FAQ = ({id, title, desc}) => {
    const [toggle, setToggle] = useState(false)
    return (
        <article>
            <section>
                <div>
                    <h4>{title}</h4>
                    <button onClick={()=>{setToggle(!toggle)}}>{toggle ? "-" : "+"}</button>
                </div>
                {toggle &&  <p>{desc}</p>}
            </section>
        </article>
    );
};
export default FAQ;