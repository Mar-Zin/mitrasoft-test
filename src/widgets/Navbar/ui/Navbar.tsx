import { AppLink } from '../../../shared/ui/AppLink/AppLink';
import './Navbar.css';


export const Navbar = () => {

    return (
        <div className='Navbar'>
            <div className='links'>
                <AppLink to="/" className='mainLink'>
                    Главная
                </AppLink>
                <AppLink  to="/about">
                   Обо мне
                </AppLink>
            </div>
        </div>
    );
};
