import React, { Component } from 'react';
import './Image.css';

export default class ImagePreview extends Component {
    constructor(props) {
        super(props);
        this.src = props.src;
        this.alt = props.alt;
        this.removeUpload = props.removeUpload;
        this.state = {};
    }
    render() {
        return (
            <div className="file-upload-content">
                <img
                    className="file-upload-image"
                    src={this.src}
                    alt={this.alt}
                />
                <div className="image-title-wrap">
                    <button
                        type="button"
                        onClick={this.removeUpload.bind(this, this)}
                        className="remove-image"
                    >
                        Remove
                    </button>
                </div>
            </div>
        );
    }
}
