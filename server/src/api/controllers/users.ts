import admin from 'firebase-admin';

export const index = async (_req, res) => {
   const users = await admin.auth().listUsers(10);
   res.status(200).json(users);
}