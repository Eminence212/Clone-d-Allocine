import React, {useEffect, useState} from 'react'
import { MdKeyboardArrowUp} from 'react-icons/md'
function BackToTop() {
    const [isSroll, setIsSroll] = useState(false)

    useEffect(() => {
        window.addEventListener("load", toggleBacktotop)
        document.addEventListener("scroll", toggleBacktotop)
    }, [isSroll])
    const toggleBacktotop = () => {
        if (window.scrollY > 100) {
            setIsSroll(true)
        }
        else {
            setIsSroll(false)
        }
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior : "smooth"
        })
    }
 const   renderGoTopIcon = () => {
     if (isSroll){
            return (
                <>
                    <span href="/" className="back-to-top d-flex align-items-center justify-content-center btnSrollToTop" onClick={scrollToTop}>
                        <MdKeyboardArrowUp />
                    </span>
                </>
            )
        }
    }
    return <> {renderGoTopIcon()} </>
}

export default BackToTop
