import './Home.scss'
import axios from 'axios'
import { useState, useEffect } from "react";

export const Home = () => {
    const [ apiData, setApiData ] = useState();
    
    useEffect(() => {
            const getData = async () => {
            const url = 'http://localhost:1337/api/categories?populate=*';
            const result  = await axios.get(url)
            setApiData(result.data.data)
            // console.log(result.data.data);
            
        }
        getData();
    }, [setApiData])
    
    
    return(
        <section id="sectionHome">
            {apiData && apiData.map((item, index) => {
                return(
                    <ol key={index}>
                        <h2>{item.attributes.Name}</h2>
                        {item.attributes.blogs.data && item.attributes.blogs.data.map((item, key) => {
                            return(
                                <li key={key}>
                                    <p>{item.attributes.Author}</p>
                                    <p>{item.attributes.Title}</p>
                                    <p>{item.attributes.Date}</p>
                                </li>
                            )
                        })}
                    </ol>
                )
            })}
            
        </section>
        )
    }