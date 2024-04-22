import { View, Text } from "react-native";
import React from "react";
import { useState } from "react";
import PhoneInput from "react-native-phone-number-input";

export default function NumberInput() {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  return (
    <>
      <PhoneInput
        defaultValue={value}
        defaultCode="CI"
        layout="first"
        onChangeText={(text) => {
          setValue(text);
          getCountryCode();
        }}
        onChangeFormattedText={(text) => {
          setFormattedValue(text);
        }}
        withDarkTheme
        withShadow
        autoFocus
      />
    </>
  );
}
