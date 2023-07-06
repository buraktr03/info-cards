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
          <div className="text-center card-top">
            <div className="img-wrapper d-flex align-items-center">
              <img src={avatar} className="card-img-top mx-2" alt="..." />
            </div>
            <h5 className="card-title fw-bold mx-auto">
              {name} {surname.toUpperCase()}
            </h5>
          </div>
          <hr />
          <p className="card-text">
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
