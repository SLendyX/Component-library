import { StrictMode } from 'react'
import React from "react"
import ReactDOM from 'react-dom/client'
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import './style.css'
import Badge from "./components/Badges/Badges"
import Banner from "./components/Banners/Banners"
import Card from "./components/Cards/Cards"
import Testimonial from './components/Testimonials/Testimonial'
import image from "./assets/image.png"
import logo from "./assets/logo.png"

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

      <br/><br/>

      <Card>
        <Card.Title>
          Easy Deployment
        </Card.Title>
        <Card.Desc>
          Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. 
          Et magna sit morbi lobortis.
        </Card.Desc>
      </Card>

      <br/><br/><br/><br/><br/><br/><br/><br/>

      <Testimonial logo={logo}>
        <Testimonial.Quote>
          Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit. 
          Sed urna nulla vitae laoreet augue. 
          Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
          </Testimonial.Quote>
          <Testimonial.Footer>
            <Testimonial.Author>
              May Andersons
            </Testimonial.Author>
            <Testimonial.Company>
              Workcation, CTO
            </Testimonial.Company>
          </Testimonial.Footer>
      </Testimonial>

      <br/><br/><br/><br/>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App /> 
  </StrictMode>
);
