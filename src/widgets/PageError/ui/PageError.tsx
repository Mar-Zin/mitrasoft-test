import Button from 'react-bootstrap/Button';
import './PageError.css';



export const PageError = () => {

    const reloadPage = () => {
        window.location.reload();
    }; 

    return (
        <div className='pageError'>
            <p>Произошла непредвиденная ошибка</p>
            <Button variant="warning" onClick={reloadPage}>Обновить страницу</Button>
        </div>
    );
};
