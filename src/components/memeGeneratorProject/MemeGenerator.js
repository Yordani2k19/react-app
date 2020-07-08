import React from "react";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    };
    // when using arrow functions binding is not needed
    // ------------------------------------------------
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount = () => {
    // even this shit too
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      });
  };

  handleChange = event => {
    // binding not needed
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    // arrow functions for everyone
    event.preventDefault();
    const ranNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const ranMemeImg = this.state.allMemeImgs[ranNum].url;
    this.setState({ randomImg: ranMemeImg });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <button>Gen</button>
        </form>
        <div>
          <h2>{this.state.topText}</h2>
          <img style={{ height: "300px" }} src={this.state.randomImg} alt="" />
          <h2>{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
