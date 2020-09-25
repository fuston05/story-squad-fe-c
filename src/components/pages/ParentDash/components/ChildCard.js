import React from 'react';
import { messagePopup } from '../../../../utils/message-popup';

const ChildCard = ({ child }) => {
  return (
    <div className="Card Child">
      <a href="/dashboard" className="cancel" onClick={() => {}}>
        Delete
      </a>
      <h2>{child.name}</h2>
      <button
        className="submitBtn"
        readOnly={true}
        onClick={() =>
          messagePopup('warning', 'This feature is not available yet!')
        }
      >{`${child.name}'s Settings`}</button>
    </div>
  );
};

export default ChildCard;
