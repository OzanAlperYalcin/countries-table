function Loading() {
    const loadingImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png'
    return (
        <div className='fixed inset-0 flex justify-center items-center'>
            <img src={loadingImage} className='h-28 animate-pulse' />
        </div>
    )
}

export default Loading