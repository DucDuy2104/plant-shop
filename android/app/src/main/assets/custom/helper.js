export const getFontFamily = (baseFont = 'Poppins', weight) => {
    switch (weight) {
        case 'thin':
        case 100:
            return `${baseFont}-Thin`
        case 'extralight':
        case 200:
            return `${baseFont}-ExtraLight`
        case 'light':
        case 300:
            return `${baseFont}-Light`
        case 'regular':
        case 400:
            return `${baseFont}-Regular`
        case 'medium':
        case 500:
            return `${baseFont}-Medium`
        case 'semibold':
        case 600:
            return `${baseFont}-SemiBold`
        case 'bold':
        case 700:
            return `${baseFont}-Bold`
        case 'extrabold':
        case 800:
            return `${baseFont}-ExtraBold`
        case 'black':
        case 900:
            return `${baseFont}-Black`
        default:
            return `${baseFont}-Black`
    }
}