import { Label } from '@/components/ui/label';
import FormInput from '@/components/form/FormInput';

import { SubmitButton } from '@/components/form/Buttons';

const createProfileAction = async (formData: FormData) => {
  'use server';
  const firstName = formData.get('firstName') as string;
  console.log(firstName);
};

function CreateProfile() {
  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>new user</h1>
      <div className='border p-8 rounded-md max-w-lg'>
        <form action={createProfileAction}>
          <FormInput
            label='First Name'
            name='name'
            type='text'
            placeholder='your first name...'
          />
          <SubmitButton text='Create Profile' />
        </form>
      </div>
    </section>
  );
}
export default CreateProfile;
