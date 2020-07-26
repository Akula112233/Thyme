import React from 'react'
import './sidebar.css'
import SideBarButton from "./sidebarbuttons";

function SideBar(props) {
    console.log(props)
    let buttons = props.allCourses.map((course, index) => {
            return <SideBarButton
                    key={course.id}
                    selected={course.selected}
                    onClick={() => {props.changeCurrentCourseID(course.id, index)}} //Assuming here that course id is given as course.id*********
                    imageSrc={course.imageLink} //Assuming here that the course image is given as imageLink*******
                    backgroundColor={course.backgroundColor}
                />
        }
    )
    return (
        <div className= "sidebar">
            <div id='fillerButtonsSidebar' />
            {buttons}
        </div>
    )
}

export default SideBar