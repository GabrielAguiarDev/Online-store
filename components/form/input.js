import { InputForm } from "./styles"

export default function input({ titulo, type, placeholder, value, onChange }) {
    return (
        <InputForm>
            <span>{titulo}</span>
            <input 
                type={type} placeholder={placeholder}
                onChange={onChange} 
                value={value}
            />
        </InputForm>
    )
}