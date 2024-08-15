'use server';

import { profileSchema } from '@/utils/shemas';
import { redirect } from 'next/navigation';
import { currentUser, auth, clerkClient } from '@clerk/nextjs/server';
import db from '@/utils/db';

export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    const user = await currentUser();
    if (!user) throw new Error('Please login to create a profile');

    const rawData = Object.fromEntries(formData);
    const validatedFields = profileSchema.parse(rawData);

    await db.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl ?? '',
        ...validatedFields,
      },
    });
    await clerkClient.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true,
      },
    });
    return { message: 'Profile Created' };
  } catch (error) {
    console.log(error);
    return {
      message: error instanceof Error ? error.message : 'An error occurred',
    };
  }
  redirect('/');
};
