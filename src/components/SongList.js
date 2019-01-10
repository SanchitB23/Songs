import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectSong } from "../actions";

export class SongList extends Component {
    static propTypes = {
        // prop: PropTypes
        songs: PropTypes.array.isRequired
    }
    renderList() {
        return this.props.songs.map((song, i) => {
            return (
                <div className='item' key={i}>
                    <div className='right floated content'>
                        <button className='ui button primary' onClick={() => {
                            this.props.selectSong(song)
                        }
                        }>Select</button>
                    </div>
                    <div className='content'>{song.title}</div>
                </div>
            )
        })
    }
    render() {
        return (
            <div className='ui divided list'>
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    songs: state.songs,
    selectedSong: state.selectedSong
})

const mapDispatchToProps = {
    selectSong
}

export default connect(mapStateToProps, mapDispatchToProps)(SongList)
