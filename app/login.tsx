import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { snapp } from '../src/core/snapp/snapp';

enum Step {
  PHONE_NUMBER,
  OTP
}

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [token, setToken] = useState<string>('')

  const [step, setStep] = useState<Step>(Step.PHONE_NUMBER)

  const handleSendOTP = () => {
    setStep(Step.OTP)
    snapp.sendOtp(phoneNumber)
  }

  const handleValidate = () => {
    setStep(Step.PHONE_NUMBER)
    snapp.sendOtp(phoneNumber)
  }

  return (
    <View>
      {step === Step.PHONE_NUMBER ? (
        <>
          <Text>Phone Number</Text>
          <TextInput
            onChangeText={setPhoneNumber}
            value={phoneNumber}
            style={{ marginBottom: 10, borderColor: 'gray', borderWidth: 1 }}
          />
          <Button title='Send OTP' onPress={handleSendOTP} />
        </>
      ) :
        (
          <>
            <Text>OTP</Text>
            <TextInput
              onChangeText={setToken}
              value={token}
              style={{ marginBottom: 10, borderColor: 'gray', borderWidth: 1 }}
            />
            <Button title='Back' onPress={handleValidate} />
          </>
        )
      }
    </View>
  )
}
