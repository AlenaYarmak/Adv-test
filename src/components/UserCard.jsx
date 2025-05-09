import './UserCard.css';
import mail from '../assets/images/mail.png';
import call from '../assets/images/call.png';
import web from '../assets/images/web.png';

const UserCard = () => {
    return (
        <div className='card__item'>
            <img
                className='card__user-image' 
                src='https://robohash.org/mail@ashallendesign.co.uk'>            
            </img>
            <p className='card__user-name'>
                Ervin Howell
            </p>
            <p className='card__adress'>
                Wisokyburgh, Victor Plains, 90566-7771
            </p>
            <div className='divider'></div>
            <p className='card__company-name'>
                Deckow-Crist
            </p>
            <p className='card__text'>Get Connected</p>
            <div className='card__contacts'>
                <a
                    className='card__phone'
                    href='tel:010-692-6593'>
                    <img 
                        className='card__icon' 
                        src={call} alt='' />
                </a>
                <a
                    className='card__email'
                    href='mailto:Shanna@melissa.tv'>
                    <img 
                        className='card__icon' 
                        src={mail} alt='icon mail' />
                </a>
                <a
                    className='card__website'
                    href='https://anastasia.net'
                    target='_blanket'>
                    <img 
                        className='card__icon' 
                        src={web} alt='' />
                </a>
            </div>
        </div>
    )
}

export default UserCard;