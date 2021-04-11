import react from "react";
import EditImg from './EditUser.png';

function EditUserButton(){


    return(
        <button className="EditUserButton">
            <img src = {EditImg} alt = "Edit"/>
        </button>
    )
}

export default EditUserButton;