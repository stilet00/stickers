import { useAsync } from "../../hooks/hooks";
import { edit, deleteOne, create, getStickers } from "../../services/requests";
import { useEffect } from "react";
import killPaper from "../../assets/sounds/cut.wav";
import addPaper from "../../assets/sounds/add.wav";
import useSound from "use-sound";

export function useStickers() {
  const [playCut] = useSound(killPaper);
  const [playAdd] = useSound(addPaper);
  const { data: stickers, setData: setStickers, run } = useAsync(
    () => getStickers(stickers),
    []
  );
  useEffect(run, []);

  function addSticker() {
    create().then((res) => setStickers([res, ...stickers]));
    playAdd();
  }

  function deleteSticker({ id }) {
    playCut();
    deleteOne(id).then((res) =>
      setStickers(stickers.filter((item) => item.id !== res.id))
    );
  }

  function saveSticker(id, description) {
    const task = { id, description };
    edit(task).then((res) =>
      setStickers(stickers.map((item) => (item.id === res.id ? res : item)))
    );
  }

  return {
    stickers,
    setStickers,
    addSticker,
    deleteSticker,
    saveSticker,
  };
}
