import React, {Component} from 'react';
/*import {connect} from 'dva';
@connect(({})=>({
loading:loading.effects[''],
}))*/
class UnContrulCo extends Component {
  constructor(props) {
    super(props);
  }
  handleSubmit=(event) => {
      event.preventDefault();
      console.log("this.fileInput.files[0]",this.fileInput.files[0]);
      alert(
          `Selected file - ${this.fileInput.files[0].name}`
      );
  };

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <label>
                Upload file:
                <input
                    type="file"
                    ref={input => {
                        this.fileInput = input;
                    }}

                />

            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    )
  }
}

export default UnContrulCo;