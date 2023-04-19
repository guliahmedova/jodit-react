import { useState, useRef, useMemo, useEffect } from 'react';
import JoditEditor from 'jodit-react';

const Editor = ({ placeholder, value }) => {
  const editor = useRef(null);
  const [content, setContent] = useState('');

  const config = useMemo(() =>
  ({
    readonly: false,
    placeholder: placeholder || 'Start typings...'
  }),
    [placeholder]
  );

  // console.log('content: ', content);
  // console.log('value: ', value);

  useEffect(() => {
    setContent(prevContent => prevContent + value);
  }, [value]);

  return (
    <div>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1}
        name='content'
        onBlur={newContent => {
          console.log({ newContent })
          setContent(newContent)
        }}
      />
    </div>
  )
}

export default Editor;