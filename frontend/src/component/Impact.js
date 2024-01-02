import Intro from "./Introduction/Introduction"
import Impact from './Impact/Impact';
import Gallery from "./Gallery/gallery";
import Services from "./Services/Services";
import Testimonials from './Testimonials/Testimonials';
import "./impact.css"

function Impactpage(){


return(
    <div className="holder">
    <Intro />
    <Impact />
   <Gallery />
   <Services />
    <Testimonials />
  </div>
)
}
export default Impactpage;