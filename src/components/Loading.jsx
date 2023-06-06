function Loading() {
    return (
        <div className='fixed inset-0 flex justify-center items-center'>
            <img src={import.meta.env.VITE_APP_LOGO} className='h-28 animate-pulse' />
        </div>
    )
}
export default Loading