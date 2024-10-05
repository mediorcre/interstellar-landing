import type { CSSProperties } from 'react';
import React from 'react';

type JotFormEmbedProps = {
  formURL: string;
  formID?: number | boolean;
  autoResize?: boolean;
  autoFocus?: boolean;
  heightOffset?: number;
  initialHeight?: number;
  onSubmit?: () => void;
  style?: CSSProperties;
  [key: string]: any; // Allows other props like `rest` to be passed
};

const JotFormEmbed: React.FC<JotFormEmbedProps> = ({
  formURL,
  autoResize = true,
  autoFocus = true,
  heightOffset = 15,
  initialHeight = 540,
  onSubmit = () => {},
  formID = false,
  style = {},
  ...rest
}) => {
  const iframeRef = React.useRef<HTMLIFrameElement>(null);
  const [componentStyles, setComponentStyles] = React.useState<CSSProperties>({
    height: initialHeight,
    overflow: 'hidden',
    border: 0,
    width: '100%',
  });

  React.useEffect(() => {
    const handleMessages = (content: MessageEvent) => {
      if (!content) return;

      if (
        typeof content.data === 'object' &&
        content.data.action === 'submission-completed'
      ) {
        onSubmit();
        return;
      }

      if (typeof content.data !== 'string') return;
      const [method, value, targetForm] = content.data.split(':');

      if (formID && targetForm && targetForm !== String(formID)) {
        return;
      }

      switch (method) {
        case 'scrollIntoView':
          if (
            autoFocus &&
            iframeRef.current &&
            typeof iframeRef.current.scrollIntoView === 'function'
          ) {
            iframeRef.current.scrollIntoView();
          }
          break;
        case 'setHeight':
          if (autoResize) {
            setComponentStyles((prev) => ({
              ...prev,
              height: parseInt(value || '0', 10) + heightOffset,
            }));
          }
          break;
        case 'setMinHeight':
          if (autoResize) {
            setComponentStyles((prev) => ({
              ...prev,
              minHeight: parseInt(value || '0', 10) + heightOffset,
            }));
          }
          break;
        case 'reloadPage':
          try {
            iframeRef.current?.contentWindow?.location.reload();
          } catch (e) {
            console.error('Error reloading iframe', e);
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener('message', handleMessages, true);

    return () => {
      window.removeEventListener('message', handleMessages, true);
    };
  }, [autoFocus, autoResize, formID, heightOffset, onSubmit]);

  return (
    <iframe
      ref={iframeRef}
      src={formURL}
      title="JotForm Form"
      style={{ ...componentStyles, ...style }}
      allow="geolocation; microphone; camera"
      {...rest}
    />
  );
};

export default JotFormEmbed;
