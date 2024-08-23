import RichTextActionToggle from '@/components/rich-text-action-toggle';
import { cn } from '@/lib/utils';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { FORMAT_TEXT_COMMAND } from 'lexical';
import React from 'react';
import {
	RxFontItalic,
	RxFontBold,
	RxUnderline,
	RxStrikethrough,
	RxCode,
} from 'react-icons/rx';
import { IconType } from 'react-icons/lib';
interface MappingWrapperProps<T> {
	items?: Array<T>;
	render: (item: T, index: number) => React.ReactNode;
}
function MappingWrapper<T>({ items, render }: MappingWrapperProps<T>) {
	return React.Children.toArray(
		items?.map((item, index) => render(item, index)),
	);
}
type Command =
	| 'base'
	| 'bold'
	| 'code'
	| 'highlight'
	| 'italic'
	| 'strikethrough'
	| 'subscript'
	| 'superscript'
	| 'underline'
	| 'underlineStrikethrough';
type TextCommand = {
	Icon: IconType;
	onClick: () => void;
	command: Command;
};
const RichTextToolbar = () => {
	const [editor] = useLexicalComposerContext();
	const [activeCommands, setActiveCommands] = React.useState<string[]>([]);

	function toggleCommand(command: Command) {
		/**
		 * Check if command exist in an ActiveCommands if command exist
		 * Then remove command from the array otherwise if command doesn't
		 * exist adds it to the command
		 */
		setActiveCommands((prev) => {
			return prev.includes(command)
				? prev.filter((cmd) => cmd !== command)
				: [...prev, command];
		});
		console.log(activeCommands.filter((cmd) => cmd !== command));
	}
	const TextCommands: Array<TextCommand> = [
		{
			Icon: RxFontBold,
			onClick: () => {
				editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
				toggleCommand('bold');
			},
			command: 'bold',
		},
		{
			Icon: RxFontItalic,
			onClick: () => {
				editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
				toggleCommand('italic');
			},
			command: 'italic',
		},
		{
			Icon: RxUnderline,
			onClick: () => {
				editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
				toggleCommand('underline');
			},
			command: 'underline',
		},
		{
			Icon: RxStrikethrough,
			onClick: () => {
				editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough');
				toggleCommand('strikethrough');
			},
			command: 'strikethrough',
		},
		{
			Icon: RxCode,
			onClick: () => {
				editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'code');
				toggleCommand('code');
			},
			command: 'code',
		},
	];
	return (
		<div className="flex gap-2 items-center">
			<h1>Rich Text Toolbar</h1>
			<div className="flex gap-2">
				<MappingWrapper
					items={TextCommands}
					render={({ Icon, onClick, command }, index) => (
						<RichTextActionToggle
							onClick={onClick}
							key={index}
							className="group">
							<Icon
								className={cn(
									activeCommands.includes(command)
										? 'text-foreground'
										: 'text-foreground/50',
									'group-hover:text-foreground transition-all duration-100 ease-linear',
								)}
							/>
						</RichTextActionToggle>
					)}
				/>
			</div>
		</div>
	);
};
export default RichTextToolbar;
