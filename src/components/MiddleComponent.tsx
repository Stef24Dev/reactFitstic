import { MyCustomInput } from "./MyCustomInput";

export function MiddleComponent(props: {
    onChange: (text: string) => void
}) {
    const { onChange } = props;
    return <>
    <div>Componente di mezzo</div>
     <MyCustomInput label={'Nome'} required={true} onChange={onChange}/>
    </>
}