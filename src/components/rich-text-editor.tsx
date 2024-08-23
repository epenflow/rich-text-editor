import RichTextToolbar from '@/components/rich-text-toolbar';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';

/** Lexical */
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import { TRANSFORMERS } from '@lexical/markdown';
import RichTextAction from '@/components/rich-text-action';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import CodeHighlightPlugin from '@/components/code-highlight-plugin';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';

const RichTextEditor = () => {
	return (
		<div className="container my-6">
			<Card>
				<CardHeader>
					<RichTextToolbar />
				</CardHeader>
				<CardContent className="relative focus:outline-none">
					<RichTextPlugin
						contentEditable={
							<ContentEditable className="relative focus:outline-none border p-2 overflow-y-scroll h-[50vh]" />
						}
						placeholder={
							<p className="absolute top-0 z-10 overflow-ellipsis select-none inline-block pointer-events-none text-foreground/50 p-2">
								Enter some text...
							</p>
						}
						ErrorBoundary={LexicalErrorBoundary}
					/>
					<AutoFocusPlugin />
					<LinkPlugin />
					<ListPlugin />
					<MarkdownShortcutPlugin transformers={TRANSFORMERS} />
					<CodeHighlightPlugin />
					<HistoryPlugin />
				</CardContent>
				<CardFooter>
					<RichTextAction />
				</CardFooter>
			</Card>
		</div>
	);
};
export default RichTextEditor;
