import { ActionButton } from '@/components/ActionButton/ActionButton';
import React, { useEffect, useState } from 'react';
import { Text, TextInput, View } from 'react-native';

export function LoginView(){
  //get the session ID from backend, store in local state.

  //const [sessionId, setSessionId] = useState<number | null>(null);
  const [sessionId, setSessionId] = useState(null);

  const Login = async () => {
    try {
      const response = await fetch('http://192.168.86.145:5000/login', {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({username: "robkinyon"}),
      })
      const json = await response.json();
      setSessionId(json.session_id)
    }
    catch (error) {
      console.error(error)
    }
  }

  /*
  useEffect(()=> {
    getCountFromApi();
  }, [])
  */

  return (
    <View>
      {<Text>Session ID: {sessionId}</Text>}
      <ActionButton action={()=> Login()}/>
    </View>
  )
}
