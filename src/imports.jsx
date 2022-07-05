let x=2;
while (x!=26)
{
    x+=1;
   
    y= `  <ParallaxLayer offset={o+=1}  speed={v-=0.1}  factor={1}
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
   }}>>
   <img src={p${x}} alt="Designer Profile Img" />
    </ParallaxLayer>`;
    console.log(y)
    
   
}

