import React, { Component } from "react";
import ReactDOM from "react-dom";
import ImagePreview from "./ImagePreview";
import Spinner from "./Spinner";
import "./Image.css";

export default class ImageInput extends Component {
  constructor(props) {
    super(props);
    this.state = { imageDataList: [], isLoading: false };
    this.imageUploadWrap = null;
    this.input = null;
    this.readURL = this.readURL.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
  }

  uploadImage() {
    let dataSet = new FormData();
    for (const file of this.input.files) {
      dataSet.append("files", file, file.name);
    }
    console.log(dataSet);
    fetch("http://localhost:8000/image/upload/", {
      method: "POST", // or 'PUT'
      body: dataSet,
    }).then((response) => {
      if (response.status === 201) window.location.reload();
    });
  }
  removeUpload = (dom) => {
    setTimeout(() => {
      const a = this.state.imageDataList.filter((item) => {
        return item.src !== dom.props.src;
      });
      this.setState({ imageDataList: [] });
      this.setState({ imageDataList: a });
    }, 500);
  };

  loading = (function () {
    var spin = false;
    function setSpin(state) {
      spin = state;
    }

    return {
      stop: function () {
        setSpin(false);
        return spin;
      },
      start: function () {
        setSpin(true);
        return spin;
      },
    };
  })();

  readURL() {
    // progress bar를 참고하여 file upload 상태 체크
    this.setState({ isLoading: true });
    setTimeout(() => {
      if (this.input.files && this.input.files[0]) {
        let $this = this;
        Array.prototype.forEach.call(this.input.files, (item) => {
          let reader = new FileReader();
          reader.onload = function (e) {
            $this.setState({
              imageDataList: [
                ...$this.state.imageDataList,
                {
                  src: e.target.result,
                  name: item.name,
                  file: e,
                },
              ],
            });
          };
          reader.readAsDataURL(item);
        });
        this.imageUploadWrap.classList.remove("image-dropping");
        this.setState({ isLoading: false });
      }
    }, 500);
  }
  componentDidMount() {
    const $this = this;
    this.imageUploadWrap.addEventListener("dragover", function () {
      $this.imageUploadWrap.classList.add("image-dropping");
    });
    this.imageUploadWrap.addEventListener("dragleave", function () {
      $this.imageUploadWrap.classList.remove("image-dropping");
    });
  }

  render() {
    return (
      <section className="upload-wrapper">
        <div id="FileUpload">
          <div className="wrapper">
            <div className="file-upload">
              <div
                className="image-upload-wrap"
                ref={(ref) => {
                  this.imageUploadWrap = ref;
                }}
              >
                <label className="file-upload-label">
                  <h3>Drag and drop a file or select add Image</h3>
                  <input
                    className="file-upload-input"
                    id="file-uploader"
                    type="file"
                    onDrop={this.readURL}
                    accept="image/*"
                    ref={(ref) => {
                      this.input = ref;
                    }}
                    multiple
                  />
                </label>
                {this.state.isLoading ? <Spinner /> : ""}
              </div>
            </div>
          </div>
        </div>
        <div className="image-upload-preview-section">
          <div className="section-wrapper">
            {this.state.imageDataList.map((item) => (
              <ImagePreview
                src={item.src}
                alt={item.name}
                removeUpload={this.removeUpload}
              />
            ))}
          </div>
          <button
            id="upload-btn"
            type="button"
            className="btn btn-primary"
            onClick={this.uploadImage}
          >
            Upload
          </button>
        </div>
      </section>
    );
  }
}
