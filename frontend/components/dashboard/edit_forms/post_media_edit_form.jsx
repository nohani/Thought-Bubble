import React from 'react';

export default class PostMediaEditForm extends React.Component {
  constructor(props) {
    super(props);

    const { post } = this.props;

    this.state = {
      id: post.id,
      post_type: post.post_type,
      link: post.link,
    }

    this.handlePhotoSubmit = this.handlePhotoSubmit.bind(this);
    this.handleVideoSubmit = this.handleVideoSubmit.bind(this);
    this.handlePhotoFile = this.handlePhotoFile.bind(this);
    this.handleVideoFile = this.handleVideoFile.bind(this);
  }

/////////////////////////////

  handlePhotoFile(e) {
    this.setState({ link: e.currentTarget.files[0] });
  }

  handlePhotoSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[post_type]', this.state.post_type);
    formData.append('post[photo]', this.state.link);
    formData.append('post[id]', this.state.id)

    this.props.editMediaPost(formData);
    this.props.editModeBoolean(false);
  }

  renderPhotoEdit() {
   return( 
       <form>
        <label htmlFor="file">File</label>
        <input id="file" type="file" onChange={this.handlePhotoFile} />
        <div className="form-buttons-photo">
          <button className="form-close-button" onClick={() => this.props.editModeBoolean(false)}>Close</button>
          <input className="form-post-button" type="submit" value="Save" onClick={this.handlePhotoSubmit} />
        </div>
      </form>
   )
  }

/////////////////////////////

  handleVideoFile(e) {
    this.setState({ link: e.currentTarget.files[0] });
  }

  handleVideoSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[post_type]', this.state.post_type);
    formData.append('post[video]', this.state.link);
    formData.append('post[id]', this.state.id)

    this.props.editMediaPost(formData);
    this.props.editModeBoolean(false);
  }

  renderVideoEdit() {
    return (
      <form>
        <label htmlFor="file">File</label>
        <input id="file" type="file" onChange={this.handleVideoFile} />
        <div className="form-buttons-video">
          <button className="form-close-button" onClick={() => this.props.editModeBoolean(false)}>Close</button>
          <input className="form-post-button" type="submit" value="Save" onClick={this.handleVideoSubmit} />
        </div>
      </form>
    )
  }



////////////////////////////

  render() {
    console.log(this.props);
    switch (this.props.post.post_type) {
      case "photo":
        return this.renderPhotoEdit();
      case "video":
        return this.renderVideoEdit();
  }
}
}