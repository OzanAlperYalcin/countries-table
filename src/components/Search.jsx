function Search({ search, setOrder }) {
    const { query, setQuery } = search

    const handleSubmit = (e) => {
        e.preventDefault()
        if (query.includes('search:') || query.includes('group:')) {
            const keyValues = query.split(" ")
            const result = {}
            keyValues.forEach(keyValue => {
                const [key, value] = keyValue.split(":")
                result[key] = value
            })
            setOrder(result)
        } else {
            setOrder({search: query})
        }
        setQuery('')
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="relative group">
            <input type="text" name="country"
                value={query}
                className="h-8 md:w-96 outline-none pl-2 pr-20 border-2 border-zinc-400 rounded-xl group-focus-within:border-rose-500 transition-all"
                onChange={(e) => setQuery(e.target.value)}
                placeholder="search:turkey - group:country"
            />
            <button type="submit" className="btn-search">
                SEARCH
            </button>
        </form>
    )
}

export default Search