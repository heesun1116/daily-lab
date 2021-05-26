import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField } from '../../modules/write';

const ContributeBox = () => {
  let [contributeValue, setContri] = useState('');
  const dispatch = useDispatch();
  const contributes = useSelector((state) => state.write.contributes);

  const onClick = useCallback(
    (e) => {
      let contributeValue = e.target.value;
      dispatch(
        changeField({
          key: 'contributes',
          value: contributeValue,
        }),
      );
    },
    [dispatch, contributeValue],
  );

  return (
    <>
      <input
        onClick={onClick}
        type="radio"
        id="notbad"
        name="contributes"
        value="notbad"
      />
      <input
        onClick={onClick}
        type="radio"
        id="good"
        name="contributes"
        value="good"
      />
      <input
        onClick={onClick}
        type="radio"
        id="verygood"
        name="contributes"
        value="verygood"
      />
      <input
        onClick={onClick}
        type="radio"
        id="awesome"
        name="contributes"
        value="awesome"
      />
    </>
  );
};

export default ContributeBox;
