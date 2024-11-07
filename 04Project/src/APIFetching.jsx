import React, { useEffect, useState } from 'react'
import './App'
import axios from 'axios'

const APIFetching = () => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                setError(false)
                // const response = await axios.get('https://dummyjson.com/products');
                const response = await axios.get('https://jsonplaceholder.typicode.com/postsd');
                console.log(response.data);
                setProducts(response.data)
                setLoading(false)
            } catch (error) {
                setError(true)
                setLoading(false)
            }
        })()
    }, [])

    if(error){
        return <div>Error fetching products</div>
    }
    if(loading){
        return <div>Loading...</div>
    }

    return (
        <>
            <p>
                Number of Product : {products.length}
            </p>
            APIFetching</>
    )
}

export default APIFetching