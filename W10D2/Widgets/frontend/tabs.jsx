import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
  }

  Header({ title }, i) {
    const changeHeader = () => {

      this.setState({ index: i })
    }

    const className = (i === this.state.index) ? "selectedTab" : "unselectedTab"

    return (
      <li className={className} onClick={changeHeader} key={i}>
        <h1>{title}</h1>
      </li>
    )
  }

  render() {
    return (
      <div className='tabs'>
      <h1>Tabs</h1>
        <ul>
          {this.props.tabContent.map((ele, i) => {
            return this.Header(ele, i)
          })}
        </ul>
        <div className='tabs-article-container'>
          <div>
            {this.props.tabContent[this.state.index].content}
          </div>
        </div>
      </div>
    )
  }
}

export default Tabs;