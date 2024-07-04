import { useState } from "react"

//form에서 제출 시 가져와 설정하는 걸 커스텀 훅으로 만듦
export const useForm = () => {
    const [value, setValue] = useState();
    const onChange = (e) => {
        setValue(e.target.value);
    }
    return [value, onChange];
}