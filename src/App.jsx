import MainGallery from "../routes/MainGallery/MainGallery";
import CreatorsGallery from "../routes/CreatorsGallery/CreatorsGallery"
import 
{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
    <Routes>
      
<Route exact path="/" element={<MainGallery/>}/>
<Route path="/creator" element={<CreatorsGallery/>}/>
    </Routes>

 

    </Router>
   
    
  )
}
 
export default App;
