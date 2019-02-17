import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import WatchAddress from './watch-address.jsx';

class Watcher extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      selectedAddress: '',
      contractAddress: '',
      addressInput: '',
      watching: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.startWatching = this.startWatching.bind(this);
    this.doneWatching = this.doneWatching.bind(this);
  }

  handleChange(event) {
    if(event.target.value === 'custom') {
      this.setState({ custom: true, selectedAddress: 'custom', addressInput: '' });
    }
    else {
      this.setState({ custom: false, selectedAddress: event.target.value });
    }
  }

  handleInputChange(event) {
    this.setState({ addressInput: event.target.value });
  }

  startWatching(event) {
    if(this.state.selectedAddress === 'custom') {
      this.setState({ watching: true, contractAddress: this.state.addressInput });
    }
    else {
      this.setState({ watching: true, contractAddress: this.state.selectedAddress });
    }
  }

  doneWatching(event) {
    this.setState({ watching: false, contractAddress: '' });
  }

  render() {
    console.log(this.props.contracts)
    return <div>
      {!this.state.watching && <span>Select Address to watch:</span>}
      {!this.state.watching && <select disabled={this.state.watching} value={this.state.selectedAddress} onChange={this.handleChange}>
        <option disabled value=''>Select an address</option>
        {this.props.contracts.map((contract, index) => <option key={contract.address} value={contract.address}>
          {contract.address}
        </option>)}
        <option value='custom'>Enter custom address</option>
      </select>}

      {!this.state.watching && this.state.custom && <span>
        Enter contract address:
        <input disabled={this.state.watching} type="text" value={this.state.addressInput} onChange={this.handleInputChange} />
        {!this.state.watching && this.state.selectedAddress && this.state.addressInput && <button onClick={this.startWatching}>
          Start Watching
        </button>}
      </span>}
      {this.state.contractAddress && <WatchAddress doneWatching={this.doneWatching} address={this.state.contractAddress} />}
    </div>;
  }
}

export default Watcher;