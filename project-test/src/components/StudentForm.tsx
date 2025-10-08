import type { StudentI } from '@/types/student';
import { useForm } from '@tanstack/react-form';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Field } from './ui/field';
import { Button } from './ui/button';
const defaultStudent: StudentI = {
	id: '',
	firstName: '',
	lastName: '',
	level: '1AP',
	birthdate: new Date(),
	gender: 'Male',
	parents: {
		firstName: '',
		lastName: '',
		birthdate: new Date(),
		gender: 'Male',
		phone: '',
	},
};
export default function StudentForm({ onStudentSubmitting }: { onStudentSubmitting: (student: StudentI) => void }) {
	const form = useForm({
		defaultValues: defaultStudent,
		onSubmit(ctx) {
			onStudentSubmitting(ctx.value);
		},
	});
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				form.handleSubmit();
			}}
		>
			<form.Field name="firstName">
				{(field) => (
					<Field>
						<Label>First name</Label>
						<Input
							value={field.state.value}
							onBlur={field.handleBlur}
							onChange={(e) => field.handleChange(e.target.value)}
						/>
						{!field.state.meta.isValid ? <p>{field.state.meta.errors}</p> : null}
					</Field>
				)}
			</form.Field>
			<Button>Submit</Button>
		</form>
	);
}
