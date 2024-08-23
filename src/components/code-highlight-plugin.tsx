import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import React from 'react';
import { registerCodeHighlighting } from '@lexical/code';

const CodeHighlightPlugin = () => {
	const [editor] = useLexicalComposerContext();
	React.useEffect(() => {
		return registerCodeHighlighting(editor);
	}, [editor]);
	return null;
};

export default CodeHighlightPlugin;
