import { URL } from "../constants/constants";

export function getStickers() {
  return fetch(URL).then((res) => res.json());
}

export function create() {
  return fetch(URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
  }).then((res) => res.json());
}

export function deleteOne(id) {
  return fetch(URL + id, {
    method: "DELETE",
  }).then((res) => res.json());
}

export function edit(sticker) {
  return fetch(URL + sticker.id, {
    method: "PUT",
    body: JSON.stringify(sticker),
    headers: {
      "Content-type": "application/json",
    },
  }).then((res) => res.json());
}
