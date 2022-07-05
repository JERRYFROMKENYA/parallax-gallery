import './CreatorsGallery.css'
import { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import p1 from './assets/images/1.jpg'
import p2 from './assets/images/2.jpg'
import p3 from './assets/images/3.jpg'
import land from './assets/images/land.png'
import 
{
  //BrowserRouter as Router,
  //Routes,
  //Route,
  Link
} from "react-router-dom";


export default function CreatorsGallery() {
  const ref = useRef()
  let o=0
  let v=0
  let BG=9
  //let img=0;
  return (
    <div className='CreatorsGallery' ref={ref}>
     
   
    <Parallax pages={BG}>
    <ParallaxLayer factor={BG}
    style={{backgroundImage: `url(${land})`,backgroundSize:`cover`}}>
           
          </ParallaxLayer>
          <ParallaxLayer  offset={o+=1}  speed={1}  factor={1} >
  <h2>Scroll Down
          ⬇️⬇️⬇️
          </h2>
          <br />
          <h2>
          or
          </h2>
          <h2>
            <Link className='Link' to="/">Go Home!</Link>
          </h2>

          </ParallaxLayer>
    <ParallaxLayer  offset={o+=1}  speed={1}  factor={1} >
              <h2>Created for the visuals.</h2>
            </ParallaxLayer>
            <ParallaxLayer  offset={o+=1}  speed={1}  factor={1} >
              <h2>So glad that you could make it...</h2>
            </ParallaxLayer>
             
        <ParallaxLayer  offset={o+=1}  speed={v+=1}  factor={2} style={{
               display: "grid",
               justifyContent: "center",
               alignItems: "center",
               color: "white",
            }}>
        <img src={p1} alt="Designer Profile Img" />
        <br />
        <h2 className='fadetext'>©️2022 Designs by 
          <br />
        <a href="https://www.instagram.com/breitner.ug">Davis Breitner</a>,
        <br />
         <a href="https://www.instagram.com/lanesteppers">Lanesteppers™️</a>.</h2>
        </ParallaxLayer>
        <ParallaxLayer  offset={o+=1}  speed={v+=1}  factor={1} >
          <h2>Engineering by <a href="https://www.jerryfromkenya.space">JERRY OCHIENG</a>.</h2>
        </ParallaxLayer>

      </Parallax>

    </div>
  )
}
