import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import './Sticker.css'


function Sticker({sticker, deletePressed, saveChanges}) {
    function save(e) {
        saveChanges(sticker.id, e.target.value)
    }
    return (

        <div className={'sticker-body'}>

            <IconButton
                aria-label="delete"
                onClick={() => deletePressed(sticker)}
            >
                <DeleteIcon />
            </IconButton>
            <textarea
                id={sticker.id}
                defaultValue={sticker.description}
                onBlur={save}
                type="text"/>

        </div>
    );
}

export default Sticker;