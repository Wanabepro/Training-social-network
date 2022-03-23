export const required = value => {
    return (value ? undefined : 'Field is required')
}

export const maxLengthConstructor = maxLength => value => {
    return (
        value && value.length > maxLength
            ? `Maximum length ${maxLength} symbols`
            : undefined
    )
}

export const emailValidator = value => {
    return String(value)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
        ? undefined
        : "Invalid e-mail"
}