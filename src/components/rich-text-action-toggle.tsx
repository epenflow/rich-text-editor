import { cn } from '@/lib/utils';
import React from 'react';

const RichTextActionToggle = React.forwardRef<
	HTMLButtonElement,
	React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...rest }, ref) => {
	return (
		<button
			{...rest}
			ref={ref}
			className={cn('bg-foreground/5 rounded-xl p-2', className)}
		/>
	);
});
export default RichTextActionToggle;
