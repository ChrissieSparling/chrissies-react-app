import React from 'react'
import { useParams } from 'react-router';

export default function User() {
    const params = useParams()
    return (
        <div>
        <h1>page for {params.user}</h1>
        </div>
    )
}
