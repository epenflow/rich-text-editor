import RichTextActionToggle from '@/components/rich-text-action-toggle';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $createTextNode, $getRoot, RootNode } from 'lexical';
import { BsMarkdown } from 'react-icons/bs';
import { IconBaseProps } from 'react-icons/lib';
import { $createCodeNode, $isCodeNode } from '@lexical/code';
import {
	$convertFromMarkdownString,
	$convertToMarkdownString,
} from '@lexical/markdown';
import { PLAYGROUND_TRANSFORMERS } from '@/lib/markdown-transformer';
const RichTextAction = () => {
	const [editor] = useLexicalComposerContext();
	const IconStyle: IconBaseProps = {
		className: 'text-foreground/50 hover:text-foreground',
	};
	function handleMarkdown(): void {
		editor.update(() => {
			const root: RootNode = $getRoot();
			const firstChild = root.getFirstChild();
			if (
				$isCodeNode(firstChild) &&
				firstChild.getLanguage() === 'markdown'
			) {
				$convertFromMarkdownString(
					firstChild.getTextContent(),
					PLAYGROUND_TRANSFORMERS,
				);
			} else {
				const markdown = $convertToMarkdownString(
					PLAYGROUND_TRANSFORMERS,
				);
				root.clear().append(
					$createCodeNode('markdown').append(
						$createTextNode(markdown),
					),
				);
			}
			root.selectEnd();
		});
	}
	return (
		<div>
			<RichTextActionToggle onClick={handleMarkdown}>
				<BsMarkdown {...IconStyle} />
			</RichTextActionToggle>
		</div>
	);
};
export default RichTextAction;
