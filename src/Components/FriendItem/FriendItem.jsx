import "./FriendItem.sass";

export const FriendItem = ({el, title}) => {
  return (
    <li className="friendItem" key={el.id}>
      <div className="friendItem__image-container">
        <img className="friendItem__img" src={el.photo} alt="" />
        
      </div>
      {title ? <h2 className='friendItem__title'>{el.title}</h2>: ''}
    </li>
  );
};
