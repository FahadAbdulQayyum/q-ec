import { z } from 'zod';

    export const FormDataSchema = z.object({
        email: z
            .string()
            .email('Invalid email format') // Ensure it's a valid email
            .nonempty('Email is required'), // Ensure it's not empty
        password: z
            .string()
            .min(6, 'Password must be at least 6 characters long') // Minimum password length
            .nonempty('Password is required'),
        firstName: z
            .string()
            .nonempty('First name is required'), // Ensure it's not empty
        lastName: z
            .string()
            .nonempty('Last name is required'), // Ensure it's not empty
        country: z
            .string()
            .nonempty('Country is required'), // Ensure it's not empty
        dob: z
            .string()
            .nonempty('Date of birth is required') // Ensure it's not empty
            .regex(
                /^\d{4}-\d{2}-\d{2}$/,
                'Date of birth must be in YYYY-MM-DD format'
            ), // Optional format validation
        signUp: z.boolean(), // Ensures `signUp` is a boolean
        gender: z
            .string()
            .nonempty('Gender is required') // Ensure it's not empty
            .refine((val) => ['male', 'female'].includes(val), {
                message: 'Gender must be one of male, female',
            }), // Ensure `gender` is one of the valid options
});
