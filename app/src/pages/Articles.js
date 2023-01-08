import React, {useState,useEffect} from 'react'
import NewsGrid from './NewsGrid'
export default function Article(){
    const [items,setItems]= useState([])
    const [active,setActive]=useState(1)
    const [category,setCategory]=useState('world')
    

    useEffect(()=> {
        fetch(`https://inshorts.deta.dev/news?category=${category}`)
        .then(res => res.json())
        .then(articles=>setItems(articles.data))
    },[category])


    
    return(
        <div className="news">
            <h1 className='title'>News</h1>
            <NewsGrid items={items}/>
        </div> 
        
    )
    
}