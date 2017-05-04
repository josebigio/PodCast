import React from 'react';

const CountIcon = ({ style, count, color="#fafafa", radius="30px" }) => {

    const styles = {
        ...style,
        borderRadius: "50%",
        width: radius,
        height: radius,
        lineHeight: radius,
        backgroundColor: color  ,
        textAlign: "center",
        fontSize: "small",
        margin:"5px"
    }

    return <div style={styles}>{count}</div>
}



export default CountIcon;