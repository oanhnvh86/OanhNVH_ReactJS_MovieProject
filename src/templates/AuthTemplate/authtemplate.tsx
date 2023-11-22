import React, { PropsWithChildren } from 'react'
import {Outlet} from "react-router-dom";

function AuthTemplate(props: PropsWithChildren) {
  return (
    <div>
        <aside style={
            {
                height: 200,
                width: 200,
                backgroundColor: "blue"
            }
        }>aside
        </aside>
        {/* {props.children} */}
        <Outlet/>
        <footer style={
            {
                height: 50,
                backgroundColor: "black",
                color:"white"
            }
        }>Footer</footer>
    </div>
  )
}

export default AuthTemplate