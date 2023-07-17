import React, { useState } from 'react';
import barsImage from './bars.png';
import closeImage from './close.png';
import '../css/MainTop.css';

function MainTop(props) {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return(
        <div className="Mparent">
            <img className={sidebar ? 'Mbars active': 'Mbars'} 
                alt="Mbars" 
                src={barsImage} 
                onClick={showSidebar}
            />
            
            <nav className={sidebar ? 'Mnav-menu active': 'Mnav-menu'}>
                <ui className='Mnav-menu-items' onClick={showSidebar}>
                    <img className="Mclose" alt="close" src={closeImage} />
                    <ui className='Mtop'>
                        <li className='MtopHome'>로그인</li>
                        <div className="MtopBarHome"></div>
                        <li className='MtopLogin'>내정보</li>
                        <div className="MtopBarLogin"></div>
                        <li className='MtopMyInfo'>알림</li>
                        <div className="MtopBarMyInfo"></div>
                    </ui>
                </ui>
            </nav>
        </div>
    )
}

export default MainTop;