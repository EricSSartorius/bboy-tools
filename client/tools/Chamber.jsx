var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

Chamber = React.createClass({
  render: function() {
    let { track, currentTime } = this.props;
    return (
      <div className="container">
        <ReactCSSTransitionGroup transitionName="pagetrans" transitionAppear={true}>
          <div className="types practice-tools">
            <h1>One In The Chamber</h1>
          </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});