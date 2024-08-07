import React from 'react'
import Icons from '../common/Icons'
import { locations } from '../common/Helper'

const abbreviateLocation = (name) => {
    switch (name) {
        case 'Knoxville':
            return 'Knoxville';
        case 'Sevierville':
            return 'Knoxville';
        case 'Maynardville':
            return 'Knoxville';
        default:
            return name;
    }
};
const Services = () => {
    return (
        <div className='container mx-auto pb-16'>
            <div className="flex flex-wrap -mx-3 justify-center">
            {locations.map((location, index) => (
                    <div className="w-6/12 lg:w-4/12 px-[10px] md:px-3 mt-6" key={index}>
                        <div className="flex items-center px-3 py-3 justify-between min-h-[63px] md:p-6 max-w-[364px] w-full bg-white shadow-4xl rounded-3xl">
                          <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-[40px] h-[40px] md:size-12 rounded-full bg-red">
                                <Icons icon="Location" />
                            </div>
                            <p className='text-black text-lg md:text-2xl leading-9 font-Plus font-semibold'>
                            <span className="block sm:hidden">{abbreviateLocation(location.name)}</span>
                            <span className="hidden sm:block">{location.name}</span>
                            </p>
                          </div>
                        </div>
                    </div>
                ))}
            
            </div>
        </div>
    )
}

export default Services