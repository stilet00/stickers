import React, {useState, useEffect} from 'react';
import Sticker from "../Sticker/Sticker";
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import useSound from 'use-sound';
import killPaper from '/Users/antonstilet/Desktop/sticker-board/src/cut.wav'
import addPaper from '/Users/antonstilet/Desktop/sticker-board/src/add.wav'
import './Board.css'
import {getStickers, createOne, deleteOne, editOne} from "../../services/requests";


function Board(props) {
        const [stickers, setStickers] = useState([])
        const [playCut] = useSound(killPaper);
        const [playAdd] = useSound(addPaper);
        useEffect(() => {
            getStickers().then(res => {
                setStickers(res.reverse())
            })
        }, [])

        function addSticker() {
           createOne().then(res => setStickers([res,...stickers]))
            playAdd()
         }

         function deleteSticker(deletedStick) {
             playCut()
             deleteOne(deletedStick.id).then(res => setStickers(stickers.filter(item => item.id !== res.id)))
         }
         function saveSticker(id, description) {
            const task = {
                id: id,
                description: description
            }
             editOne(task).then(res => setStickers(stickers.map(item => item.id !== res.id ? item : res)))
         }
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