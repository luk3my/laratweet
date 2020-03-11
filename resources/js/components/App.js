import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            body: '',
            posts: []
        };
        //bind
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        // this.postData();
        axios.post('/posts', {
            body: this.state.body
        }).then(response => {
            // console.log(response);
            this.setState({
                posts: [...this.state.posts, response.data],
                body: ''
            })
        });
        //clear input
        this.setState({
            body: ''
        })
    }

    postData() {
        //Ajax request//
        axios.post('/posts', {
            body: this.state.body
        })
    }

    handleChange(e) {
        this.setState({
            body: e.target.value
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">Tweet Something!</div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                    <textarea 
                                                onChange={this.handleChange}
                                                value={this.state.body}
                                                className="form-control"
                                                rows="5"
                                                maxLength="140"
                                                placeholder="Enter message here..."
                                                required/>
                                    </div>
                                    <input type="submit" value="Post!" className="form-control" />
                                </form>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">Recent Posts</div>

                            <div className="card-body">
                                {this.state.posts.map(post => (
                                    <div key={post.id}>
                                        <img src={post.user.avatar} />
                                            <div className="user">
                                                <a href="#">
                                                    <b>{post.user.username}</b>
                                                </a>
                                            </div>
                                            <p>{post.body}</p> 
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;