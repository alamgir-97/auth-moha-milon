// import './Modal.css'

// const Modal = () => {
//     const modalWrapper = document.getElementById('vid-modal-wrapper');
//     const showModal = () =>{
//         modalWrapper.classList.add('show')
//     }
//     const hideModal = () =>{
//         modalWrapper.classList.remove('show')
//     }
//     return (
//         <>
//         <div className='cta-content'>
//         <div className='cta-col col_1'>
//             <div className='col-content'>
//             <h2>Play the Big Bynny</h2>
//             <p>The new adventure awaits. Don&apos;t miss the thrilling. Adventure of Big Bunny. <br></br> 
//             Play now and get the adventure of Big Bunny.</p>
//             </div>
//         </div>
//         </div>

//         <div className='cta-col col_2'>
//         <div className='col-content'>
//             <div className='btn-holder'>
//             <a href='#' className='cta-btn'
//             onClick={showModal}>&gt;</a>
//             </div>
//         </div>
//         </div>


//             <div id='vid-modal-wrapper'>
//                 <span className='vid-close' onClick={hideModal}>x</span>
//                 <div className='yt-holder'>
//                 <iframe width="1349" height="480" src="https://www.youtube.com/embed/zbz2X-0ZciQ" title="How to Create a CSS Call To Action Video Modal Popup with Simple Javascript (EASY)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

//             </div>
//             </div>
//         </>
//     );
// };

// export default Modal;



import { useState } from 'react';
import './Modal.css';

const Modal = () => {
    const [show, setShow] = useState(false);

    const showModal = () => {
        setShow(true);
    }

    const hideModal = () => {
        setShow(false);
    }

    return (
        <>
            <div className='cta-content'>
                <div className='cta-col col_1'>
                    <div className='col-content'>
                        <h2>Play the Big Bynny</h2>
                        <p>The new adventure awaits. Don&apos;t miss the thrilling. Adventure of Big Bunny. <br></br> 
                        Play now and get the adventure of Big Bunny.</p>
                    </div>
                </div>
            </div>

            <div className='cta-col col_2'>
                <div className='col-content'>
                    <div className='btn-holder'>
                        <button className='cta-btn' onClick={showModal}>&gt;</button>
                    </div>
                </div>
            </div>

            {show && (
                <div id='vid-modal-wrapper'>
                    <span className='vid-close' onClick={hideModal}>x</span>
                    <div className='yt-holder'>
                        <iframe width="1349" height="480" src="https://www.youtube.com/embed/zbz2X-0ZciQ" title="How to Create a CSS Call To Action Video Modal Popup with Simple Javascript (EASY)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;