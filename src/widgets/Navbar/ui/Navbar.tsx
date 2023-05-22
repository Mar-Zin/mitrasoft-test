import { AppLink } from '../../../shared/ui/AppLink/AppLink';
import { Sidebar } from '../../Sidebar';
import './Navbar.css';


export const Navbar = () => {

    return (
        <div className='Navbar'>
<Sidebar/>
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
