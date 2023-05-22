import { useState } from 'react';
import { ReactComponent as Menu } from '../../../shared/assets/icons/menu.svg'
import Offcanvas from 'react-bootstrap/Offcanvas';
import avatar from '../../../shared/assets/icons/avatar.jpg'
import './Sidebar.css'
import { AppLink } from '../../../shared/ui/AppLink/AppLink';

export const Sidebar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
            <div className='menu' onClick={handleShow}> 
                <Menu />
            </div>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <div className='sidebar-title'>
                            <img src={avatar} alt='avatar' width={"70px"} height={'70px'}/>
                            <span>
                                <div>Зиннатуллин Марат</div> 
                                <div>Marat.zin@mail.ru</div>
                            </span>
                        </div>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='sidebar-links'>
                        <AppLink to="/" onClick={handleClose}>
                            Список постов
                        </AppLink>
                        <AppLink to="/about" onClick={handleClose}>
                            Обо мне
                        </AppLink>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
      </>
    );
}
 