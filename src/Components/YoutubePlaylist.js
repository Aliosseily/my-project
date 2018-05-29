import React, { Component } from 'react'
import { load_playlist } from './load_playlist'
import './YoutubePlaylist.css'
import MediaQuery from 'react-responsive';
import Slider from "react-slick";
import Navbar from './Navbar'


export class YoutubePlaylist extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loading:true,
            videoList: [],
            error:null,
            currentIndex:0
        };
    }


    componentDidMount() {
        load_playlist(this.props.playlistId)
            .then(videoList=>{
                this.setState({videoList,loading:false})
            })
            .catch(error=>{
                this.setState({error:error.message,loading:false})
            })
    }

    render() {
       
        if(this.state.loading){
            return <div>loading...</div>
        }
        const { videoList, currentIndex } = this.state
        const currentVideo = videoList[currentIndex]
        const currentVideoId = currentVideo.id
        const currentVideoUrl = `https://www.youtube.com/embed/${currentVideoId}`
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return (
            
            <div className="youtube-container1">
            <MediaQuery query="(max-width: 500px)">
                        
            <Slider {...settings} className="slider">
                        {this.state.videoList.map(({description,title,id,thumbnail}, i) => {
                            console.log(videoList)
                        const current = i === currentIndex
                        const className = `youtube-playlist-item`+(current?' youtube-item-current':'')
                        return (
                           <div className="sliderbox">
                                <img src={thumbnail} alt={`cover image for ${title}`}/>
                           </div>
                        )
                    })}
                        </Slider>
                        </MediaQuery>
                        <Navbar/>
                        <MediaQuery query="(min-width: 500px)">
            
            <div className="youtube-container">
                { this.state.error && <div>{this.state.error}</div>}
                <div className="youtube-player-container">
                <div> <p style={{float:"left" , marginLeft:"20px", fontStyle: "normal" ,fontSize:"18px"}} >DIY</p></div>
                    <iframe className="youtube-player" title="youtube_player" src={currentVideoUrl}/>
                </div>
                <div className="youtube-playlist-container">
                    {this.state.videoList.map(({description,title,id,thumbnail}, i) => {
                        const current = i === currentIndex
                        const className = `youtube-playlist-item`+(current?' youtube-item-current':'')
                        return (
                        
                        
                           <div className={className} key={id} id={id} onClick={()=>this.setState({currentIndex:i})}>
                           <div className="box">
                                <img src={thumbnail} alt={`cover image for ${title}`}/>
                                </div>
                                
                            </div>
                        )
                    })}
                </div>
            </div>
            </MediaQuery>
            </div>

        )
    }
}