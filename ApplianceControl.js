import React, { useState } from 'react';
import { View, Text, Switch, Slider, Button } from 'react-native';
import styles from '../styles/applianceControlStyles';

const ApplianceControl = () => {
  const [isFanOn, setIsFanOn] = useState(false);
  const [fanSpeed, setFanSpeed] = useState(1);
  const [isACOn, setIsACOn] = useState(false);
  const [acTemperature, setACTemperature] = useState(24);
  const [isLightOn, setIsLightOn] = useState(false);
  const [brightness, setBrightness] = useState(50);

  return (
    <View style={styles.container}>
      {/* Fan Control */}
      <View style={styles.applianceControl}>
        <Text style={styles.label}>Fan</Text>
        <Switch
          value={isFanOn}
          onValueChange={setIsFanOn}
        />
        {isFanOn && (
          <Slider
            style={styles.slider}
            minimumValue={1}
            maximumValue={5}
            step={1}
            value={fanSpeed}
            onValueChange={setFanSpeed}
          />
        )}
        <Text>Speed: {fanSpeed}</Text>
      </View>

      {/* Air Conditioner Control */}
      <View style={styles.applianceControl}>
        <Text style={styles.label}>Air Conditioner</Text>
        <Switch
          value={isACOn}
          onValueChange={setIsACOn}
        />
        {isACOn && (
          <Slider
            style={styles.slider}
            minimumValue={16}
            maximumValue={30}
            step={1}
            value={acTemperature}
            onValueChange={setACTemperature}
          />
        )}
        <Text>Temperature: {acTemperature}°C</Text>
      </View>

      {/* Light Control */}
      <View style={styles.applianceControl}>
        <Text style={styles.label}>Lights & Bulbs</Text>
        <Switch
          value={isLightOn}
          onValueChange={setIsLightOn}
        />
        {isLightOn && (
          <>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={100}
              value={brightness}
              onValueChange={setBrightness}
            />
            <Text>Brightness: {brightness}%</Text>
            <Button title="Change Color" onPress={() => { 45,30,80 }} />
          </>
        )}
      </View>
    </View>
  );
};

export default ApplianceControl;
