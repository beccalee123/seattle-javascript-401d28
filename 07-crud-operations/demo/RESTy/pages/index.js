import React from 'react';
import superagent from 'superagent';
import '../style/app.scss';

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
      method: 'get',
      requestBody: '',
      header: {},
      body: {}
    };

  }

  handleChange = event => {
    let prop = event.target.name;
    let value = event.target.value;
    this.setState({[prop]:value});
  };

  callAPI = (event) => {
    event.preventDefault();
    try {
      let body = this.state.requestBody && JSON.parse(this.state.requestBody);
      superagent(this.state.method, this.state.url)
      .set('Content-Type', 'application/json')
      .send(body)
      .then( response => {
        let header = response.header;
        let body = response.body;
        this.setState({header,body});
      })
      .catch(e => console.error(e));
    }catch(e) { console.error(e); }

  };


  render() {

    return (
      <section>
        <form onSubmit={this.callAPI}>
          <select name="method" onChange={this.handleChange}>
            <option value="get">GET</option>
            <option value="post">POST</option>
            <option value="put">PUT</option>
            <option value="PATCH">PATCH</option>
            <option value="delete">DELETE"</option>
          </select>
          <input type="text" name="url" placeholder="URL" onChange={this.handleChange}/>
          <button type="submit">Go!</button>
          <div>
            <textarea placeholder="Raw JSON Body" name="requestBody" onChange={this.handleChange}></textarea>
          </div>
        </form>
        <ReactJson name="Headers" enableClipboard={false} collapsed={true} src={this.state.header} />
        <ReactJson name="Response" enableClipboard={false} src={this.state.body} />
      </section>
    );
  }

}
