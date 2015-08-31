var controlsToggle = 'controls';
// Move component - represents a single todo item
Move = React.createClass({
  propTypes: {
    // This component gets the move to display through a React prop.
    // We can use propTypes to indicate it is required
    move: React.PropTypes.object.isRequired
  },
 
  getInitialState() {
    return {
      controlsToggle: false
    }
  },

  toggleControls() {
    this.setState({
      controlsToggle: !this.state.controlsToggle
    });
  },
 
  deleteThisMove() {
    Moves.remove(this.props.move._id);
  },

  render() {
    // Give moves a different className when they are checked off,
    // so that we can style them nicely in CSS
    var moveClassName = this.props.move.checked ? "checked" : "";
    moveClassName += ' move';
    var controlsToggle = this.state.controlsToggle ? 'open' : "";
    controlsToggle += ' controls';

    return (
      <li className={moveClassName}>
        <div className={controlsToggle}>
        <button className="delete btn" onClick={this.deleteThisMove}>
          &times;
        </button>
        </div> 
        <span className="text" contentEditable={true}>{this.props.move.name}<span className="move-value">{this.props.move.value}</span></span>
        <span className="edit-toggle" onClick={this.toggleControls}><i className="fa fa-pencil"></i></span>
      </li>
    );
  }
});