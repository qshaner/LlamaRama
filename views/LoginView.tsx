import { ActionButton } from '@/components/ActionButton/ActionButton';
import React, { useEffect, useState } from 'react';
import { Text, TextInput, View } from 'react-native';

export function LoginView(){
  // Somehow, the session_id needs to be accessible from CounterView
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [username, setUsername] = useState<string>("");
  const [counterCount, setCounterCount] = useState<number | null>(null);

  const getCountFromApi = async () => {
    try {
      const response = await fetch('http://192.168.86.145:5000/', {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "X-Session-Id": sessionId,
        },
      })
      if (response.status == 200) {
        const json = await response.json();
        await setCounterCount(json.counter);
      } else if (response.status == 400) {
        // Handle bad request
      } else if (response.status == 403) {
        // Handle "not logged in"
      } else {
        // Handle unexpected error
      }
    }
    catch (error) {
      console.error(error)
    }
  }
  const incrementAndGetCountFromApi = async () => {
    try {
      const response = await fetch('http://192.168.86.145:5000/', {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "X-Session-Id": sessionId,
        },
      })
      if (response.status == 200) {
        const json = await response.json();
        setCounterCount(json.counter);
      } else if (response.status == 400) {
        // Handle bad request
      } else if (response.status == 403) {
        // Handle "not logged in"
      } else {
        // Handle unexpected error
      }
    }
    catch (error) {
      console.error(error)
    }
  }

  const Login = async () => {
    try {
      const response = await fetch('http://192.168.86.145:5000/login', {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({username: username}),
      })
      if (response.status == 200) {
        const json = await response.json();
        setSessionId(json.session_id);
      } else if (response.status == 400) {
        // Handle bad request
      } else if (response.status == 401) {
        // Handle "username not provided"
      } else {
        // Handle unexpected error
      }
    }
    catch (error) {
      console.error(error)
    }
  }

  return (
    <View>
      <Text>Username</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '80%', paddingHorizontal: 10 }}
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <ActionButton action={()=> Login()}/>
      {<Text>Session ID: {sessionId}</Text>}
      {<Text>Counter Count: {counterCount}</Text>}
      <ActionButton action={()=> incrementAndGetCountFromApi()}/>
    </View>
  )
}
