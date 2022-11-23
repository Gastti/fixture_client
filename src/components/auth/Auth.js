import './Auth.css';
import Container from '../Container';
import logo from '../../img/qatarlogo.png'
import Login from './forms/Login';
import Register from './forms/Register';


export default function Auth() {
    return (

        <div className='home-layout'>
            <Container>
                <div className='header-layout'>
                    <div className='header-logo'>
                        <img src={logo} alt='Qatar World Cup 2022' />
                    </div>
                </div>
                {/* <Routes>
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                    </Routes> */}
            </Container>
        </div>

    );
}