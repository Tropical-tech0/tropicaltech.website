//error messages for each language
export interface ErrorMessages {
    en: {
        price: string,
        firstName: string,
        lastName: string,
        email: string,
        phone: string,
        description: string,
        default: "Internal error"
    },
    pt: {
        price: string,
        firstName: string,
        lastName: string,
        email: string,
        phone: string,
        description: string,
        default: "Erro interno"
    },
    es: {
        price: string,
        firstName: string,
        lastName: string,
        email: string,
        phone: string,
        description: string,
        default: "Error interno"
    },
}
export const errorMessages: ErrorMessages = {
    en: {
        price: "Invalid price!",
        firstName: "Invalid First Name!",
        lastName: "Invalid Last Name",
        email: "Invalid Email!",
        phone: "Invalid phone!",
        description: "Invalid description!",
        default: "Internal error"
    },
    pt: {
        price: "Faixa de preço inválido!",
        firstName: "Primeiro nome inválido!",
        lastName: "Último nome inválido!",
        email: "Email inválido!",
        phone: "Número de telefone inválido!",
        description: "Descrição do projeto inválida!",
        default: "Erro interno"
    },
    es: {
        price: '¡Precio no válido!',
        firstName: '¡Nombre inválido!',
        lastName: 'Apellido inválido',
        email: '¡Email inválido!',
        phone: '¡Teléfono inválido!',
        description: '¡Descripción inválida!',
        default: "Error interno"
    }
} as ErrorMessages