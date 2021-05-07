import React, {useEffect, useState} from 'react'
import { MdKeyboardArrowUp} from 'react-icons/md'
function BackToTop() {
    const [taille, setTaille] = useState(2)
    useEffect(() => {
        setTaille(window.scrollY)
    }, [taille])
    return (
        <span href="/" className="back-to-top d-flex align-items-center justify-content-center">
            <MdKeyboardArrowUp/>
        </span>

    )
}

export default BackToTop
