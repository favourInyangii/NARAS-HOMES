import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'
      style={{ backgroundImage: "url('/header_img.png')" }} id='Header'>
      <Navbar />
      <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white '>
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block mac-w-3xl font-semibold pt-20'>Everyone needs a Nara's home experience</h2>
        <div>
          <a href="">Projects</a>
          <a href="">Contact Us</a>
        </div>
      </div>
    </div>
  )
}

export default Header
