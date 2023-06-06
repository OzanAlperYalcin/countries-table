function Header() {

  const logo = 'https://static.vecteezy.com/system/resources/previews/009/314/440/original/earth-globe-clip-art-vector-illustration-isolated-free-png.png'

  return (
    <header>
      <div className='h-16 bg-zinc-600 shadow-lg'>
        <div className='flex justify-around items-center h-full'>
          <div className='flex items-center gap-2'>
            <img src={logo} className='h-12' />
            <h1 className='brand text-white'>{import.meta.env.VITE_APP_NAME}</h1>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header