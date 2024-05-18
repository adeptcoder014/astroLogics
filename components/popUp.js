import { useState } from "react"

export const PopUp = (props) => {
console.log('------- props -----',props);
    return (
        <div onClick={() => {
            props.setYes((prevState) => (!prevState))
        }} id="customModal" class="modal w-1/5">
            <div class="modal-content">
                {/* <span class="close" id="closeModalBtn">&times;</span> */}
                <h2>Action Modal</h2>
                <p className="px">{props.data}</p>
                {/* <button id="performActionBtn">Perform Action</button> */}
            </div>
        </div>
    )
}