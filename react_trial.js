'use strict';

const e = React.createElement;
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));

/*
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#react_trial');
ReactDOM.render(e(LikeButton), domContainer);
*/