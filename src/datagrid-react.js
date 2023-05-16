import React, { useEffect, useRef } from "react";
import Datagrid from "@lemonadejs/datagrid";
import "@lemonadejs/datagrid/dist/style.css";

const DatagridReact = React.forwardRef((props, mainReference) => {
    const dgDom = useRef();

    useEffect(() => {
        if (dgDom.current.innerText) {
            mainReference.current.setData(props.data)
            mainReference.current.columns = props.columns
            mainReference.current.pagination = props.pagination
            mainReference.current.search = props.search
            mainReference.current.loadPages()
        } else {
            mainReference.current = Datagrid(dgDom.current, { ...props });
        }
    })

    return React.createElement("div", { ref: dgDom })
})

export default DatagridReact;
