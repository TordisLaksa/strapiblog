import './Blog.scss'
import axios from 'axios'
import { useState, useEffect } from "react";

export const Blog = () => {
    const [ apiData, setApiData ] = useState();
    
    useEffect(() => {
            const getData = async () => {
            const url = 'http://localhost:1337/api/authors/?populate=*';
            const result  = await axios.get(url)
            setApiData(result.data.data)

        }
        getData();
    }, [setApiData])
    
    
    return(
        <section id='sectionBlog'>
            {apiData && apiData.map((item, index) =>{
    
                return(
                    <figure key={index}>
                        <figcaption>
                            <h2>{item.attributes.Title}</h2>
                            <h3>By {item.attributes.Author}</h3>
                            <article>
                                <p>{item.attributes.Article_1}</p>
                                <p>{item.attributes.Article_2}</p>
                            </article>
                        </figcaption>
                        {item.attributes.Image.data && item.attributes.Image.data.map((item, index) => {

                            return(
                                <img key={index} src={`http://localhost:1337${item.attributes.url}`} alt={item.attributes.name}></img>
                            )
                            
                        })}
                    </figure>
                )
            })}

        </section>
        )
}