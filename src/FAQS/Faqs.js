import React, { useState } from 'react';
import FAQ from './FAQ.js';
import {faqsData} from './Data'

const Faqs = () => {
    const [faqs, setFaqs]= useState(faqsData);
    return (
        <main>
           <section>
            <h1>Faqs</h1>
               {faqs.map((faq)=> (<FAQ key={faq.id} {...faq} />))}
           </section>
        </main>
    );
};

export default Faqs;