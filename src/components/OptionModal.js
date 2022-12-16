import React from 'react';
import Modal from 'react-modal';
const OptionModal = (props) => {
    return(
        <Modal isOpen={!!props.selectedOption} onRequestClose={props.handleClearSelectedOption}>
            <p>This is modal</p>
            <p>{props.selectedOption}</p>
            <button onClick={props.handleClearSelectedOption}>Close modal</button>
        </Modal>
    )
}

export default OptionModal