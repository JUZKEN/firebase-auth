import admin from 'firebase-admin';
import { User } from '../../entities/User';

export = async (req, _res, next) => {
   /* Verify authorization token */
   const token = req.header('Authorization').replace('Bearer ', '');
   const decodedToken = await admin.auth().verifyIdToken(token, true);

   /* Find user with uid */
   const userExists = await User.findOne(decodedToken.uid);

   /* If user not found, create user record */
   if (!userExists) {
      const user = await User.create({id: decodedToken.uid})
      await user.save();
   };

   /* Store user in request */
   req.user = decodedToken;

   next();
}