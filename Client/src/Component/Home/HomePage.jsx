import Footer from "../Footer/Footer";
import Content from "./Content/Content";
import Crisis from "./Crisis/Crisis";
import Header from "./Header/Header";
import ThePlan from "./ThePlan/ThePlan";
import TheSolution from "./TheSolution.jsx/TheSolution";

export default function HomePage() {
  return (
    <div>
        <Header />      
        <Content />
        <Crisis />
        <TheSolution />
        <ThePlan />  
        <Footer />  
    </div>
  )
}
