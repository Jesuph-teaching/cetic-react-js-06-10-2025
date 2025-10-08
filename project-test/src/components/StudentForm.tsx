import { studentSchema, type StudentI } from '@/types/student';
import { useForm } from '@tanstack/react-form';
import { Button } from '@/components/ui/button';
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import { format, isValid } from 'date-fns';

const defaultStudent: StudentI = {
	id: Date.now(),
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

const levels = ['1AP', '2AP', '3AP', '4AP', '5AP'];
const genders = ['Male', 'Female'];

export default function StudentForm({ onStudentSubmitting }: { onStudentSubmitting: (student: StudentI) => void }) {
	const form = useForm({
		defaultValues: defaultStudent,
		validators: {
			onChange: studentSchema,
		},
		onSubmit(ctx) {
			onStudentSubmitting({ ...ctx.value, id: Date.now() });
		},
	});

	return (
		<div className="w-full max-w-2xl mx-auto">
			<form
				onSubmit={(e) => {
					e.preventDefault();
					form.handleSubmit();
				}}
				className="space-y-2"
			>
				<FieldGroup>
					<FieldSet>
						<FieldLegend>Student Information</FieldLegend>
						<FieldDescription>Enter the student's personal information</FieldDescription>
						<FieldGroup className="space-y-2">
							<form.Field name="firstName">
								{(field) => (
									<Field>
										<FieldLabel htmlFor="student-first-name">First name</FieldLabel>
										<Input
											id="student-first-name"
											value={field.state.value}
											onBlur={field.handleBlur}
											onChange={(e) => field.handleChange(e.target.value)}
										/>
										{!field.state.meta.isValid ? (
											<FieldDescription className="text-red-500">
												{field.state.meta.errors.map((error) => error?.message)}
											</FieldDescription>
										) : null}
									</Field>
								)}
							</form.Field>

							<form.Field name="lastName">
								{(field) => (
									<Field>
										<FieldLabel htmlFor="student-last-name">Last name</FieldLabel>
										<Input
											id="student-last-name"
											value={field.state.value}
											onBlur={field.handleBlur}
											onChange={(e) => field.handleChange(e.target.value)}
										/>
										{!field.state.meta.isValid ? (
											<FieldDescription className="text-red-500">
												{field.state.meta.errors.map((error) => error?.message)}
											</FieldDescription>
										) : null}
									</Field>
								)}
							</form.Field>

							<form.Field name="level">
								{(field) => (
									<Field>
										<FieldLabel htmlFor="student-level">Level</FieldLabel>
										<Select
											value={field.state.value}
											onValueChange={(value) => {
												field.handleChange(value as StudentI['level']);
												// for Date use  "new Date(value)" instead of value as StudentI['level']
											}}
										>
											<SelectTrigger id="student-level">
												<SelectValue placeholder="Select level" />
											</SelectTrigger>
											<SelectContent>
												{levels.map((level) => (
													<SelectItem key={level} value={level}>
														{level}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
										{!field.state.meta.isValid ? (
											<FieldDescription className="text-red-500">
												{field.state.meta.errors.map((error) => error?.message)}
											</FieldDescription>
										) : null}
									</Field>
								)}
							</form.Field>

							<form.Field name="gender">
								{(field) => (
									<Field>
										<FieldLabel htmlFor="student-gender">Gender</FieldLabel>
										<Select
											value={field.state.value}
											onValueChange={(value) => {
												field.handleChange(value as StudentI['gender']);
											}}
										>
											<SelectTrigger id="student-gender">
												<SelectValue placeholder="Select gender" />
											</SelectTrigger>
											<SelectContent>
												{genders.map((gender) => (
													<SelectItem key={gender} value={gender}>
														{gender}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
										{!field.state.meta.isValid ? (
											<FieldDescription className="text-red-500">
												{field.state.meta.errors.map((error) => error?.message)}
											</FieldDescription>
										) : null}
									</Field>
								)}
							</form.Field>

							<form.Field name="birthdate">
								{(field) => (
									<Field>
										<FieldLabel htmlFor="student-birthdate">Birthdate</FieldLabel>
										<Popover>
											<PopoverTrigger asChild>
												<Button
													variant="outline"
													className={cn(
														'w-full justify-start text-left font-normal',
														!field.state.value && 'text-muted-foreground'
													)}
												>
													<CalendarIcon className="mr-2 h-4 w-4" />
													{field.state.value ? (
														format(field.state.value, 'PPP')
													) : (
														<span>Pick a date</span>
													)}
												</Button>
											</PopoverTrigger>
											<PopoverContent className="w-auto p-0">
												<Calendar
													mode="single"
													selected={field.state.value}
													onSelect={(value) => {
														if (value) field.handleChange(new Date(value));
														else field.clearValues();
													}}
												/>
											</PopoverContent>
										</Popover>
										{!field.state.meta.isValid ? (
											<FieldDescription className="text-red-500">
												{field.state.meta.errors.map((error) => error?.message)}
											</FieldDescription>
										) : null}
									</Field>
								)}
							</form.Field>
						</FieldGroup>
					</FieldSet>

					<FieldSet>
						<FieldLegend>Parent Information</FieldLegend>
						<FieldDescription>Enter parent or guardian information</FieldDescription>
						<FieldGroup className="space-y-2">
							<form.Field name="parents.firstName">
								{(field) => (
									<Field>
										<FieldLabel htmlFor="parent-first-name">Parent's First name</FieldLabel>
										<Input
											id="parent-first-name"
											value={field.state.value}
											onBlur={field.handleBlur}
											onChange={(e) => field.handleChange(e.target.value)}
										/>
										{!field.state.meta.isValid ? (
											<FieldDescription className="text-red-500">
												{field.state.meta.errors.map((error) => error?.message)}
											</FieldDescription>
										) : null}
									</Field>
								)}
							</form.Field>

							<form.Field name="parents.lastName">
								{(field) => (
									<Field>
										<FieldLabel htmlFor="parent-last-name">Parent's Last name</FieldLabel>
										<Input
											id="parent-last-name"
											value={field.state.value}
											onBlur={field.handleBlur}
											onChange={(e) => field.handleChange(e.target.value)}
										/>
										{!field.state.meta.isValid ? (
											<FieldDescription className="text-red-500">
												{field.state.meta.errors.map((error) => error?.message)}
											</FieldDescription>
										) : null}
									</Field>
								)}
							</form.Field>

							<form.Field name="parents.gender">
								{(field) => (
									<Field>
										<FieldLabel htmlFor="parent-gender">Parent's Gender</FieldLabel>
										<Select
											value={field.state.value}
											onValueChange={(value) => {
												field.handleChange(value as StudentI['parents']['gender']);
											}}
										>
											<SelectTrigger id="parent-gender">
												<SelectValue placeholder="Select gender" />
											</SelectTrigger>
											<SelectContent>
												{genders.map((gender) => (
													<SelectItem key={gender} value={gender}>
														{gender}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
										{!field.state.meta.isValid ? (
											<FieldDescription className="text-red-500">
												{field.state.meta.errors.map((error) => error?.message)}
											</FieldDescription>
										) : null}
									</Field>
								)}
							</form.Field>

							<form.Field name="parents.phone">
								{(field) => (
									<Field>
										<FieldLabel htmlFor="parent-phone">Parent's Phone</FieldLabel>
										<Input
											id="parent-phone"
											type="tel"
											value={field.state.value}
											onBlur={field.handleBlur}
											onChange={(e) => field.handleChange(e.target.value)}
										/>
										{!field.state.meta.isValid ? (
											<FieldDescription className="text-red-500">
												{field.state.meta.errors.map((error) => error?.message)}
											</FieldDescription>
										) : null}
									</Field>
								)}
							</form.Field>

							<form.Field name="parents.birthdate">
								{(field) => (
									<Field>
										<FieldLabel htmlFor="parent-birthdate">Parent's Birthdate</FieldLabel>
										<Popover>
											<PopoverTrigger asChild>
												<Button
													variant="outline"
													className={cn(
														'w-full justify-start text-left font-normal',
														!field.state.value && 'text-muted-foreground'
													)}
												>
													<CalendarIcon className="mr-2 h-4 w-4" />
													{field.state.value ? (
														format(field.state.value, 'PPP')
													) : (
														<span>Pick a date</span>
													)}
												</Button>
											</PopoverTrigger>
											<PopoverContent className="w-auto p-0">
												<Calendar
													mode="single"
													selected={field.state.value}
													onSelect={(value) => {
														if (value) field.handleChange(new Date(value));
														else field.clearValues();
													}}
												/>
											</PopoverContent>
										</Popover>
										{!field.state.meta.isValid ? (
											<FieldDescription className="text-red-500">
												{field.state.meta.errors.map((error) => error?.message)}
											</FieldDescription>
										) : null}
									</Field>
								)}
							</form.Field>
						</FieldGroup>
					</FieldSet>

					<Field orientation="horizontal" className="flex justify-end space-x-4">
						<form.Subscribe selector={(ctx) => ctx.isValid}>
							{(isValid) => (
								<Button type="submit" disabled={!isValid}>
									Submit
								</Button>
							)}
						</form.Subscribe>
						<Button variant="outline" type="button">
							Cancel
						</Button>
					</Field>
				</FieldGroup>
			</form>
		</div>
	);
}
