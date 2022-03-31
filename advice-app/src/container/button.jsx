
import btnAdvice from '../../src/images/icon-dice.svg'

const ButtonClick = ({ advice }) => {

    return(
        <>
            <div>
                <button className="button" onClick={advice}>
                    <img src={btnAdvice}/>
                </button>
            </div>

        </>
    )
} 
export default ButtonClick;

