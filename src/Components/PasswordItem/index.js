import './index.css'

const PasswordItem = props => {
  const {details, isTicked, onDelete} = props
  // eslint-disable-next-line no-unused-vars
  const {inputWebsite, id, inputPassword, inputUsername} = details

  const buttonClicked = () => {
    onDelete(id)
  }

  const fit = isTicked ? (
    <p className="input">{inputPassword}</p>
  ) : (
    <img
      alt="stars"
      className="pwd-img"
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
    />
  )

  return (
    <li className="list-item">
      <p className="input">{inputWebsite}</p>
      <div className="delete-tab">
        <p className="input">{inputUsername}</p>
        <button
          type="button"
          // eslint-disable-next-line react/no-unknown-property
          testid="delete"
          className="delete-btn"
          onClick={buttonClicked}
        >
          <img
            alt="delete"
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
          />
        </button>
      </div>

      {fit}
    </li>
  )
}

export default PasswordItem
