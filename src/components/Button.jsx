
import { spinner } from '../assets';

const Button = () => {
    return (
        <div className='flex justify-around items-center'>
            <img class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24" src={spinner} />
            <p>Processing...</p>
        </div>
    )
}


export default Button

