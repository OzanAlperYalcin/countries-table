function Groups({ orderObject }) {

    const { order, setOrder } = orderObject

    const deleteHandle = (key) => {
        const clone = { ...order }
        if (key === 'group') delete clone.group
        if (key === 'search') delete clone.search
        setOrder(clone)
    }

    return (
        <div className="flex flex-wrap justify-center items-center gap-5">
            {order && Object.keys(order).map((key, i) => (
                <div key={i} className="relative">
                    <div className="flex text-xs font-semibold items-center gap-2">
                        <p>{key === 'search' ? 'Searched By:':'Grouped By:'}</p>
                        <p className={`${key === 'search' ? 'bg-blue-500' : 'bg-lime-500'} px-2 py-0.5 rounded-lg text-white`}>{order[key]}</p>
                    </div>
                    <span
                        className="absolute -top-1.5 -right-2 rounded-full bg-red-500 text-xs text-white px-1 cursor-pointer"
                        onClick={() => deleteHandle(key)}
                    >
                        X
                    </span>
                </div>
            ))}
        </div>
    )
}

export default Groups