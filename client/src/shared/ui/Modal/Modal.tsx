import React from 'react';
import './Modal.css';

type ModalWindowProps = {
  active: boolean;
  setActive: () => void;
  children: React.ReactNode;
};

function ModalWindow({
  active,
  setActive,
  children,
}: ModalWindowProps): JSX.Element {
  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={setActive}
    >
      <div
        className={active ? 'modal__content active' : 'modal__content'}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default ModalWindow;
