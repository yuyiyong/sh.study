import React from 'react';
const withHocWarapped  = (WrappedComponent) => {
  return class extends React.Component {
      constructor(props){
          super(props);
          this.state = {
              data: 20
          }
      }
      render() {
          return <WrappedComponent data={this.state.data} {...this.props}/>
      }
  }
};
export default withHocWarapped ;