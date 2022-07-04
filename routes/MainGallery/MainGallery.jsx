import './maingallery.css'
import { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import p1 from './assets/images/1.jpg'
import p2 from './assets/images/2.jpg'
import p3 from './assets/images/3.jpg'
import p4 from './assets/images/4.jpg'
import p5 from './assets/images/5.jpg'
import p6 from './assets/images/6.jpg'
import p7 from './assets/images/7.jpg'
import p8 from './assets/images/8.jpg'
import p9 from './assets/images/9.jpg'
import p10 from './assets/images/10.jpg'
import p11 from './assets/images/11.jpg'
import p12 from './assets/images/12.jpg'
import p13 from './assets/images/13.jpg'
import p14 from './assets/images/14.jpg'
import p15 from './assets/images/15.jpg'
import p16 from './assets/images/16.jpg'
import p17 from './assets/images/17.jpg'
import p18 from './assets/images/18.jpg'
import p19 from './assets/images/19.jpg'
import p20 from './assets/images/20.jpg'
import p21 from './assets/images/21.jpg'
import p22 from './assets/images/22.jpg'
import p23 from './assets/images/23.jpg'
import p24 from './assets/images/24.jpg'
import p25 from './assets/images/25.jpg' 
import land from './assets/images/land.png'


export default function MainGallery() {
  const ref = useRef()
  let o=0
  let v=0
  //let img=0;
  return (
    <div className='MainGallery' ref={ref}>
   
    <Parallax pages={27}>
    <ParallaxLayer offset={0} factor={27} speed={0}
    style={{backgroundImage: `url(${land})`,backgroundSize:`cover`}}>
          <img src={p1} alt="Designs by..." />
             <caption>©️2022 Designs by Breitner, Lanesteppers™️.</caption>
             <p>Engineering by Jerry Ochieng.</p>
             <p>Created for the visuals.</p>
            <p>So glad that you could make it...</p>
        </ParallaxLayer>
    
        <ParallaxLayer offset={o+=1}  speed={1}  factor={1}
    style={{
            backgroundImage: `url(${p2})`,
            backgroundSize: 'contain',backgroundPosition:"center",
          }} >
             
        </ParallaxLayer>
 <ParallaxLayer offset={o+=1}  speed={v+=0.5}  factor={1}
    style={{
            backgroundImage: `url(${p3})`,
            backgroundSize: 'contain',backgroundPosition:"center",
          }} >
             
        </ParallaxLayer>
 <ParallaxLayer offset={o+=1}  speed={v+=0.5}  factor={1}
    style={{
            backgroundImage: `url(${p4})`,
            backgroundSize: 'contain',backgroundPosition:"center",
          }} >
             
        </ParallaxLayer>
 <ParallaxLayer offset={o+=1}  speed={v+=0.5}  factor={1}
    style={{
            backgroundImage: `url(${p5})`,
            backgroundSize: 'contain',backgroundPosition:"center",
          }} >
             
        </ParallaxLayer>
 <ParallaxLayer offset={o+=1}  speed={v+=0.5}  factor={1}
    style={{
            backgroundImage: `url(${p6})`,
            backgroundSize: 'contain',backgroundPosition:"center",
          }} >
             
        </ParallaxLayer>
 <ParallaxLayer offset={o+=1}  speed={v+=0.5}  factor={1}
    style={{
            backgroundImage: `url(${p7})`,
            backgroundSize: 'contain',backgroundPosition:"center",
          }} >
             
        </ParallaxLayer>
 <ParallaxLayer offset={o+=1}  speed={v+=0.5}  factor={1}
    style={{
            backgroundImage: `url(${p8})`,
            backgroundSize: 'contain',backgroundPosition:"center",
          }} >
             
        </ParallaxLayer>
 <ParallaxLayer offset={o+=1}  speed={v+=0.5}  factor={1}
    style={{
            backgroundImage: `url(${p9})`,
            backgroundSize: 'contain',backgroundPosition:"center",
          }} >
             
        </ParallaxLayer>
 <ParallaxLayer offset={o+=1}  speed={v+=0.5}  factor={1}
    style={{
            backgroundImage: `url(${p10})`,
            backgroundSize: 'contain',backgroundPosition:"center",
          }} >
             
        </ParallaxLayer>
 <ParallaxLayer offset={o+=1}  speed={v+=0.5}  factor={1}
    style={{
            backgroundImage: `url(${p11})`,
            backgroundSize: 'contain',backgroundPosition:"center",
          }} >
             
        </ParallaxLayer>
 <ParallaxLayer offset={o+=1}  speed={v+=0.5}  factor={1}
    style={{
            backgroundImage: `url(${p12})`,
            backgroundSize: 'contain',backgroundPosition:"center",
          }} >
             
        </ParallaxLayer>
 <ParallaxLayer offset={o+=1}  speed={v+=0.5}  factor={1}
    style={{
            backgroundImage: `url(${p13})`,
            backgroundSize: 'contain',backgroundPosition:"center",
          }} >
             
        </ParallaxLayer>
 <ParallaxLayer offset={o+=1}  speed={v+=0.5}  factor={1}
    style={{
            backgroundImage: `url(${p14})`,
            backgroundSize: 'contain',backgroundPosition:"center",
          }} >
             
        </ParallaxLayer>
 <ParallaxLayer offset={o+=1}  speed={v+=0.5}  factor={1}
    style={{
            backgroundImage: `url(${p15})`,
            backgroundSize: 'contain',backgroundPosition:"center",
          }} >
             
        </ParallaxLayer>
 <ParallaxLayer offset={o+=1}  speed={v+=0.5}  factor={1}
    style={{
            backgroundImage: `url(${p16})`,
            backgroundSize: 'contain',backgroundPosition:"center",
          }} >
             
        </ParallaxLayer>
 <ParallaxLayer offset={o+=1}  speed={v+=0.5}  factor={1}
    style={{
            backgroundImage: `url(${p17})`,
            backgroundSize: 'contain',backgroundPosition:"center",
          }} >
             
        </ParallaxLayer>
 <ParallaxLayer offset={o+=1}  speed={v+=0.5}  factor={1}
    style={{
            backgroundImage: `url(${p18})`,
            backgroundSize: 'contain',backgroundPosition:"center",
          }} >
             
        </ParallaxLayer>
 <ParallaxLayer offset={o+=1}  speed={v+=0.5}  factor={1}
    style={{
            backgroundImage: `url(${p19})`,
            backgroundSize: 'contain',backgroundPosition:"center",
          }} >
             
        </ParallaxLayer>
 <ParallaxLayer offset={o+=1}  speed={v+=0.5}  factor={1}
    style={{
            backgroundImage: `url(${p20})`,
            backgroundSize: 'contain',backgroundPosition:"center",
          }} >
             
        </ParallaxLayer>
 <ParallaxLayer offset={o+=1}  speed={v+=0.5}  factor={1}
    style={{
            backgroundImage: `url(${p21})`,
            backgroundSize: 'contain',backgroundPosition:"center",
          }} >
             
        </ParallaxLayer>
 <ParallaxLayer offset={o+=1}  speed={v+=0.5}  factor={1}
    style={{
            backgroundImage: `url(${p22})`,
            backgroundSize: 'contain',backgroundPosition:"center",
          }} >
             
        </ParallaxLayer>
 <ParallaxLayer offset={o+=1}  speed={v+=0.5}  factor={1}
    style={{
            backgroundImage: `url(${p23})`,
            backgroundSize: 'contain',backgroundPosition:"center",
          }} >
             
        </ParallaxLayer>
 <ParallaxLayer offset={o+=1}  speed={v+=0.5}  factor={1}
    style={{
            backgroundImage: `url(${p24})`,
            backgroundSize: 'contain',backgroundPosition:"center",
          }} >
             
        </ParallaxLayer>
 <ParallaxLayer offset={o+=1}  speed={v+=0.5}  factor={1}
    style={{
            backgroundImage: `url(${p25})`,
            backgroundSize: 'contain',backgroundPosition:"center",
          }} >
             
        </ParallaxLayer>
 <ParallaxLayer offset={o+=1}  speed={v+=0.5}  factor={1}
    style={{
            backgroundImage: `url()`,
            backgroundSize: 'contain',backgroundPosition:"center",
          }} >
             
        </ParallaxLayer>
      </Parallax>

    </div>
  )
}
