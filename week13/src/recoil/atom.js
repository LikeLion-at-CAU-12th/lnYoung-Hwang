import { atom } from "recoil";

export const userNameAtom = atom({
    key:'userName',
    default: '홍길동',
});

export const emailAtom = atom({
    key:'email',
    default: 'likelion@cau.ac.kr',
});

export const isSubmitedAtom = atom({
    key:'isSubmited',
    default: false,
});

export const dateAtom = atom({
    key:'date',
    default: '잠시만 기다려주세요'
})
