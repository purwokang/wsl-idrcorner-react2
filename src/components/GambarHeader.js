import React, { Component } from 'react'

export default class GambarHeader extends Component {

    state = {
        img: [
            'https://ik.imagekit.io/tvlk/blog/2020/01/shutterstock_115897072.jpg',
            'https://ik.imagekit.io/tvlk/blog/2020/01/14719231_1799700416971947_9202577377165574144_n.jpg',
            'https://ik.imagekit.io/tvlk/blog/2020/01/shutterstock_527676832.jpg',
            'https://ik.imagekit.io/tvlk/blog/2020/01/26154720_1371962732931925_1430111774698373120_n-1024x768.jpg',
            'https://ik.imagekit.io/tvlk/blog/2020/01/shutterstock_678912838.jpg',
            'https://ik.imagekit.io/tvlk/blog/2020/01/shutterstock_497201887.jpg',
            'https://ik.imagekit.io/tvlk/blog/2020/01/26184452_1754649701510263_5690274773150466048_n-1024x1190.jpg',
            'https://ik.imagekit.io/tvlk/blog/2020/01/12331771_940207802735232_303409907_n.jpg',
            'https://ik.imagekit.io/tvlk/blog/2020/01/shutterstock_404607271.jpg'
        ]
    }

    render() {

        let num = Math.floor(Math.random() * Math.floor(this.state.img.length));

        return (
            <div className='imgHeader' >
                <img src={this.state.img[num]} alt="header-img" />
            </div>
        )
    }
}
