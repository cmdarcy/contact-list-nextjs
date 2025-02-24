'use client'
import { useParams } from 'next/navigation'
import React from 'react'

function Contact() {
    const {id} = useParams()
  return (
    <div>Contact {id}</div>
  )
}

export default Contact