import "./Message.css"

const Message = ({own}) => {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img className="messageImg" 
        src="https://i.ibb.co/xjyvLKQ/pexels-pixabay-220453.jpg" 
        alt=""/>
      <p className="messageText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquid odit molestiae magni nostrum assumenda. Tenetur nesciunt dolor adipisci optio quia, hic consequatur facilis numquam error commodi suscipit, laboriosam quis.</p>
      </div>
      <div className="messageBottom">1 hour ago</div>
    </div>
  )
}

export default Message
