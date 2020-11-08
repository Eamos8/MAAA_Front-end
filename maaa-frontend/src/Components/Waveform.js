import React, { Component } from 'react';
import ReactWaves, { Regions } from '@dschoon/react-waves';
import africa from './file_example_MP3_700KB.mp3'

class Waveform extends Component {
    constructor(props) {
        super(props);

        this.state = {
            wavesurfer: null,
            playing: false,
            hideScrollbar: false,
            cursorWidth: 1,
            pos: 0,
            activeRegion: 'One',
            regions: {
                One: {
                    id: 'One',
                    start: 5,
                    end: 9,
                    color: 'rgba(100, 149, 240, 0.3'
                },
                Two: {
                    id: 'Two',
                    start: 1,
                    end: 4,
                    color: 'rgba(100, 149, 240, 0.3)',
                }
            }
        };
    }


    onLoading = ({ wavesurfer, originalArgs = [] }) => {
        this.setState({ loaded: originalArgs[0] === 100, wavesurfer });
    };

    onPosChange = (pos, wavesurfer) => {
        if (pos !== this.state.pos) {
            this.setState({ pos, wavesurfer });
        }
    };

    secondsToPosition = (sec) => {
        return 1 / this.state.wavesurfer.getDuration() * sec;
    };


    handleSingleRegionUpdate = (e) => {
        const newState = Object.assign(this.state, {
            regions: {
                [e.region.id]: e.region
            }
        });
        this.setState(newState);
    };

    handleRegionClick = (e) => {
        setTimeout(() => {
            this.state.wavesurfer.seekTo(this.secondsToPosition(e.originalArgs[0].start));
        }, 50);
    };

    handleRegionDone = () => {
        this.setState({ playing: false })
    };

    render() {
        return (
            <div className={'container example'}>
                <div
                    onClick={() => { this.setState({ playing: !this.state.playing }) }}>
                        {!this.state.playing ? 'Play' : 'Paused'}
                </div>
                <ReactWaves
                    audioFile={africa}
                    className={'react-waves'}
                    options={{
                        barGap: 2,
                        barWidth: 1.8,
                        barHeight: 2,
                        cursorWidth: 1,
                        height: 200,
                        hideScrollbar: true,
                        progressColor: '#EC407A',
                        responsive: true,
                        waveColor: '#D1D6DA',
                    }}
                    volume={1}
                    zoom={1}
                    pos={this.state.pos}
                    playing={this.state.playing}
                    onPosChange={this.onPosChange}
                    onLoading={this.onLoading}
                >
                    <Regions
                        onSingleRegionUpdate={this.handleSingleRegionUpdate}
                        onRegionClick={this.handleRegionClick}
                        onRegionOut={this.handleRegionDone}
                        regions={this.state.regions}
                    />
                </ReactWaves>
            </div>
        )
    }
};

export default Waveform;