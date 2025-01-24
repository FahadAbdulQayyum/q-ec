import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        // return res.json({ msg: "Hello, I'm here!" })
        return res.status(200).json({ msg: "Hello, I'm here!" })
        // return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // const { name, email, password } = req.body;

        // Validate input
        // if (!name || !email || !password) {
        //     // return res.status(400).json({ error: 'Name, email, and password are required' });
        // }

        // // TODO: Check if the user already exists in your database
        // if (email === 'test@example.com') {
        //     // return res.status(409).json({ error: 'User with this email already exists' });
        // }

        // // TODO: Save the user to your database (e.g., Prisma, Mongoose, etc.)
        // const newUser = {
        //     id: 1,
        //     name,
        //     // email,
        // };

        // Example success response
        // return res.status(201).json({ success: true, user: newUser });
    } catch (error) {
        console.error('Error processing signup:', error);
        // return res.status(500).json({ error: 'Internal Server Error' });
    }
}
