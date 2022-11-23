import './Styles.css';
import '../../../elements.css'

export default function Login() {
    return (
        <div className='form-layout'>
            <span>
                Welcome <b>Guest</b>
            </span>
            <div className='form-container'>
                <form>
                    <label>Email</label>
                    <input
                        name='email'
                        type='text'
                    />
                    <label>Password</label>
                    <input
                        name='password'
                        type='password'
                    />

                </form>
                <button type='submit' className='btn primary'>Login</button>
                <button className='btn secondary flat'>Register</button>
            </div>
            <a href='#'>Recover password</a>
        </div>
    );
}