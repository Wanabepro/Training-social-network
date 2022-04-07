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
    const EmailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return String(value).toLowerCase().match(EmailRegExp) ? undefined : "Invalid e-mail"
}


export const urlValidator = value => {
    const urlRegExp = new RegExp("^(?:(?:http(?:s)?|ftp)://)(?:\\S+(?::(?:\\S)*)?@)?(?:(?:[a-z0-9\u00a1-\uffff](?:-)*)*(?:[a-z0-9\u00a1-\uffff])+)(?:\\.(?:[a-z0-9\u00a1-\uffff](?:-)*)*(?:[a-z0-9\u00a1-\uffff])+)*(?:\\.(?:[a-z0-9\u00a1-\uffff]){2,})(?::(?:\\d){2,5})?(?:/(?:\\S)*)?$")
    return String(value).toLowerCase().match(urlRegExp) || null ? undefined : "Invalid e-mail"
}