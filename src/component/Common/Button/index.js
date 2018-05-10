import React, { PureComponent } from 'react'
import { DefaultButton } from './Styled.js'

class ButtonComponent extends PureComponent {
	render() {
		const {
			id,
			className,
			children,
			width,
			type,
			size,
			mode,
			ghost,
			disabled,
			onClick,
			lightenBg,
			style
		} = this.props
		return (
			<DefaultButton
				id={id}
				className={className}
				width={width}
				type={type}
				size={size}
				lightenBg={lightenBg}
				mode={mode}
				ghost={ghost}
				disabled={disabled}
				onClick={onClick}
				style={style}
			>
				{ children }
			</DefaultButton>
		)
	}
}

ButtonComponent.defaultProps = {
	id: '',
	className: '',
	onClick: () => {},
	width: 0,
	type: 'button',
	size: 100,
	lightenBg: false,
	disabled: false,
	ghost: false
}

export default ButtonComponent
