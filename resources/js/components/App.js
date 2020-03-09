import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">Tweet Something!</div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                    <textarea className="form-control" rows="5" maxLength="140" placeholder="Enter message here..." required/>
                                    </div>
                                    <input type="submit" value="Post" className="form-control" />>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">Example Component</div>

                            <div className="card-body">I'm an example component!</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;