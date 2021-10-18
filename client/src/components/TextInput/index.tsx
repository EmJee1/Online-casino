import { ChangeEvent, Dispatch, SetStateAction } from 'react'

interface TextInputProps {
	label: string
	id?: string
	value: string
	className?: string
	placeholder?: string
	email?: boolean
	password?: boolean
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void
	updateState?: Dispatch<SetStateAction<string>>
}

const TextInput = ({
	label,
	id,
	value,
	className,
	placeholder,
	email,
	password,
	onChange,
	updateState,
}: TextInputProps) => {
	const classes = ['text-input-container']
	if (className) classes.push(className)

	const type = email ? 'email' : password ? 'password' : 'text'
	id = id ?? label.replaceAll(' ', '-').toLowerCase()

	return (
		<div className={classes.join(' ')}>
			{label && (
				<label htmlFor={id} className="block">
					{label}
				</label>
			)}
			<input
				type={type}
				value={value}
				id={id}
				className="border border-yellow-300 rounded"
				placeholder={placeholder}
				onChange={e => {
					if (onChange) onChange(e)
					if (updateState) updateState(e.target.value)
				}}
			/>
		</div>
	)
}

export default TextInput
