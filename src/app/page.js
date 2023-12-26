'use client'
import { useState } from "react"

export default function Home() {
  const [showText, setShowText] = useState(false);
  return (
    <main>
      <h1>Home Page</h1>
      <button>click me</button>
      <div>
        <label htmlFor="randomText">Enter Random Text:</label>
        <input id="randomText"/>
      </div>
      
      <div>
        <input placeholder="Search..."/>
      </div>
      <div>
        <input defaultValue="AUDI Q5"/>
      </div>
      <div>
        {showText && <span>This is the text!</span> }
        <button onClick={() => setTimeout(() => {setShowText(s => !s)},1500) }>Show Text</button>
      </div>
    </main>
  )
}
