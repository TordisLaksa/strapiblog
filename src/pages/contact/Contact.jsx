import './Contact.scss';
import { useState, useEffect } from "react";
import axios from "axios";

export const Contact = () => {
    const [ apiData, setApiData ] = useState();
    
    useEffect(() => {
            const getData = async () => {
            const url = 'http://localhost:1337/api/formulars';
            const result  = await axios.get(url)
            setApiData(result.data.data)
            
        }
        getData();
    }, [setApiData])
    
    
    return(
        <>
            <ContactContent />
        {apiData && apiData.map((item, index) => {
            return(
                <section key={index} id='sectionContact'>
                    <ContactImg />
                    <form>
                        <fieldset>
                            <legend><h2>Contact:</h2></legend>
                            <label htmlFor="fullName">Please enter your full name</label>
                            <input type="text" id="fullName" name="fullName" placeholder={`Fx ${item.attributes.FullName}`} ></input>
                            <label htmlFor="email">Please enter your email</label>
                            <input type="email" name="email" id="email" placeholder={`Fx ${item.attributes.Email}`}></input>
                            <label htmlFor="number">Please enter your number</label>
                            <input type="number" name="number" id="number" placeholder={`Fx ${item.attributes.Number}`}></input>
                            <label htmlFor="message">Please enter your message</label>
                           <textarea name="message" id="message" placeholder={`Fx ${item.attributes.Message}`}></textarea>
                            <div id='radioDivider'>
                                <div className='radio'>
                                    <label htmlFor="contact">Jeg vil gerne kontaktes via email</label>
                                    <input name="contact" type="radio" defaultChecked></input>
                                </div>
                                <div className='radio'>
                                    <label htmlFor="contact">Jeg vil gerne kontaktes via email</label>
                                    <input name="contact" type="radio"></input>
                                </div>
                            </div>
                                <button type="button">Send</button>
                        </fieldset>
                    </form>
                </section>
                )
            })}
        </>
    )
}

export const ContactContent = () => {
    const [ apiData, setApiData ] = useState();
    
    useEffect(() => {
            const getData = async () => {
            const url = 'http://localhost:1337/api/contact-contents?populate=*';
            const result  = await axios.get(url)
            setApiData(result.data.data)
            
        }
        getData();
    }, [setApiData])
    return(
        <>
        {apiData && apiData.map((item, index) => {
            // console.log(item.attributes.CenterCake.data);
            return(
                <section key={index} id='ContactTextSection'>
                    <h2>{item.attributes.Title}</h2>
                    <figure>
                    {item.attributes.CenterCake.data && item.attributes.CenterCake.data.map((item, key) => {
                        return(
                            <img key={key} src={`http://localhost:1337${item.attributes.url}`} alt={item.attributes.name} />
                        )
                    })}
                    </figure>
                    <article>
                        <p>{item.attributes.Article1}</p>
                        <p>{item.attributes.Article2}</p>
                        <p>{item.attributes.Article3}</p>
                        <p>{item.attributes.Article4}</p>
                    </article>
                </section>
            )
        })}
        </>
    )

}

export const ContactImg = () => {
    const [ apiData, setApiData ] = useState();
    
    useEffect(() => {
            const getData = async () => {
            const url = 'http://localhost:1337/api/contact-contents?populate=*';
            const result  = await axios.get(url)
            setApiData(result.data.data)
            
        }
        getData();
    }, [setApiData])
    return(
        <>
        {apiData && apiData.map((item, index) => {
            return(
                <img key={index} src={`http://localhost:1337${item.attributes.ContactCake.data.attributes.url}`} alt="" />
                    
                
            )
        })}
        </>
    )

}