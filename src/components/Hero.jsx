import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin , faGithub , faSquareXTwitter} from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
    return ( 
      <section>
        <div className="container mx-auto flex space-x-4 px-5 py-20 md:flex-row flex-col items-center w-2/3 ">
          <div className="lg:flex-grow p-7 md:w-4/5 sm:w-full sm:p-2  lg:pr-20 pr-5 md:pr-14 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium color-white underline underline-offset-8">Hi There!</h1>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold color-white">I'm Amit Naik</h1>
            <p className="mb-8 leading-relaxed color-white">I'm an aspiring software developer passionate about crafting clean and efficient code to solve real-world problems. Let's collaborate and build something amazing together.</p>
            <div className="flex justify-center space-x-4">
            <a href="https://www.linkedin.com/in/amit-naik-79295028a/"><FontAwesomeIcon icon={faLinkedin} size='2x' className='color-yellow hover:text-gray-400'/></a>
            <a href="https://github.com/AmitNaik96"><FontAwesomeIcon icon={faGithub} size='2x' className='color-yellow hover:text-gray-400'/></a>
            <a href="https://twitter.com/"><FontAwesomeIcon icon={faSquareXTwitter} size='2x' className='color-yellow hover:text-gray-400'/></a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-1/3 md:w-1/2  md:mb-0 mb-10">
            <img className="object-cover object-center rounded" alt="hero" src="./Architecture Logo.png" />
          </div>
        </div>
      </section>
     );
}
 
export default Hero;