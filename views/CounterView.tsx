import { ActionButton } from '@/components/ActionButton/ActionButton';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export function CounterView(){
//get the counter count from backend, store in local state.

const [counterCount, setCounterCount] = useState<number | null>(null);

useEffect(()=> {
    //fetch from backend

    setCounterCount(0);
}, [])

    return (
        <View>
            {<Text>Counter Count: {counterCount}</Text>}
            <ActionButton action={()=>setCounterCount(prev => (prev ?? 0)+1)}/>
        </View>
    )
}