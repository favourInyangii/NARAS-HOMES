import { assets } from '../assets/assets'

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{' '}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Our Brand
        </span>
      </h1>

      <p className="text-gray-500 max-w-80 text-center mb-8">
        Bringing your vision to life, Creating the perfect home for you
      </p>

      {/* SIDE-BY-SIDE CONTAINER */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        {/* IMAGE */}
        <img
          src={assets.brand_img}
          alt="Brand"
          className="w-full sm:w-1/2 max-w-lg"
        />

        {/* TEXT */}
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Experience</p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Projects Completed</p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Mn. Sq. Ft Delivered</p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <p className='my-10 max-w-lg'>Naras Homes is a modern real estate brand dedicated to helping individuals and families find properties that truly feel like home. We specialize in quality residential and investment properties, offering transparent processes, expert guidance, and a seamless buying experience. At Naras Homes, we don’t just sell properties—we help you secure your future with confidence.</p>
          <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default About
