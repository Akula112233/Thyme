import React from 'react'
import './sidebarbuttons.css'

function SideBarButton(props) {
    let classNameOuter = "notSelected"
    if (props.selected){
        classNameOuter = "selected"
    }
    return (
        <div className={classNameOuter + " constant"}>
            <div className={"sidebarbuttons"} onClick={props.onClick} style={{background: "#" + props.backgroundColor}}>
                {/*<img className="courseIconImage" src={props.imageSrc} />*/}
            </div>
        </div>
    )
}

export default SideBarButton