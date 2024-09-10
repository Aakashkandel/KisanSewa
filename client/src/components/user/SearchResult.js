import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../api/useraxios'

function SearchResult() {

    const {keyword} = useParams();
    const fetchData=async()=>{
        try{
            const res = await axios.post('/search',{keyword})
            console.log(res.data);
        }catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchData()
      
    })

  return (
    <div></div>
  )
}

export default SearchResult