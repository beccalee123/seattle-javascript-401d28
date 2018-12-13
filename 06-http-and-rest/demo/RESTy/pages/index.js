import React from 'react';
import superagent from 'superagent';

// This JSON pretty component requires the window to work
// When we're using next.js to render on the server, we need
// to use next.js' dynamic loader to delay it rendering.
// Otherwise, this would be:
//  import ReactJson from ('react-json-view')
import dynamic from 'next/dynamic'
const ReactJson = dynamic(() => import('react-json-view'), {
  ssr: false
});

export default class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: '',
      header: {},
      body: {}
    };

  }

  changeURL = (event) => {
    let url = event.target.value;
    this.setState({url});
  };

  callAPI = (event) => {
    event.preventDefault();
    superagent.get(this.state.url)
      .then( response => {
        let body = response.body;
        this.setState({body});
        console.log(this.state);
      })
  };


  render() {

    return (
      <section>
        <form onSubmit={this.callAPI}>
          <input placeholder="URL" onChange={this.changeURL}/>
        </form>
        <ReactJson src={this.state.body} />
      </section>
    );
  }

}
