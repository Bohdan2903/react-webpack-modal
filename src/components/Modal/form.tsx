import React, { useEffect, useMemo, useState } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Select from 'react-select'
import { Controller, FieldValues, useForm } from 'react-hook-form'
import { StyledButton, CustomSelectStyles, StyledInput } from 'components'
import styled from 'styled-components'

interface IModalForm {
  modalIsOpen: boolean
  setIsOpen: (status: boolean) => void
  status: string
}

const methods = [
  {
    label: 'test1',
    value: 'test1',
  },
  {
    label: 'test2',
    value: 'test2',
  },
]
const formValues = {
  name: 'List of Phones',
  ein: '123',
  notes: 'test notes',
  method: {
    label: 'test1',
    value: 'test1',
  },
}

export const ModalForm = ({ modalIsOpen, setIsOpen, status }: IModalForm) => {
  const [statusText, setStatusText] = useState<string>('')
  const schema = yup
    .object()
    .shape({
      name: yup.string().required(),
      ein: yup.number().required(),
      notes: yup.string(),
      method: yup.object().shape({
        value: yup.string().required(),
        label: yup.string().required(),
      }),
    })
    .required()
  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: useMemo((): any => {
      return status === 'open' ? {} : formValues
    }, [status]),
  })

  const handleChangeMethod = (option: any, onChange: (option: any) => void) => {
    onChange(option)
  }
  const onSubmit = (data: FieldValues) => {
    console.log(data, 'formData')
    if (status == 'open' && !errors.lenght) {
      reset()
      setStatusText('form successfully create')
    }
    if (status == 'edit' && !errors.lenght) {
      setStatusText('form successfully edited')
    }
  }

  useEffect(() => {
    statusText && setTimeout(() => setStatusText(''), 2000)
  }, [statusText])

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <div className={'main-block'}>
        <h2>{status == 'open' ? 'Create new customer' : 'Edit customer'}</h2>
        <div className={'input-block'}>
          <label>Customers name</label>
          <StyledInput {...register('name')} placeholder={'Enter customer name'} className={errors?.name && 'error'} />
        </div>
        <div className={'input-block'}>
          <label>Customers EIN</label>
          <StyledInput {...register('ein')} placeholder={'Enter customer EIN'} className={errors?.ein && 'error'} />
        </div>
        <div className={'input-block'}>
          <label>Notes</label>
          <StyledInput
            as={'textarea'}
            className={errors?.notes && 'error'}
            placeholder={'Notes visible only to you and your team'}
            style={{ height: '82px', resize: 'none' }}
            {...register('notes')}
          />
        </div>
        <p>Payment and billing:</p>
        <div className={'input-block'}>
          <label>Primary payment method</label>
          <Controller
            control={control}
            name="method"
            render={({ field: { onChange, ref, value } }) => (
              <Select
                value={value}
                ref={ref}
                classNamePrefix="react-select"
                className={`react-select-container ${errors?.method ? 'error' : ''}`}
                styles={CustomSelectStyles}
                onChange={(val: any) => handleChangeMethod(val, onChange)}
                options={methods || [{}]}
              />
            )}
          />
        </div>
      </div>
      {statusText && <h4 className={'status-text'}>{statusText}</h4>}

      <div className={'action-block'}>
        <StyledButton skin={'white'} onClick={() => setIsOpen(!modalIsOpen)}>
          Cancel
        </StyledButton>
        <StyledButton skin={'blue'} type={'submit'}>
          Create
        </StyledButton>
      </div>
    </FormWrapper>
  )
}
const FormWrapper = styled.form`
  padding: 20px 20px 40px;

  .status-text {
    text-align: center;
    margin: 16px 0;
    color: #15ff15;
    font-weight: bold;
  }
  .react-select-container.error .react-select__control {
    border: 1px solid #fd2d2d;
  }

  .main-block {
    max-width: 450px;
    margin: 0 auto;

    > h2 {
      text-align: center;
      margin-bottom: 60px;
      font-weight: 700;
      font-size: 20px;
      line-height: 28px;
    }

    > p {
      font-weight: 400;
      margin: -7px 0 16px;
      font-size: 14px;
      display: flex;
      align-items: center;
      color: #5a607d;
    }
  }

  .action-block {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #edeff1;
    padding-top: 40px;
    margin-top: 40px;
  }

  ${StyledButton} {
    margin: 0 10px;
  }

  .input-block {
    margin-bottom: 16px;

    & label {
      display: block;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      margin-bottom: 4px;
      color: #000;
    }
  }
`
