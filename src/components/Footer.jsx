import { FaGithub, FaCode } from 'react-icons/fa'

function Footer() {
    
    const footerData = [
        {
            value: "Ozan Alper YALÇIN",
            icon: FaCode,
            color: "text-rose-500"
        },
        {
            value: "GitHub",
            icon: FaGithub,
            color: "text-[#171515]",
            link: "https://github.com/ozanalperyalcin"
        },
    ]

    return (
        <div className='mt-auto text-xs font-light'>
            <div className="flex justify-between items-center bg-zinc-200 border-t border-zinc-300 py-2 px-10">
                {footerData.map((data, i) => (
                    data.link ?
                    <a href={data.link} key={i} target='_blank' className='flex items-center gap-1'>{data.value} <data.icon className={data.color} /></a>
                    :
                    <p key={i} className='flex items-center gap-1'>{data.value} <data.icon className={data.color} /></p>
                ))}
                
            </div>
        </div>
    )
}

export default Footer