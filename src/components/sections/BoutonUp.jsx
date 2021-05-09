import React, { Component } from 'react';
import { FaAngleDoubleUp} from 'react-icons/fa'
class BoutonUp extends Component {
    state = {
        intervalId: 0,
        thePosition : false
    }
    componentDidMount() {
        document.addEventListener("scroll", () => {
            if (window.screenY > 170) {
                this.setState({thePosition : true})
            }
            else {
                this.setState({ thePosition: false })
            }
        })
        window.scrollTo(0,0)
    }

    onScrollStep = () => {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId)
        }
        window.scroll(0,window.pageYOffset-this.props.scrollstepInPx)
    }
    scrollToTop = () => {
        let intervalId = setInterval(this.onScrollStep, this.props.delayInMs)
        this.setState({intervalId : intervalId})
    }
    renderGoTopIcon = () => {
        if (this.state.thePosition) {
            return (
                <>
                    <div className = "move-up" >
                        <span>
                            <FaAngleDoubleUp onClick = {this.scrollToTop} />
                        </span>
                    </div>
                </>
                
            )
        }
    }
    render() {
        return <>{ this.renderGoTopIcon()}</>
    }
}

export default BoutonUp;