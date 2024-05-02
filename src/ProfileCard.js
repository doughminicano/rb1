function ProfileCard({ title, handle, image, description }) {
  // #WAY NUMBER ONE IS TO PUT PROP NAME AS ABOVE
  // name your props either way below but top method uses less lines

  // #way2
  // const title = props.title;
  // const handle = props.handle;

  // #way3
  // const { title, handle} = props;

  // end example

  return (
    <div className="cardName">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src={image}
            alt="logo"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                src={image}
                alt="logo"
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">{handle}</p>
          </div>
        </div>

        <div className="content">
          {description}<a>@{title}</a>
        </div>
      </div>
    </div>

  )
}

export default ProfileCard;
