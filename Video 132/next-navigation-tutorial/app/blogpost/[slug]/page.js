"use client"
import React from 'react'
import { useParams, useRouter } from "next/navigation";

const blogpost = () => {
  const params = useParams()
  const router = useRouter()
  return (
    <div>{params.slug}
    <button type="button" onClick={() => router.push('/dashboard')}>
      Dashboard
    </button>
    </div>
    
  )
}

export default blogpost