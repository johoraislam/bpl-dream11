import PropTypes from 'prop-types'
import logo from '../../assets/assets/logo-footer.png'

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white pt-36 py-4 mt-12 ">
      <div className="container mx-auto text-center">
        <img src={logo} alt="" className="mx-auto mb-2" />
      </div>
      <section className='flex  flex-col md:flex-row justify-evenly  items-center gap-8 container mx-auto my-8'>
        <div className='flex-1'>
            <h1 className='text-2xl font-semibold mb-2'>About Us</h1>
            <p>
                We are a passionate team dedicated to bringing you the best experience in fantasy sports. Our platform allows you to create your own team, manage players, and compete with others.
            </p>
        </div>
        <div className='flex-1 ml-8'>
            <h1 className='text-2xl font-semibold'>Quick links</h1>
            <ul className='list-decimal py-2'>       
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        <div className='flex-1'>
            <h1 className='text-2xl font-semibold mb-2'>Subscribe</h1>
            <p>Subscribe to our newsletter for the latest updates and offers!</p>
            <form className='mt-4'>
                <input className='text-gray-800 border border-gray-300 py-2 px-4 rounded-bl-lg rounded-tl-lg bg-white' type="email" placeholder="Enter your email" required />
                <button className='bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 text-black font-bold py-2 px-4 rounded-br-lg rounded-tr-lg border border-amber-400' type="submit">Subscribe</button>
            </form>
        </div>
      </section>
      <hr className='my-8 border-gray-600' />
      <div className='text-center text-gray-400'>
        <p className='text-lg font-bold'>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>


    <div className="absolute mx-auto bg-white/30 backdrop-blur-md p-8  border-white border-2 rounded-2xl text-center  -top-0 -translate-y-[50%] translate-x-[45%] ">
        <div className='px-32 py-8 rounded-2xl bg-gradient-to-r from-pink-200 via-amber-50 to-blue-200'>
            <h1 className='text-4xl text-black font-bold'>Subscribe to our newsletter</h1>
            <h2 className='text-2xl text-gray-500'>for the latest updates and offers!</h2>
            <form className='mt-4 '>
                <input className='text-gray-800 border border-gray-300 py-4 px-8 rounded-lg  bg-white' type="email" placeholder="Enter your email" required />
                <button className='bg-gradient-to-r from-pink-200 via-amber-300 to-amber-400 text-black font-bold py-4 px-8 rounded-lg  border border-amber-400 ml-2' type="submit">Subscribe</button>
            </form>
        </div>
    </div>
    </footer>
  )
}

Footer.propTypes = {}

export default Footer