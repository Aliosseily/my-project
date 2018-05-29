import React, { Component } from 'react';
import './PhotoGallery.css';
import Masonry from 'masonry-layout';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const gridSize = 20

const Background = ({onClick, loaded, src, width, height}) => {
    const backgroundImage = loaded ? `url("${src}")` : 'linear-gradient(yellow,red,blue)'
    width = width || gridSize * 10
    height = height || gridSize * 10
    return <div onClick={onClick} className="photo" style={{width,height,backgroundImage}}/>
}

const loadImage = (src, whenDone) => {
    const imageLoader = document.createElement('img')
    imageLoader.onload = () => {
        const height = imageLoader.height
        const width = imageLoader.width
        setTimeout(()=>whenDone({width,height}), 1000)
    }
    imageLoader.src = src
}

const clamp = (num, min, max) => {
    return Math.min(Math.max(num, min), max);
};

const snap = (num, step) => Math.round(num / step) * step

class PhotoGallery extends Component {
    state = {
        index:0,
        showSlider: false, 
        showDiv: true,
        images:[
            {
                original: 'images/firewood.png',
                thumbnail: 'images/firewood.png',
                src:'images/firewood.png'
            },
            {
                original: 'images/ferriswheel.png',
                thumbnail: 'images/ferriswheel.png',
                src: 'images/ferriswheel.png'
            },
            {
                original: 'images/palmtrees.png',
                thumbnail: 'images/palmtrees.png',
                src: 'images/palmtrees.png'
            },
            {
                original: 'images/mistyslopes.png',
                thumbnail: 'images/mistyslopes.png',
                src: 'images/mistyslopes.png'
            },
            {
                original: 'images/beachhuts.png',
                thumbnail: 'images/beachhuts.png',
                src: 'images/beachhuts.png'
                
            },
            {
                original: 'images/citycycle.png',
                thumbnail: 'images/citycycle.png',
                src: 'images/citycycle.png'
            },
            // {
            //     original: 'images/beachhuts.png',
            //     thumbnail: 'images/beachhuts.png',
            //     src: 'images/beachhuts.png'
            // },
            // {
            //     original: 'images/citycycle.png',
            //     thumbnail: 'images/citycycle.png',
            //     src: 'images/citycycle.png'
            // },
            {
                original: 'images/mountainlake.png',
                thumbnail: 'images/mountainlake.png',
                src: 'images/mountainlake.png'
            }
        ]
    }
    componentDidUpdate(){
        clearTimeout(this.timeout)
        this.timeout = setTimeout( ()=> {
            this.msnry.layout()
        },300)
    }
    componentDidMount(){
        const grid = this.rootElement
        const msnry = new Masonry( grid, {
            itemSelector: '.photo',
            columnWidth: gridSize,
            isFitWidth:true
        });
        this.msnry = msnry
        const number = this.state.images.length
        const factor = ( number > 10
        ? 4
        : ( number < 5
          ? 1
          : 4
          )
        )
        this.state.images.forEach((image,index) => {
            loadImage(image.src,({width,height})=>{
                const clampedHeight = snap(height / factor, gridSize)
                const clampedWidth = snap(width / factor, gridSize)
                const newImage = { ...image, loaded:true, width, height, clampedWidth, clampedHeight }
                const images = this.state.images.slice()
                images[index] = newImage
                this.setState((state)=>({...state,images}))
            })
        })
    }
    onKeyDown = (evt) => {
        console.log(evt.keyCode)
        if(evt.keyCode === 27 ){
            this.setState({showSlider:false, showDiv: true})
        }
    }
    openSlider(index){
        this.setState({ index: index, showSlider: true, showDiv: false })
        var temp = this.state.images[0];
        this.state.images[0] = this.state.images[index];
        this.state.images[index] = temp;
    }
    render() {
        return (
            <div>
                <div tabIndex={this.state.index} 
                onKeyDown={this.onKeyDown} 
                style={{position: 'relative', top: 0, left: 0, right: 0, bottom: 0, background:'rgba(0, 0, 0, 0.4)', display:(this.state.showSlider ? 'block' : 'none')}}>
                    <ImageGallery items={this.state.images} />                          
                    <div style={{position:'absolute', top:'0', right:'0', background:'Red', width:30,height:30}} onClick={()=>this.setState({showSlider:false, showDiv: true})}>
                        <div style={{ cursor:'pointer',color:'lightgray', textAlign:'center',fontSize: 20}}>X</div>
                    </div> 
                </div>
                <div className="PhotoSection" style={{ display: (this.state.showDiv ? 'block' : 'none')}}>
                    <div ref={(element)=>this.rootElement = element} className="Photos"> 
                        { this.state.images.map( (image, index ) => {
                            return <Background onClick={()=>this.openSlider(index)} 
                            key={image.src} 
                            loaded={image.loaded} 
                            width={image.clampedWidth} 
                            height={image.clampedHeight} 
                            src={image.src} 
                            alt={index} />
                        })}   
                    </div>
                </div>
                <div style={{width:'100%',clear:'both'}}></div>
            </div>
        );
    }
}

export default PhotoGallery