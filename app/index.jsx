import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-cyan-200">
      <Text className="text-4xl text-black-100 font-pblack">Hello Aora</Text>
      <StatusBar style="auto" />
    </View>
  );
}


