import Table from "./Table"
import { useState, useEffect } from 'react'

function Main({ data }) {

    const [updateData, setUpdateData] = useState([])
    const [order, setOrder] = useState({})

    useEffect(() => {
        const clone = [...data]
        let filteredData = clone
        if (order.search) {
            filteredData = clone.filter(country => country.name.toLocaleLowerCase('TR').includes(order.search.toLocaleLowerCase('TR')))
        }
        const length = filteredData.length
        const response = filteredData.map((country, i) => {
            const completed = length >= 10 && i === 9 ? true : length < 10 && i === length - 1 ? true : false
            return { ...country, completed }
        })
        setUpdateData(response)
    }, [order.search])

    const handleChange = (i) => {
        const clone = [...updateData]
        const getCountry = clone.find((_, index) => index === i)
        getCountry.completed = !getCountry.completed
        clone.splice(i, 1, getCountry)
        setUpdateData(clone)
    }

    return (
        <div>
            <Table
                head={[
                    { name: 'Flag' },
                    { name: 'Country', sorting: true },
                    { name: 'Languages', width: '240px' },
                    { name: 'Currency' },
                ]}
                body={updateData.map((country) => [
                    <span value={country.completed} className='text-2xl'>{country.emoji}</span>,
                    country.name,
                    <div className='flex flex-wrap justify-center items-center w-60 py-1 gap-x-2 gap-y-1'>
                        {country.languages.map((language, i) => (
                            <span key={i} className={`text-xs text-white font-light px-2 py-0.5 rounded-xl ${language.name === 'English' ? 'bg-green-500' : 'bg-red-500'}`}>{language.name}</span>
                        ))}
                    </div>,
                    country.currency
                ])}
                click={handleChange}
                orderObject={{order, setOrder}}
            />
        </div>
    )
}

export default Main