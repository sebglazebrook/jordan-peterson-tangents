import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class AddPost extends React.Component {

  formStyle() {
    return ({
      display: 'flex',
      'flex-direction': 'column',
    });
  }

  render() {
    return (
      <div>
        <h1>Share a JP tangent with the world</h1>
        <form style={this.formStyle()} action="/posts" method="post">
          <label>Title</label>
          <input type="text" name="post[][title]"/>
          <label>Short summary of the tangent</label>
          <input type="text" name="post[][synopsis]"/>
          <label>Youtube URL</label>
          <input type="text" name="post[][video_url]"/>
          <label>When does the tangent start?</label>
          <input type="text" name="post[][start_time]"/>
          <label>How long does the tangent last?</label>
          <input type="text" name="post[][duration]" />
            <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

class Header extends React.Component {

  render() {
    return (
      <div class="header">
        <div class="title">
          Jordan Peterson Tangents
        </div>
        <div class="add">
          <div class="link-wrapper">
            <div>
              <Link to="/posts/add">+</Link>
            </div>
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
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Posts}/>
          <Route path="/posts/add" component={AddPost}/>
          <Footer />
        </div>
      </Router>
    );
  }

}

export default App;
