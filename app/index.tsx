import { StatusBar } from 'expo-status-bar';
import { View, Text, SafeAreaView } from 'react-native'
// import Home from '../screens/Home'

interface Props {}

const HomePage = ({}: Props) => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

export default HomePage
