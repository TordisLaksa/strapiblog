import './About.scss'
import { useState, useEffect } from "react";
import axios from "axios";

export const About = () => {
    const [ apiData, setApiData ] = useState();
    
    useEffect(() => {
            const getData = async () => {
            const url = 'http://localhost:1337/api/about-contents?populate=*';
            const result  = await axios.get(url)
            setApiData(result.data.data)
            // console.log(result.data.data);

        }
        getData();
    }, [setApiData])

    return(
            <>
            {apiData && apiData.map((item, index) => {
                    return(
                <section key={index} id="sectionAbout">
                    <h2>{item.attributes.Title}</h2>
                    <figure key={index}>
                        {item.attributes.Img.data && item.attributes.Img.data.map((item, key) => {
                            return(
                                <img key={key} src={`http://localhost:1337${item.attributes.url}`}></img>
                                )
                            })}
                        </figure> 
                    
                    <article>
                        <p>{item.attributes.Article1}</p>
                        <p>{item.attributes.Article2}</p>
                        <p>{item.attributes.Article3}</p>
                    </article>
                </section>
                    )
                })}
            </>
        )
    }