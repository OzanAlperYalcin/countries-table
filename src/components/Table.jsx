import Groups from './Groups'
import Search from './Search'
import MobileTable from './MobileTable'
import { useState, useEffect } from 'react'
import { BsSortAlphaDown, BsSortAlphaDownAlt } from "react-icons/bs"
import { useMediaQuery } from '@react-hook/media-query'

function Table({ head, body, click, orderObject }) {

    const isMobile = useMediaQuery('(max-width: 845px)')
    const { order, setOrder } = orderObject
    const [headData, setHeadData] = useState([])
    const [bodyData, setBodyData] = useState([])
    const [query, setQuery] = useState("")
    const [sorting, setSorting] = useState("")
    const [color, setColor] = useState("")
    const indexes = { flag: 0, country: 1, languages: 2, currency: 3 }
    const checkDisabled = (value) => value ? false : bodyData.some(item => item[[!order.group ? 0 : 1]]?.props?.value)

    useEffect(() => {
        let cloneHead = [...head]
        let cloneBody = [...body]
        if (order.group) {
            const i = indexes[order.group]
            const firstHead = cloneHead.splice(i, 1)
            cloneHead = [...firstHead, ...cloneHead]
            const updateBody = cloneBody.map(items => {
                const filteredItems = items.filter((_, index) => index !== i)
                return [items[i], ...filteredItems]
            })
            setHeadData(cloneHead)
            setBodyData(updateBody)
        } else {
            setHeadData(head)
            setBodyData(body)
        }
    }, [order.group, body, head])

    useEffect(() => {
        if (body.every(item => !item[0].props.value)) {
            const pickColor = () => {
                const colors = ['bg-green-100 hover:bg-green-200', 'bg-red-100 hover:bg-red-200', 'bg-blue-100 hover:bg-blue-200', 'bg-yellow-100 hover:bg-yellow-200']
                const randomIndex = Math.floor(Math.random() * colors.length)
                if (color === colors[randomIndex]) pickColor()
                else setColor(colors[randomIndex])
            }
            pickColor()
        }
    }, [click])

    const handleSort = (i) => {
        if (sorting?.i === i) {
            setSorting({
                i, orderBy: sorting.orderBy === "asc" ? "desc" : "asc"
            })
        } else {
            setSorting({ i, orderBy: "asc" })
        }
    }

    const sortedData = bodyData.sort((a, b) => {
        if (sorting?.orderBy === "asc") {
            return (a[sorting.i].key || a[sorting.i]).toString().localeCompare(b[sorting.i].key || b[sorting.i])
        }
        else if (sorting?.orderBy === "desc") {
            return (b[sorting.i].key || b[sorting.i]).toString().localeCompare(a[sorting.i].key || a[sorting.i])
        }
        return a
    })

    return (
        <>
            <div className='sticky top-0 z-10 h-20 md:h-10 bg-zinc-300'>
                <div className='h-full flex flex-col md:flex-row items-center justify-between px-5 py-2'>
                    <Groups orderObject={{ order, setOrder }} />
                    <Search search={{ query, setQuery }} setOrder={setOrder} />
                </div>
            </div>
            {isMobile ?
                <MobileTable head={head} body={sortedData} />
                :
                <table className='w-full text-center'>
                    <thead>
                        <tr>
                            {headData.map((item, i) => (
                                <th key={item.name} width={item?.width} className='sticky top-10 z-10 bg-zinc-300 text-sm font-semibold border-b border-zinc-400 p-3' >
                                    <span className={`flex items-center justify-center gap-2`}>
                                        {item.name}
                                        {item.sorting && <button className='bg-zinc-600 hover:bg-zinc-500 rounded-full text-white p-1 transition-all duration-500' onClick={() => handleSort(i)}>{sorting.orderBy === "asc" ? <BsSortAlphaDownAlt size={16} /> : <BsSortAlphaDown size={16} />}</button>}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map((items, index) => (
                            <tr key={index}
                                className={`
                                ${items[!order.group ? 0 : 1]?.props?.value ? color : 'bg-bg-zinc-100 hover:bg-zinc-200'}
                                ${checkDisabled(items[!order.group ? 0 : 1]?.props?.value) && ' cursor-text'}
                                border border-b-zinc-200 cursor-pointer transition-all duration-300
                            `}
                                onClick={() => !checkDisabled(items[!order.group ? 0 : 1]?.props?.value) && click(index)}
                            >
                                {items.map((item, i) => (
                                    <td key={i} > {item} </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            }

        </>
    )
}

export default Table