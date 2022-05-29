import axios from 'axios'
import { useState, useEffect } from "react";
import { Navigation } from '../nav/Nav';
import './Header.scss'


export const Header = () => {
    const [ apiData, setApiData ] = useState();
    
    useEffect(() => {
            const getData = async () => {
            const url = 'http://localhost:1337/api/upload/files';
            const result  = await axios.get(url)
            setApiData(result.data)
        }
        getData();
    }, [setApiData])
    
    return(
        <header>
            {apiData && apiData.map((item, index) => {
                if(item.id === 21){
                    return(
                        <img key={index} src={`http://localhost:1337${item.url}`} alt={item.caption} />
                        )   
                    }            
            })}
            
            <Navigation />
        </header>
    )
}

