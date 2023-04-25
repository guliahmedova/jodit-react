import { useState, useRef, useMemo, useEffect } from 'react';
import JoditEditor from 'jodit-react';

const Editor = ({ placeholder, value, editor }) => {
  const editorRef = useRef(null);
  const [content, setContent] = useState('');

  const config = useMemo(() =>
  ({
    readonly: false,
    placeholder: placeholder || 'Start typings...'
  }),
    [placeholder]
  );

  console.log("content ", content);
  console.log("valueL ", value);

  useEffect(() => {
    setContent(prevState => prevState + value);
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
          setContent(newContent)
        }}
      />
    </div>
  )
}

export default Editor;