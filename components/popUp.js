import { useState } from "react"

export const PopUp = (props) => {

    return (
        <div onClick={() => {
            props.setYes((prevState) => (!prevState))
        }} id="customModal" class="modal">
            <div class="modal-content">
                {/* <span class="close" id="closeModalBtn">&times;</span> */}
                <h2>Action Modal</h2>
                <p className="px">This is a custom action modal. You can add your content and actions here.</p>
                {/* <button id="performActionBtn">Perform Action</button> */}
            </div>
        </div>
    )
}