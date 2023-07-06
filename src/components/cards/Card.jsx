import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
//import { faPhone } from '@fortawesome/free-solid-svg-icons'
//import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import "./Card.css";

const Card = ({ name, surname, phone, email, avatar, job }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="card m-2">
        <div className="card-body">
          <div className="img">
            <div className="img-div">
              <img
                src={avatar}
                className="card-img-top rounded-circle m-2"
                alt="..."
              />
            </div>

            <h5 className="card-title text-center fw-bold text-nowrap mx-5">
              {name} {surname.toUpperCase()}
            </h5>
          </div>
          <hr />
          <p className="card-text mt-2">
            <FontAwesomeIcon icon={faUserTie} /> {job}
          </p>
          <p className="card-text">
            <FontAwesomeIcon icon={faPhone} /> {phone}
          </p>
          <FontAwesomeIcon icon={faEnvelope} />{" "}
          <a className="card-text email-link" href={`mailto:${email}`}>
            {email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
