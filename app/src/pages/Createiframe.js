import React from 'react'
import {useLocation} from 'react-router-dom'
import {Typography} from '@mui/material'

export default function Createiframe(){
    const location=useLocation()
    const {item}=location.state
    return(
        <div style={{height:"100vh"}}>
            <iframe src={item.url} name="iframe_a" height="100%" width="100%" title="Iframe Example"></iframe>  
        </div>
    )
}