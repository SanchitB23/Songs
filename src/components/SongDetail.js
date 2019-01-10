import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class SongDetail extends Component {
    static propTypes = {
        song: PropTypes.object
    }

    render() {
        console.log(this.props)
        const { song } = this.props
        if (!song) {
            return <div>Select a song</div>
        }
        return (
            <div>
                <h3>Details for:</h3>
                <p>
                    Title:{song.title}
                    <br></br>
                    Duration: {song.duration}
                </p>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    song: state.selectedSong
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SongDetail)