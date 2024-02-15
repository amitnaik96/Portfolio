import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin , faGithub , faSquareXTwitter} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return ( 
        <section>
        <div className="container mx-auto flex space-x-4 px-5 py-20 flex-row justify-center w-full">
          <div className="w-1/2 p-4 md:w-1/4 lg:pr-20 pr-5  flex flex-col md:items-center   items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-6 font-semibold color-white underline underline-offset-8">Contact</h1>
            {/* <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">I'm Amit Naik</h1> */}
            <p className='mb-4 color-white font-semibold'>Email - <a href="mailto:amitnaikkwr@gmail.com" className='hover:text-yellow-200'>amitnaikkwr@gmail.com</a></p>
            <div className='flex  md:flex-row color-white font-semibold'>
              <p>Connect - </p>
              <a href="https://www.linkedin.com/in/amit-naik-79295028a/"><FontAwesomeIcon icon={faLinkedin} size='2x' className=' mx-4 color-yellow hover:text-gray-400'/></a>
              <a href="https://github.com/AmitNaik96"><FontAwesomeIcon icon={faGithub} size='2x' className=' mx-4 color-yellow hover:text-gray-400'/></a>
              <a href="https://twitter.com/"><FontAwesomeIcon icon={faSquareXTwitter} size='2x' className=' mx-4 color-yellow hover:text-gray-400'/></a>
            </div>
          </div>
        </div>
      </section>
     );
}
 
export default Contact;