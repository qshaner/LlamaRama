import { ActionButton } from '@/components/ActionButton/ActionButton';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export function CounterView(){
//get the counter count from backend, store in local state.

const [counterCount, setCounterCount] = useState<number | null>(null);

const getCountFromApi = async () => {

    try {
        const response = await fetch('http://192.168.86.249:5000/')
        const json = await response.json();
        setCounterCount(json.counter)
    }
    catch (error) {
        console.error(error)
    }
}

useEffect(()=> {
    getCountFromApi();
}, [])

    return (
        <View>
            {<Text>Counter Count: {counterCount}</Text>}
            <ActionButton action={()=> getCountFromApi()}/>
        </View>
    )
}