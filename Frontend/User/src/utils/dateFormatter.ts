export const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
        dateStyle: "full"
    })
}

export const formatDate2 = (dateString: string): string => {
    const date = new Date(dateString)
    const day = date.getDate().toString().padStart(2, '0')
    const month = date.toLocaleDateString('en-US', { month: 'short' })
    const year = date.getFullYear()
    return `${day}. ${month}. ${year}`
}