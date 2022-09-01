import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { FormProps, SignUpForm } from '@containers/SignUpContainer/interfaces';
import { mainInfoSchema } from '@containers/SignUpContainer/utils/yupSchemas';
import { FormField } from '@components/FormField';
// import { mainInfoSchema } from 'src/containers/SignUpContainer/utils/yupSchemas';

export const MainInfoForm: FC<FormProps> = ({ onFulfilled }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>({
    resolver: yupResolver(mainInfoSchema),
    mode: 'onSubmit',
  });

  const onSubmit = (data: SignUpForm) => {
    onFulfilled();
  };

  useEffect(() => {
    console.log('mounted');
  }, []);

  return (
    <div className='mt-24'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
        <FormField
          name={'firstName'}
          label={'First Name'}
          register={register}
          error={errors?.firstName}
        />
        <FormField
          name={'lastName'}
          label={'Last Name'}
          register={register}
          error={errors?.lastName}
        />
        <FormField
          name={'age'}
          label={'Age'}
          register={register}
          error={errors?.age}
        />
        <input type={'submit'} />
      </form>
    </div>
  );
};
