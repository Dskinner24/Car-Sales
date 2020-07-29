import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../actions/addedAction'

const AdditionalFeature = props => {
  const dispatch = useDispatch();
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => dispatch(addItem(props.feature))} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;