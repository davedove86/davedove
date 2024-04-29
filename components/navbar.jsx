import ThemeToggle from './themeToggle'

const navbar = () => {
  return (
    <>
      <header className='flex justify-between items-center max-w-md md:max-w-3xl mx-auto py-4 center w-full'>
        <nav>
          <ul className='flex gap-4'>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#projects'>Projects</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </nav>
        <ThemeToggle />
      </header>
    </>
  )
}

export default navbar
