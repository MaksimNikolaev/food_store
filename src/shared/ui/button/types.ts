import { ButtonHTMLAttributes } from 'react';

export type TButtonVariant = 'primary' | 'secondary';

/* P.S.Паттерн Компоновщик В данном случае, тип TButton объединяет в себе два других 
типа: TButtonVariant и ButtonHTMLAttributes<HTMLButtonElement>. 
Это позволяет создать новый тип, который включает в себя атрибуты кнопки (ButtonHTMLAttributes<HTMLButtonElement>) и 
добавляет к ним свойство variant, определенное типом TButtonVariant. */

export type TButton = {
  variant: TButtonVariant;
  extraClass?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
