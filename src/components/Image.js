import React from 'react';
import LogoNpp from '../npp-logo.png'

const Image = (props) => {
    // console.log(props);
    if (props.login === false) {
        props.history.push('/')
    }
    return (
        <div>
            <h1>IMAGE</h1>
            <img src={LogoNpp} alt="logo-notepad-plus-plus" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore rem atque modi voluptatem nesciunt, rerum qui officiis voluptas cumque. Modi inventore maiores numquam nostrum facere quibusdam deserunt hic distinctio unde explicabo temporibus animi quaerat ducimus dolorem ipsum soluta deleniti dolore aperiam debitis laboriosam porro mollitia asperiores, alias sequi. Unde repellendus totam nobis sapiente deserunt iste ratione quisquam inventore. Vitae maiores quo libero vel veritatis ipsum. Magnam nostrum, obcaecati voluptatibus numquam ipsum perferendis quis ad deserunt animi sed vero facilis reiciendis.</p>
        </div>
    )
}

export default Image;