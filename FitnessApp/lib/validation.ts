import * as z from 'zod';

export const userSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters long' }),
    age: z.number().int().positive({ message: 'Age must be a positive integer' }),
    heightFeet: z.number().int().positive({ message: 'Height (feet) must be a positive integer' }),
    heightInches: z.number().int().min(0, { message: 'Height (inches) must be between 0 and 11' }).max(11, { message: 'Height (inches) must be between 0 and 11' }),
    weightPounds: z.number().positive({ message: 'Weight must be a positive number' }),
    email: z.email({ message: 'Invalid email address' }),
    password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
});
export type SignUpData = z.infer<typeof userSchema>;