import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import sr from "../img/star-solid.svg";
class Star extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false,
    };
  }

  componentDidMount() {
    const favorite = localStorage.getItem(this.props.id);
    if (favorite) {
      this.setState({ favorite: true });
    }
  }

  handleFavoriteClick = () => {
    const favorite = !this.state.favorite;
    this.setState({ favorite });
    if (favorite) {
      localStorage.setItem(this.props.id, true);
    } else {
      localStorage.removeItem(this.props.id);
    }
  };

  render() {
    const { favorite } = this.state;
    return (
      <div onClick={this.handleFavoriteClick}>
        <span
          className="iconStar"
          style={{ color: favorite ? "black" : "orange" }}
        >
      ★
        </span>
      </div>
    );
  }
}

export default Star;
