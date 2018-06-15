import React from "react";

class Header extends React.Component {

  render() {
    return (
      <div class="header">
        <div class="title">
          Jordan Peterson Tangents
        </div>
        <div class="add">
          <div class="link-wrapper">
            <a href="/posts/add">+</a>
          </div>
        </div>
      </div>
    );
  }

}

class Post extends React.Component {

              //<% post.tags.each do |tag| %>
              //<div><%= tag.text %></div>
              //<% end %>
  render() {
    return (
      <div class="post">
        <div class="title">
          { this.props.title }
        </div>
        <div class="video-wrapper">
          <div class="video">
            <iframe width="100%" height="315" src={this.props.video_url}></iframe>
          </div>
          <div class="metadata">
            <div class="start-time">
              Starts: {this.props.start_time}
            </div>
            <div class="duration">
              Duration: {this.props.duration}
            </div>
            <div class="tags">
            </div>
          </div>
        </div>
        <div class="summary">
          { this.props.synopsis }
        </div>
      </div>
    );
  }

}

class Posts extends React.Component {

  posts() {
    return window.postData || [];
  }

  render() {
    return (
      <div class="content">
        { this.posts().map((post, index) => {
          return <Post {...post}/>;
        })}
      </div>
    );
  }

}

class Footer extends React.Component {

  render() {
    return (
      <div class="footer">
      </div>
    );
  }

}


class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Posts />
        <Footer />
      </div>
    );
  }

}

export default App;
