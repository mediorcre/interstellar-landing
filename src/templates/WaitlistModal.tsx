import type { PropsWithRef } from 'react';

import JotFormReact from '@/jotform/JotformReact';
import Modal from '@/modal/Modal';

export const WaitlistModal: React.FC<
  PropsWithRef<{ onClose?: () => void }>
> = ({ onClose }) => {
  return (
    <Modal title="Subscribe" onClose={onClose}>
      <JotFormReact
        initialHeight={100}
        heightOffset={0}
        autoResize={true}
        formURL="https://form.jotform.com/242784451631054"
      />
    </Modal>
  );
};
