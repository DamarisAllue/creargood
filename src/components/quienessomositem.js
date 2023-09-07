import React from 'react';

const quienessomosItem = ({ item, index }) => {
    
    const { titulo, texto, img } = item
    console.log(item)
    const styles = index % 2 === 0 ? { order: -1,} : { order: 12,}
    const background = index % 2 === 0 ? { background:"#FDDDAA", width: "100%"} : {background: "#FEF5A6", width:"100%" }

    return (
        <div className="row my-5" style={background}>
            <div className="col-lg-6 ">
                <img src={img} alt="Producto 1" style={{ objectFit: "cover", width:"80%", margin:"50px"}} />
            </div>
            <div className="col-lg-6 quienessomos-item-info" style={styles}>
                <p className="quienessomos-item-title my-2">{titulo}</p>
                <p className="quienessomos-item-texto my-3">{texto}</p>
            </div>
        </div>
    );
}

export default quienessomosItem;