import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const footer = () => {
  return (
    <>
      <footer className='flex items-center justify-between max-w-md md:max-w-3xl mx-auto mt-auto py-4 w-full'>
        <p>@davedove</p>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/davedove86/" target='_blank'>
            <FaLinkedin size={18}/>
          </a>
          {/* <a href="#">
            <FaSquareXTwitter size={18}/>
          </a> */}
        </div>
        </footer>
    </>
  )
}
export default footer
