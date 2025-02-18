
import React from 'react'
import PropTypes from 'prop-types';



const UseCallbackButtons = props => {
    return (
        <div>
            <button onClick={() => props.increase(6)} className="btn">+6</button>
            <button onClick={() => props.increase(12)} className="btn">+12</button>
            <button onClick={() => props.increase(18)} className="btn">+18</button>
        </div>
    )
}

UseCallbackButtons.propTypes = {
    increase: PropTypes.func.isRequired,
};

export default React.memo(UseCallbackButtons)
