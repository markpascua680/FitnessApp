import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from '@/css/styles';

type Props = {
    label: string;
    value: string;
    placeholder?: string;
}

export function TextFieldInput({ label, value, placeholder }: Props) {
    const [text, setText] = useState(value);
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                value={text}
                onChangeText={setText}
                placeholder={placeholder}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                style={[styles.input, isFocused && styles.inputFocused]}
                secureTextEntry={label.toLowerCase().includes('password')}
            />
        </View>
    );
}

export function SubmitButton({ label, disabled }: { label: string; disabled?: boolean }) {
    return (
        <View style={[styles.button, disabled && styles.buttonDisabled]}>
            <Text style={styles.buttonText}>{label}</Text>
        </View>
    );
}