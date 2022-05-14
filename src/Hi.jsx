import React from 'react'

class Hi extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      superhero: '',
    }
  }

  render() {
    return (
      <div>
        <div>Hi {this.props.name}</div>
        <label htmlFor="superhero"> Superhero Name: </label>
        <input
          id="superhero"
          type="text"
          value={this.state.superhero}
          onChange={(e) => {
            this.setState({superhero: e.target.value})
          }}
        />
        <br />
        <label htmlFor="superhero"> Power: </label>
        <input
          id="power"
          type="text"
          value={this.state.power}
          onChange={(e) => {
            this.setState({power: e.target.value})
          }}
        />
        <br />
        <button onClick={() => alert('Hello ' + this.state.superhero + ' power '+this.state.power)}>
          Click me
        </button>
      </div>
    )
  }
}

export default Hi