import { StrictMode } from 'react'
import React from "react"
import ReactDOM from 'react-dom/client'
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import './style.css'
import Badge from "./components/Badges/Badges"
import Banner from "./components/Banners/Banners"
import Card from "./components/Cards/Card"

function App() {

  const badgeStyles = {
    fontSize: "20px", 
    fontWeight: "600",
    cursor: "pointer"
  }

  return (
    <>
      <Badge  color='green' shape='pill'
        onClick={() => console.log("working")}
        style={badgeStyles}>
        Hello
      </Badge>

      <Banner type="error">
        <Banner.Title>
          Error 404
        </Banner.Title>

        <Banner.Desc>
          Cannot access server
        </Banner.Desc>
      </Banner>

      <Card></Card>

    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App /> 
  </StrictMode>
);
