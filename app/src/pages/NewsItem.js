import {React,useState} from 'react'
import Iframe from './Createiframe'
import{
    Outlet,Link
} from "react-router-dom"
import Createiframe from './Createiframe'
export default function NewsItem({item}){
    const websiteurl=item.url
    const website = websiteurl.split('https://').pop().split('/')[0]

    //const date = item.publishedAt
    //const formatDate=date.replace('T',' ')
    //const formatTime= formatDate.replace('Z','')

    return(   
        // <a href={item.url} className="article">
        //     <Iframe url={item.url}></Iframe>
        <div className="article-content">
            <div className="article-title">
                <Link to="/Createiframe" state={{item:item}}>{item.title}</Link> 
                
            </div>
        </div>
        // </a>
    )
}