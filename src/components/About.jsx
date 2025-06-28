import UserContext from "../utils/UserContext";
import User from "./User";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      {/* <div>
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
      </div> */}
      <h1>This is namaste react</h1>
      <User />
    </div>
  );
};

export default About;
