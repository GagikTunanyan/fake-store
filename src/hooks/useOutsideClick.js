import { useEffect } from "react";

export const useOutsideClick = (ref, callback) => {
    useEffect(() => {
        const handleClickOutside = (evt) => {
            if (ref.current && !ref.current.contains(evt.target)) {
                callback();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return (() => {
            document.removeEventListener("mousedown", handleClickOutside);
        })
    })
}
