import React from 'react';
import PropTypes from 'prop-types';

import styles from './Summary.css';

const Summary = (props) => {
  const {
    title, listingType, location, host, capacity,
  } = props;
  return (
    <div className={styles.listingSummary}>
      <div className={styles.listingType}>
        {listingType.name.toLowerCase()}
      </div>
      <div className={styles.smallscreenTitle}>
        {title}
      </div>
      <div className={styles.headline}>
        <div className={styles.headlineText}>
          <div className={styles.mainTitle}>
            {title}
          </div>
          <div className={styles.city}>
            {location.city}
          </div>
          <Capacity capacity={capacity} />
        </div>
        <div className={styles.host}>
          <img src={host.avatar} className={styles.avatar} alt={host.name} />
          <span>
            {host.name.split(' ')[0]}
          </span>
        </div>
      </div>
    </div>
  );
};

Summary.propTypes = {
  title: PropTypes.string.isRequired,
  listingType: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  location: PropTypes.shape({
    city: PropTypes.string,
    state: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  host: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
  }).isRequired,
  capacity: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.number,
      icon: PropTypes.string,
    }),
  ).isRequired,
};

const Capacity = (props) => {
  const { capacity } = props;
  return (
    <div className={styles.capacity}>
      {capacity.map((field, index) => (
        <span key={`capacity_${index}`} className={styles.capacityField}>
          <img src={field.icon} alt={field.name} />
          {field.number}
          {' '}
          {field.name}
          {field.number !== 1 && 's'}
        </span>
      ))}
    </div>
  );
};

Capacity.propTypes = {
  capacity: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.number,
      icon: PropTypes.string,
    }),
  ).isRequired,
};

module.exports = Summary;
