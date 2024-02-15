import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin , faGithub , faSquareXTwitter} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return ( 
        <footer className="p-4 w-3/4 mx-auto">
        <hr className="border-t border-gray-500 border-opacity-60 my-5" />
        <div className="container mx-auto flex justify-between p-4 ">
          <p className="text-sm color-white">© Portfolio</p>
          <div className="flex justify-center space-x-4 text-gray-200">
            <a href="https://www.linkedin.com/in/amit-naik-79295028a/"><FontAwesomeIcon icon={faLinkedin} className='hover:text-yellow-200'/></a>
            <a href="https://github.com/AmitNaik96"><FontAwesomeIcon icon={faGithub}  className='hover:text-yellow-200' /></a>
            <a href="https://twitter.com/"><FontAwesomeIcon icon={faSquareXTwitter} className='hover:text-yellow-200'/></a>
          </div>
        </div>
      </footer>
     );
}
 
export default Footer;