import Image from 'next/image';
import Link from 'next/link';
import Profile from '@/assets/images/profile.png';

const HomePage = () => {
	return <div>
    <section className='max-w-sm md:max-w-lg mx-auto'>
      <div className="flex">
        <Image src={Profile} alt="Dave Dove" width={128} height={128} />
      </div>
      <h1 className='text-2xl font-medium'>Dave Dove</h1>
      <p>Hi there, I am a software engineer who builds for the web with a design-oriented approach. I currently run my own Web Design Agency, <a href='https://www.dovedesign.io' target='blank'>Dove Design</a> which design and builds websites for businesses.</p>
    </section>

  {/* TODO: Add projects section */}

  {/* TODO: Add contact section */}

  </div>;
};
export default HomePage;
