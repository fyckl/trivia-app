import React from 'react'
import gif from '../Media/loading.gif'

export default function Loading() {
  return (
    <img src={gif} className="loading flex" alt="loading-gif" />
  )
}
