import React from 'react'

function MobileTable({ head, body }) {
    return (
        <div className='grid gap-y-2 text-xs font-medium'>
            {body.map((items, i) => (
                <section key={i} className="box divide-y">
                    {items.map((item, i) => (
                        <div key={i} className="flex justify-between items-center px-5 py-1">
                            <span className='text-left'> {head[i].name} </span>
                            <span className='text-right'>{item}</span>
                        </div>
                    ))}
                </section>
            ))}
        </div>
    )
}

export default MobileTable