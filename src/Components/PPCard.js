import '../index.css';
import ppimage from '../ppimage.png'
import HireMe from './HireMe.js'

const PPCard = () => {
    return (
        <div className='ppcard'>
            <div className='ppbox'>
                <div className='ppcontent'>
                    <img src={ppimage} alt="Profile"/>
                    <h2>Brandon Griggs<br/><span>React Developer</span></h2>
                    <HireMe></HireMe>
                </div>
            </div>
        </div>
    )
}

export default PPCard