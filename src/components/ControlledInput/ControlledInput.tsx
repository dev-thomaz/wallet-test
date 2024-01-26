import React from "react";
import { Control, Controller } from 'react-hook-form';
import {Input, InputProps } from '../Input/Input'


type props = InputProps & {
    control: Control<any>;
    name: string;
    formatter?: (oldValue: string, newValue: string) => string
}
export function ControlledInput({control, name, formatter, ...rest}: props){
    return(
        <Controller
        name={name}
        control={control}
        render={({field: {onChange, value}}) => (
            <Input 
            onChangeText={(text) => {
                const formatted = formatter ? formatter(value, text) : text
                onChange(formatted)
              }}
            value={value}
            {...rest}
            />
        )}
        />
    )
}