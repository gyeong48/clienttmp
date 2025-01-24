import React from 'react'

function InfoBox({ row1, row2, row3 }) {
    return (
        <div className='grid grid-cols-1 space-y-2 lg:grid-cols-3 lg:space-y-0 border rounded-md shadow-md lg:shadow-none border-gray-300 p-4 hover:bg-gray-100 mb-2 lg:mb-0'>
            <div className='border-b text-xs md:text-sm lg:text-base lg:border-0 border-gray-400 text-center'>{row1}</div>
            <div className='border-b text-xs md:text-sm lg:text-base lg:border-0 border-gray-400 text-center'>{row2}</div>
            <div className='border-b text-xs md:text-sm lg:text-base lg:border-0 border-gray-400 text-center'>{row3}</div>
        </div>
    )
}

export default InfoBox