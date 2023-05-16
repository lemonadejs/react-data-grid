import React, { useEffect, useRef } from "react";
import Datagrid from "@lemonadejs/datagrid";
import "@lemonadejs/datagrid/dist/style.css";

const DatagridReact = React.forwardRef((props, mainReference) => {
    const dgDom = useRef();

    useEffect(() => {
        if (dgDom.current.innerText) {
            mainReference.current.setData(props.data)
            if (mainReference.current.columns != props.columns) {
                mainReference.current.columns = props.columns
            }
            if (mainReference.current.pagination != props.current.pagination) {
                mainReference.current.pagination = props.current.pagination
            }
            if (mainReference.current.search != props.current.search) {
                mainReference.current.search = props.current.pagination
            } 
            mainReference.current.loadPages()
        } else {
            mainReference.current = Datagrid(dgDom.current, { ...props });
        }
    })

    return React.createElement("div", { ref: dgDom })
})

export default DatagridReact;
