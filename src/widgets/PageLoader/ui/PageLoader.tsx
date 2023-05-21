import Spinner from 'react-bootstrap/Spinner';
import './PageLoader.css'

export const PageLoader = () => {
  return ( 
          <div className='pageLoader'> 
              <Spinner animation="grow" variant='info'/>
          </div>
)}
