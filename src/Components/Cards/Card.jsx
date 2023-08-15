import { Fragment } from "react";
import classes from "./Card.module.css";
import { BsCheckCircle } from "react-icons/bs";
import PropTypes from "prop-types";
const Card = (props) => {
  return (
    <Fragment>
      <section className={classes.box}>
        <div className={classes.heading}>
          <h1>${props.price}/mth</h1>
          <br />
          <h6>
            <strong>{props.planName}</strong>
          </h6>
          <p>Billed Annually</p>
        </div>
        <br />
        <p>
          <BsCheckCircle style={{ color: "blue" }} /> {props.firstRow}
        </p>
        <p>
          <BsCheckCircle style={{ color: "blue" }} /> {props.secondRow}
        </p>
        <p>
          <BsCheckCircle style={{ color: "blue" }} /> {props.thirdRow}
        </p>
        <p>
          <BsCheckCircle style={{ color: "blue" }} /> {props.fourthRow}
        </p>
        <p>
          <BsCheckCircle style={{ color: "blue" }} /> {props.fifthRow}
        </p>
        <button className={classes.btn}>Get Started</button>
      </section>
    </Fragment>
  );
};
Card.propTypes = {
  planName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  firstRow: PropTypes.string.isRequired,
  secondRow: PropTypes.string.isRequired,
  thirdRow: PropTypes.string.isRequired,
  fourthRow: PropTypes.string.isRequired,
  fifthRow: PropTypes.string.isRequired,
};
export default Card;
