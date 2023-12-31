import '../index.css';
import ppimage from '../ppimage.png'
import magicdev from '../magicdev.png'
import HireMe from './HireMe.js'

const PPCard = () => {
    return (
        <div className='ppcard'>
            <div className='ppbox'>
                <div className='ppcontent'>
                    <img src={magicdev} alt="Profile"/>
                    <h2>Brandon Griggs<br/><span>React Developer</span></h2>
                    <HireMe></HireMe>
                </div>
            </div>
        </div>
    )
}

export default PPCard