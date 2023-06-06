function Header() {

  return (
    <header>
      <div className='h-16 bg-zinc-600 shadow-lg'>
        <div className='flex justify-around items-center h-full'>
          <div className='flex items-center gap-2'>
            <img src={import.meta.env.VITE_APP_LOGO} className='h-12' />
            <h1 className='brand text-white'>{import.meta.env.VITE_APP_NAME}</h1>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header