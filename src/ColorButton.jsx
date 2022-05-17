import React from 'react'

class ColorButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'red',
      checked: this.props.checked,
    }
  }

  render() {
    return (
      <div>
        
        <button onClick={(e) => {
            if(this.state.color === 'red'){
                this.setState({color: 'green'})
            }
            else{
                this.setState({color: 'red'})
            }                       
          }}
          style={{color: this.state.color   
                 }}

          disabled={this.state.checked}
          
          >
          Change me
        </button>
        <br />               
      </div>
    )
  }
}

export default ColorButton