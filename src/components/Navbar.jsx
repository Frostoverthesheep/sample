import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='bg-red-500 text-white flex justify-between p-5'>
        <h1 className="3-xl">POGI AKO</h1>
        <div >
            <ul className='font-bold flex space-x-5'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="">Portfolio</Link>
                <Link to="">Contact Us</Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar