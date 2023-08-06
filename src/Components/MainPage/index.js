import {Component} from 'react'
import {v4 as uuid} from 'uuid'
// eslint-disable-next-line no-unused-vars
import PasswordNavBar from '../PasswordNavBar'
import PasswordItem from '../PasswordItem'
import './index.css'

class MainPage extends Component {
  state = {
    searchInput: '',
    pwd: '',
    isTicked: false,
    webname: '',
    username: '',
    inputList: [],
  }

  addPassword = event => {
    this.setState({pwd: event.target.value})
  }

  addUsername = event => {
    this.setState({username: event.target.value})
  }

  addWebsite = event => {
    this.setState({webname: event.target.value})
  }

  onSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onSubmitted = event => {
    event.preventDefault()
    const {pwd, webname, username} = this.state
    const NewItem = {
      id: uuid(),
      inputWebsite: webname,
      inputPassword: pwd,
      inputUsername: username,
    }
    this.setState(prev => ({
      inputList: [...prev.inputList, NewItem],

      pwd: '',
      webname: '',
      username: '',
      searchInput: '',
    }))
  }

  onChecked = () => {
    this.setState(prev => ({isTicked: !prev.isTicked}))
  }

  onDelete = id => {
    const {inputList} = this.state
    const DeletedList = inputList.filter(each => each.id !== id)
    this.setState({inputList: DeletedList})
  }

  renderPassword = () => {
    const {inputList, isTicked, searchInput} = this.state
    const actualList = inputList.filter(each =>
      each.inputWebsite.toLowerCase().includes(searchInput.toLowerCase()),
    )

    console.log(actualList)
    return (
      <ul className="unordered">
        {actualList.map(each => (
          <PasswordItem
            onDelete={this.onDelete}
            isTicked={isTicked}
            key={each.id}
            details={each}
          />
        ))}
      </ul>
    )
  }

  renderNoPassword = () => {
    const imgsrc =
      'https://assets.ccbp.in/frontend/react-js/no-passwords-img.png'

    return (
      <div className="noPassword">
        <div className="noPassword-inside">
          <img alt="no passwords" className="noPassword-img" src={imgsrc} />
          <p>No Passwords</p>
        </div>
      </div>
    )
  }

  render() {
    const {inputList, webname, searchInput, username, pwd} = this.state
    const actualList = inputList.filter(each =>
      each.inputWebsite.toLowerCase().includes(searchInput.toLowerCase()),
    )

    console.log(inputList)
    const PasswordView =
      actualList.length === 0 ? this.renderNoPassword() : this.renderPassword()

    return (
      <>
        <div className="outside">
          <div className="menu">
            <img
              className="logo"
              alt="app logo"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            />
          </div>
          <div className="inside">
            <form onSubmit={this.onSubmitted} className="input-box">
              <h1 className="input-head">Add New Password</h1>
              <div className="each-input">
                <div className="each-img">
                  <img
                    alt="website"
                    className="input-img"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  />
                </div>

                <input
                  type="input"
                  value={webname}
                  onChange={this.addWebsite}
                  className="website"
                  placeholder="Enter Website"
                />
              </div>
              <div className="each-input">
                <div className="each-img">
                  <img
                    alt="username"
                    className="input-img"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                  />
                </div>

                <input
                  type="input"
                  value={username}
                  onChange={this.addUsername}
                  className="website"
                  placeholder="Enter Username"
                />
              </div>
              <div className="each-input">
                <div className="each-img">
                  <img
                    alt="password"
                    className="input-img"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  />
                </div>

                <input
                  type="password"
                  value={pwd}
                  onChange={this.addPassword}
                  className="website"
                  placeholder="Enter Password"
                />
              </div>
              <div className="but-box">
                <button type="submit" alt="add" className="add-btn">
                  Add
                </button>
              </div>
            </form>
            <div className="right">
              <img
                className="bg-logo"
                alt="password manager"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              />
            </div>
          </div>
        </div>
        <div className="page-second">
          <div className="page-second-inside">
            <div className="navbar-top">
              <div className="left">
                <h1 className="ur-pwd">Your Passwords</h1>
                <p className="count">{actualList.length}</p>
              </div>
              <div className="right-search">
                <div className="search-box-personal">
                  <img
                    alt="search"
                    className="search-img"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  />
                </div>

                <input
                  onChange={this.onSearch}
                  value={searchInput}
                  className="search-bar"
                  alt="search"
                  type="search"
                  placeholder="search"
                />
              </div>
            </div>
            <hr className="hr-line" />
            <div className="check-menu">
              <div>
                <input
                  id="forlabel"
                  type="checkbox"
                  onChange={this.onChecked}
                />
                <label className="showPwd" htmlFor="forlabel">
                  Show Passwords
                </label>
              </div>
            </div>
            {PasswordView}
          </div>
        </div>
      </>
    )
  }
}

export default MainPage
