const Projects = () => {
    return ( 
        <section>
        <div className="container px-5 py-20 mx-auto lg:w-3/4 color-white">
          <div className="flex flex-wrap justify-center -m-4" >
            {/* <!-- Card 1 --> */}
            <div className="p-4 lg:w-1/3 md:w-3/4">
              <div className="h-full border-2 border-gray-500 border-opacity-60 rounded-lg overflow-hidden">
                <img className="h-36 md:h-48 w-full object-cover object-center" src="./demo.png" alt="Card Image" />
                <div className="p-6">
                  <h1 className="title-font text-lg mb-3 font-semibold underline underline-offset-8">WriteScape</h1>
                  <p className="leading-relaxed mb-3 text-base">A React-Apollo GraphQL web application for managing blogs, allowing users to create and delete blog posts.</p>
                  <div className="flex items-center flex-wrap color-yellow">
                        <a href="https://github.com/amitnaik96/WriteScape" className="hover:text-gray-400">GitHub</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 lg:w-1/3 md:w-3/4">
              <div className="h-full border-2 border-gray-500 border-opacity-60 rounded-lg overflow-hidden">
                <img className="h-36 md:h-48 w-full object-cover object-center" src="./demo2.png" alt="Card Image" />
                <div className="p-6">
                  <h1 className="title-font text-lg  mb-3 font-semibold underline underline-offset-8">MernAuth</h1>
                  <p className="leading-relaxed mb-3 text-base">This MERN authentication web app employs JWT storage in HTTP-Only cookies, integrating Redux Toolkit and React Bootstrap for efficient state management and UI development.</p>
                  <div className="flex items-center flex-wrap color-yellow" >
                        <a href="https://github.com/amitnaik96/MERN-Auth" className="hover:text-gray-400">GitHub</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 lg:w-1/3 md:w-3/4">
              <div className="h-full border-2 border-gray-500 border-opacity-60 rounded-lg overflow-hidden">
                <img className="h-36 md:h-48 w-full object-cover object-center" src="./groovesync.png" alt="Card Image" />
                <div className="p-6">
                  <h1 className="title-font text-lg  mb-3 font-semibold underline underline-offset-8">GrooveSync</h1>
                  <p className="leading-relaxed mb-3">A React-Node application for listening to songs present on YouTube.</p>
                  <div className="flex items-center flex-wrap space-x-3 color-yellow ">
                    <a href="https://github.com/amitnaik96/GrooveSync" className="hover:text-gray-400">GitHub</a>
                    <a href="https://groovesync.vercel.app/" className="hover:text-gray-400">Demo</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 lg:w-1/3 md:w-3/4">
              <div className="h-full border-2 border-gray-500 border-opacity-60 rounded-lg overflow-hidden">
                <img className="h-36 md:h-48 w-full object-cover object-center" src="./demo3.png" alt="Card Image" />
                <div className="p-6">
                  <h1 className="title-font text-lg  mb-3 font-semibold underline underline-offset-8">Newsletter-Signup</h1>
                  <p className="leading-relaxed mb-3">A web app using Bootstrap, Express, and Mailchimp API for seamless newsletter signups, ensuring user-friendly interface and efficient backend handling.</p>
                  <div className="flex items-center flex-wrap space-x-3 color-yellow ">
                    <a href="https://github.com/amitnaik96/NewsLetter" className="hover:text-gray-400">GitHub</a>
                    <a href="https://spotless-crow-panama-hat.cyclic.app/" className="hover:text-gray-400">Demo</a>
                  </div>
                </div>
              </div>
            </div>



            </div>
            </div>
            </section>
     );
}
 
export default Projects;