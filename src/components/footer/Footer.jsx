import './Footer.scss';
import { useState, useEffect } from "react";
import axios from "axios";

export const Footer = () => {
    const [ apiData, setApiData ] = useState();
    
    useEffect(() => {
            const getData = async () => {
            const url = 'http://localhost:1337/api/footers?populate=*';
            const result  = await axios.get(url)
            setApiData(result.data.data)
            // console.log(result.data.data);
            
        }
        getData();
    }, [setApiData])
    return(
        <footer>
            <ul>
            {apiData && apiData.map((item, key) => {
                return(
                    <li key={key}>
                        <a href={`https://${item.attributes.Link}`} target="_blank"><img src={`http://localhost:1337${item.attributes.Icon.data.attributes.url}`} alt={item.attributes.Title} /> {item.attributes.Title}</a>
                    </li>
                    )
                })}
            </ul>
        </footer>
    )
}