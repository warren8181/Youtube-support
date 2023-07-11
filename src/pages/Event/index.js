import React, { Component, useEffect, useState } from "react";
import { SiteClient } from 'datocms-client';
import Section from "./section";
import About from "./About";
import Price from "./Price";
import Faq from "./Faq";
import Schedule from "./Schedule";

const client = new SiteClient('4c9e2c2535ba3638c6c8b9d5bf5e77');

function Index()  {

    const [post, setPost] = useState([]);
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        client.items.all({ filter: { type: 'post' } })
            .then((post) => {
                console.log('post', post);
                setPost(post);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        client.items.all({ filter: { type: 'faq' } })
            .then((faqs) => {
                console.log('faqs', faqs)
                setFaqs(faqs);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <React.Fragment>
            {/* Hero Start */}
            <Section post={post} />

            {/* About */}
            <About />

            <Schedule />

            {/* FAQ */}
            <Faq faqs={faqs} />

            {/* Price */}
            <Price />

        </React.Fragment>
    );
}

export default Index;
