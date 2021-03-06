import React, { memo, useContext, useMemo } from 'react';
import { Wrapper } from '@bit/meema.ui-components.elements';
import { Input, FormWrapperStep, FormLabel } from '../Shared';
import { RegistrationContext } from '../context';

const StepOneForm: React.FunctionComponent<{}> = () => {
  const {
    data: {
      user: {
        dni,
      },
      donation: {
        creditCardNumber,
      },
    },
    onChange,
  } = useContext(RegistrationContext);

  return useMemo(() => (
    <FormWrapperStep>
      <FormLabel>Datos de pago</FormLabel>
      <Wrapper>
        <label htmlFor="creditCardNumber" />
        <Input type='string' name='creditCardNumber' maxLength={16} value={creditCardNumber} placeholder='Número de tarjeta' onChange={onChange} />
        <label htmlFor="dni" />
        <Input type='string' name='dni' maxLength={8} value={dni} placeholder='DNI' onChange={onChange} />
      </Wrapper>
    </FormWrapperStep>
  ), [
    creditCardNumber,
    dni,
    onChange,
  ]);
}

export default memo(StepOneForm);