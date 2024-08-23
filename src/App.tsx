import {
	InitialConfigType,
	LexicalComposer,
} from '@lexical/react/LexicalComposer';
import RichTextEditor from './components/rich-text-editor';
/** Lexical Node Plugin */
import { CodeNode, CodeHighlightNode } from '@lexical/code';
import { theme } from '@/lib/constants/theme';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { ListItemNode, ListNode } from '@lexical/list';
import { LinkNode } from '@lexical/link';
function App() {
	const initialConfig: InitialConfigType = {
		namespace: 'RichTextEditor',
		onError: (error, editor) => {
			console.error(error, editor);
		},
		theme,
		nodes: [
			CodeNode,
			HeadingNode,
			QuoteNode,
			ListItemNode,
			ListNode,
			LinkNode,
			CodeHighlightNode,
		],
	};
	return (
		<>
			<LexicalComposer initialConfig={initialConfig}>
				<RichTextEditor />
			</LexicalComposer>
		</>
	);
}

export default App;
