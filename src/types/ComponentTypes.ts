/* eslint-disable @typescript-eslint/no-explicit-any */
interface Options {
    value: any, 
    label: string, 
    color: string 
}

export interface DropdownProps {
    options: Options[];
    handleChange: (value?: any) => void;
}