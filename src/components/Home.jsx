import Projects from "./Projects";
import Contact from "./Contact";
import Hero from "./Hero";


const Home = () => {
    return ( 
        <div className="home">
            <Hero />
            <Projects />
            <Contact />
        </div>
     );
}
 
export default Home;