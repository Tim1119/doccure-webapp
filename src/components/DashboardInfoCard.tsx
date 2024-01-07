import React from 'react'


interface Props{
    bgColor:string;
    borderColor:string;
    icon:JSX.Element;
    text:string;
    stats:number;
}

const DashboardInfoCard = ({bgColor,borderColor,icon,text,stats}:Props) => {
  return (
    <div className='grid p-6 bg-white border border-gray-200 rounded-md hover:bg-gray font-light'>
        <div className='flex items-center justify-between' >
            <div className={`${borderColor} p-2 rounded-full border-[3px] `} >
                {icon}
            </div>
            <p className='font-medium text-2xl' >{text != 'Revenue' ? stats : `$${stats}` }</p>
        </div>
        <div className='my-2 space-y-2'>
            <p className='font-medium text-mute'>{text}</p>
            <div className="w-full bg-gray-200 rounded-full h-1 ">
                 <div className={`${bgColor} h-1 rounded-full `} style={{width:'45%'}}></div>
            </div>
        </div>
    </div>
  )
}

export default DashboardInfoCard