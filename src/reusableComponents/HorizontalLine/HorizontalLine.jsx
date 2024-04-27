import { useState } from 'react';
import './HorizontalLine.css'

const HorizontalLine = () => {

    const [width, setWidth] = useState('50px')

    const handleWidth = () => {
        setWidth('400px');
    }
    return ( 
        <>
        <div  className='h-[40vh] bg-gray-50' width={width} >This is my side bar</div>
        <button onClick={()=>handleWidth} className='btn'>set width</button>


        <div className='h-40 p-4 border rounded-xl flex items-center justify-center'>
        <div className='title grid grid-cols-3 gap-4 justify-center items-center'>
        <h2 className='font-bold text-xl text-red-400 py-4 border-4 text-center w-20 h-20 mx-auto' style={{ transform: 'rotate(45deg)' }}><p className='border rounded-full text-center' style={{ transform: 'rotate(-45deg)' }}>MiddleText</p></h2>
        </div>
        </div>            
        </>
    );
};

export default HorizontalLine;