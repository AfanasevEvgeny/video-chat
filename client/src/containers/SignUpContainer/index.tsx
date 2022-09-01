import { FC, useState } from 'react';
import { ProgressDotted } from '@components/ProgressDotted';
import { MainInfoForm } from '@containers/SignUpContainer/FormsControl/MainInfoForm';

export const SignUpContainer: FC = () => {
  const formsOrderedInfo = [
    {
      formJsx: (
        <MainInfoForm
          onFulfilled={() => {
            handleFormFulfillment(0);
          }}
        />
      ),
      label: 'Main info 1',
    },
    {
      formJsx: (
        <MainInfoForm
          onFulfilled={() => {
            handleFormFulfillment(1);
          }}
        />
      ),
      label: 'Main info 2',
    },
    {
      formJsx: (
        <MainInfoForm
          onFulfilled={() => {
            handleFormFulfillment(2);
          }}
        />
      ),
      label: 'Main info 3',
    },
    {
      formJsx: (
        <MainInfoForm
          onFulfilled={() => {
            handleFormFulfillment(3);
          }}
        />
      ),
      label: 'Main info 4',
    },
  ];

  const handleFormFulfillment = (fulfilledFormIndex: number) => {
    if (fulfilledFormIndex < formsOrderedInfo.length - 1) {
      setActiveFormIndex(fulfilledFormIndex + 1);
    }
  };

  const progressLabels = formsOrderedInfo.map((formInfo) => {
    return { label: formInfo.label };
  });

  const [activeFormIndex, setActiveFormIndex] = useState(0);

  return (
    <div className='flex-1 py-12'>
      <div className='w-[600px] mx-auto'>
        <ProgressDotted
          progressItems={progressLabels}
          activeItemIdx={activeFormIndex}
        />
        {formsOrderedInfo[activeFormIndex].formJsx}
      </div>
    </div>
  );
};
