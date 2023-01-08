import {React,useState} from 'react'
import Iframe from './Createiframe'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions,Box } from '@mui/material';
import "./NewsItem.css"

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
        <Card sx={{display:"flex",border: '1px solid black' }}>
            
            <CardMedia
                component="img"
                height="300"
                sx={{ width: 300 }}
                image={item.imageUrl}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>  
            <div className="article-content">
                <div className="article-title">
                    <Link to="/Createiframe" state={{item:item}} className="item-title">{item.title}</Link> 
                </div>
                <div className="image">
                    <Typography variant="h5">{item.content}</Typography>
                </div>
            </div>
            </CardContent>  
            </Box>
        </Card>
    )
}