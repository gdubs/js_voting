import * as React from 'react';

interface IProps {
    content: any;
    closedPopupHandler: (e: React.MouseEvent<{value:unknown}>) => void;
}

const Popup: React.SFC<IProps> = ({ content, closedPopupHandler }) => {
    return (
        <div className="popup" data-test-id="popup">
          <div className="popup-inside">{content}</div>
          <button data-test-id="popup-close" onClick={closedPopupHandler}>close popup</button>
        </div>
    )
}

export { Popup } ;