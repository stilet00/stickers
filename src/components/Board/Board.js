import React from 'react';
import Sticker from "../Sticker/Sticker";
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import './Board.css'
import {useStickers} from "./hooks";


function Board(props) {
        const {stickers, addSticker, deleteSticker, saveSticker} = useStickers();
    return (
        <div className={"container"}>
            <IconButton
                aria-label="delete"
                onClick={addSticker}
            >
                <AddIcon

                />
            </IconButton>

            <div className="cardholder">
                {stickers.map((stick) => {
                    return <Sticker
                        sticker={stick}
                        deletePressed={deleteSticker}
                        saveChanges={saveSticker}
                        key={stick.id}

                    />
                })}
            </div>

        </div>
    );
}

export default Board;