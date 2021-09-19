import { useDispatch } from "react-redux";
import { loggedOut } from "../actions";
import { useHistory } from "react-router-dom";

function Profile(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const routeChange = () => {
    dispatch(loggedOut());
    let path = `/`;
    history.push(path);
  };
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <h2 className="card-heading">
            Welcome {props.user}
            <small>It's Coffee O'Clock</small>
          </h2>
        </div>
        <div className="action">
          <button className="action-button btn" onClick={routeChange}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
export default Profile;
