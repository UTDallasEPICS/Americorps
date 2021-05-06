import react from "react";
import AddImg from './AddButtonimg.png';
import './AshStyle.css'

function AddUserButton(){
    var addUserText = "Add User";

    return(
        <button className="AddUserButton">
            <img src = {AddImg} alt = "Add"/>
            <div className="spaceText">{addUserText}</div>
        </button>
    )
}

export default AddUserButton;