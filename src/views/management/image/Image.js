import React, { Component } from 'react';
import ImageInput from './ImageInput';
import ImageList from './ImageList';
import './Image.css';

export default class Image extends Component {
    constructor(props) {
        super(props);
        this.image = null;
    }
    render() {
        return (
            <section className="image-section">
                <div className="image-list-section">
                    <ImageList />
                </div>
                <div className="image-section-warpper">
                    <div className="image-upload-section">
                        <ImageInput />
                    </div>
                    <div className="image-list-preview-section">
                        <img
                            style={{ width: '100%', height: '100%' }}
                            className="image-list-preview"
                            src="https://refeely-image.s3.ap-northeast-2.amazonaws.com/defaultPreview.jpeg"
                            alt="img preview"
                            ref={(img) => (this.img = img)}
                            onError={() =>
                                (this.img.src =
                                    'https://refeely-image.s3.ap-northeast-2.amazonaws.com/defaultPreview.jpeg')
                            }
                        />
                    </div>
                </div>
            </section>
        );
    }
}
