import './UserCard.css';
import mail from '../../assets/images/mail.png';
import call from '../../assets/images/call.png';
import web from '../../assets/images/web.png';

const UserCard = ({ 
        name,
        company,
        phone,
        email,
        website,
        city, 
        street,
        suite
}) => {

    return (
        <div className='card__item'>
            <img
                className='card__user-image' 
                src='https://robohash.org/mail@ashallendesign.co.uk'>            
            </img>
            <p className='card__user-name'>
                {name}
            </p>
            <p className='card__adress'>
                {city}, {street}, {suite}
            </p>
            <div className='divider'></div>
            <p className='card__company-name'>
                {company}
            </p>
            <p className='card__text'>Get Connected</p>
            <div className='card__contacts'>
                <a
                    className='card__phone'
                    href={phone}>
                    <img 
                        className='card__icon' 
                        src={call} alt='' />
                </a>
                <a
                    className='card__email'
                    href={`mailto:${email}`}>
                    <img 
                        className='card__icon' 
                        src={mail} alt='icon mail' />
                </a>
                <a
                    className='card__website'
                    href={website}
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