import { useState } from "react"

export const PopUp = (props) => {
console.log('------- props -----',props);
    return (
        <div onClick={() => {
            props.setYes((prevState) => (!prevState))
        }} id="customModal" className="modal w-1/5">
            <div className="modal-content">
                {/* <span className="close" id="closeModalBtn">&times;</span> */}
                <h2>Action Modal</h2>
                <p className="px">{props.data}</p>
                {/* <button id="performActionBtn">Perform Action</button> */}
            </div>
        </div>
    )
}