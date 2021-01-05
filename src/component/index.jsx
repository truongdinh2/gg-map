// import { Button } from 'antd';
// import { motion } from 'framer-motion';
import React, { useState } from 'react'

export default function Index() {
    const [percent, setPercent] = useState('');
    var num = 1;
    var arrDiv = [];
    // var circle = 'circle';
    const [circle, setCircle] = useState('')
    for (var i = 0; i < num; i++) {
        arrDiv.push(i)
    }

    const handleChangeBackg = () => {
        if (circle === '') {
            setCircle('circle')
        };
        if (circle === 'circle') {
            setCircle('')
        }
    }
    return (
        <>
            <div className="body">
                {arrDiv.map(div => {
                    return (
                        <div key={div}
                            className={`${circle} circle1`}>
                        </div>
                    )
                })}
            </div>

            <button className="button"
                onClick={handleChangeBackg}
            >

                click me
            </button>
            {/* </motion.div> */}
            {/* <Button >click me</Button> */}
        </>
    )
}
