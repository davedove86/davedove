import Image from 'next/image';
import Profile from '@/assets/images/profile.png';
import unive from '@/assets/images/unive.jpg';
import { TbPhotoFilled } from "react-icons/tb";

const HomePage = () => {
	return <div>
    <section id='about' className='max-w-md md:max-w-3xl mx-auto'>
      <div className="flex">
        <Image src={Profile} alt="Dave Dove" width={128} height={128} />
      </div>
      <h1 className='text-3xl font-medium text-dark dark:text-white'>Dave Dove</h1>
      <p className='max-w-md md:max-w-md'>Hi there, I am a software engineer who builds for the web with a design-oriented approach. I currently run my own Web Design Agency, <a href='https://www.dovedesign.io' target='blank'>Dove Design</a> which design and builds websites for businesses.</p>
    </section>

    {/* TODO: Add grey shadow on dark mode projects boxes */}
     <section id='projects' className='max-w-md md:max-w-3xl mx-auto'>
      <h2 className='text-2xl font-bold mb-6'>Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='shadow-md rounded-lg dark:shadow-gray-500'>
             <div className="flex items-center justify-center h-64">
              <Image src={unive} alt="Unive App Screenshot"/>
            </div>
            <div className="p-4">
              <h2 className='text-2xl font-bold my-2'>Unive</h2>
              <p className='my-2'>Unive is a web based dashboard application for students to track their courses, achievements, appointments and details their course notes. This application is under development and will be ready to launch soon.</p>
            </div>
          </div>
          <div className='shadow-md rounded-lg dark:shadow-gray-500'>
            <div className="flex items-center justify-center h-64">
              <TbPhotoFilled size={100} />
            </div>
            <div className="p-4">
              <h2 className='text-2xl font-bold my-2'>Coming Soon</h2>
              <p className='my-2'>This application is in development and is not yet ready to showcase on my portfolio</p>
            </div>
          </div>
          <div className='shadow-md rounded-lg dark:shadow-gray-500'>
            <div className="flex items-center justify-center h-64">
              <TbPhotoFilled size={100} />
            </div>
            <div className="p-4">
              <h2 className='text-2xl font-bold my-2'>Coming Soon</h2>
              <p className='my-2'>This application is in development and is not yet ready to showcase on my portfolio</p>
            </div>
          </div>
          <div className='shadow-md rounded-lg dark:shadow-gray-500'>
            <div className="flex items-center justify-center h-64">
              <TbPhotoFilled size={100} />
            </div>
            <div className="p-4">
              <h2 className='text-2xl font-bold my-2'>Coming Soon</h2>
              <p className='my-2'>This application is in development and is not yet ready to showcase on my portfolio</p>
            </div>
          </div>
        </div>
     </section>

    <section id='contact' className='max-w-md md:max-w-3xl mx-auto'>
      <h2 className='text-2xl font-bold mb-2'>Contact</h2>
      <p className='mb-6'>If you would like to get in touch with me, please send me an email at</p>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row items-end gap-2">
          <p className='text-lg'>Email:</p>
          <a href='mailto:davedove@icloud.com' className='text-lg'>davedove@icloud.com</a>
        </div>

         <div className="flex flex-row items-end gap-2">
          <p className='text-lg'>Phone:</p>
          <a href='tel:07540599633' className='text-lg'>07540 599633</a>
        </div>

        <div className="flex flex-row items-end gap-2">
          <p className='text-lg'>LinkedIn:</p>
          <a href="https://www.linkedin.com/in/davedove86/" target='_blank' className='text-lg'>@davedove86</a>
        </div>

      </div>

    </section>

  {/* TODO: Add contact section */}

  </div>;
};
export default HomePage;
