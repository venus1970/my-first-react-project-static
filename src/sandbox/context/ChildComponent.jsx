import React from 'react'
import GrandChildComponent from './GrandChildComponent'

export default function ChildComponent() {
  return (
    <div>Child Component
        <GrandChildComponent/>
    </div>
  )
}
