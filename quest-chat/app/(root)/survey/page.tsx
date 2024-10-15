import React from 'react';

import InputField from '@/components/survey/InputField';

const SurveyPage = () => {
  const inputFields = [name, age, ethnicity, hobby1, hobby2, hobby3, city, funFact];
  return (
    <div>
      {inputFields.map((input) => (
        <InputField key={input} field={input} />
      ))}
    </div>
  )
}

export default SurveyPage;