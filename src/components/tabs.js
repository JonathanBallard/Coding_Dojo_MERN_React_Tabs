import React, { useState } from 'react';
import styles from './css/tabs.modules.css'

const Tabs = props => {
    //accept props.props.arr
    const { arr } = props.info;
    const [ cont, setCont ] = useState(arr[0].content);
    // arr elements each contain label & content

    //on load renders all labels, and also content for arr[0]
    let label, content;
    ({ label, content } = arr[0]);
    // onclickhandler renders new content
    
    const clickHandler = e => {
        //set content to correct array index
        setCont(arr[e.target.id].content);
    }
    // ({content} = arr[1])
    const headers = [];
    for(var i = 0; i < arr.length; i++){
        headers.push(
            <div className="tabHeader" key={i} id={i} onClick={clickHandler}>{ arr[i].label }</div>
        )
    }
    let contentBox = <div className="contentBox">{ cont }</div>
    return (
        <div>
            {headers}
            {contentBox}
        </div>
    )
}









export default Tabs;