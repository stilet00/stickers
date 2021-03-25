import {useAsync} from "../../hooks/hooks";
import {createOne, deleteOne, editOne, getStickers} from "../../services/requests";
import {useEffect} from "react";
import killPaper from '../../cut.wav'
import addPaper from '../../add.wav'
import useSound from "use-sound";

export function useStickers() {
    const [playCut] = useSound(killPaper);
    const [playAdd] = useSound(addPaper);
    const {data: stickers, setData: setStickers, run } = useAsync(() => getStickers(stickers), []
    );
    useEffect(run, [])
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

    return {
        stickers, setStickers, addSticker, deleteSticker, saveSticker
    }
}