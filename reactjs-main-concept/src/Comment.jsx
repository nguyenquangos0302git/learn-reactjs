const formateDate = (date) => new Date(date).toTimeString();

const Avatar = (props) => {
  return <img src={props.author.avatarUrl} alt={props.author.name} />;
};

const UserInfo = (props) => {
  return (
    <div className='UserInfo'>
      <Avatar author={props.author} />
      <div className='UserInfo-name'>{props.author.name}</div>
    </div>
  );
};

const Comment = (props) => {
  return (
    <div className='Comment'>
      <UserInfo author={props.author} />
      <div className='Comment-text'>{props.text}</div>
      <div className='Comment-date'>{formateDate(props.date)}</div>
    </div>
  );
};

export default Comment;
