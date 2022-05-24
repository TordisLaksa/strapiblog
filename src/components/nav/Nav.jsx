import './Nav.scss';
import axios from 'axios'
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";


export const Navigation = () => {
       const [ apiData, setApiData ] = useState();
    
    useEffect(() => {
            const getData = async () => {
            const url = 'http://localhost:1337/api/navigation-components/?populate=*';
            const result  = await axios.get(url)
            setApiData(result.data.data[0].attributes.NavigationStuff)
            // console.log(result.data.data[0].attributes.NavigationStuff);
            
        }
        getData();
    }, [setApiData])
    return(
        <nav>
            <ul>
                {apiData && apiData.map((item, index) => {
                    // console.log(item);
                    return(
                    <li key={index}>
                        <Link to={item.Link}>{item.Name}</Link>
                    </li>
                )})}
            </ul>
    </nav>
)
}