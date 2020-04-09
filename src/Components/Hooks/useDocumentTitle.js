import React,{useState, useEffect} from 'react'

export default function useDocumentTitle({ title }){
    useEffect(() => {
        document.title = title
    },[title])
    return null
}