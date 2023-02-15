
//convert date for "day/month/year" format
export const convertDate = (currentDate: any) => {
    let date = new Date(Date.parse(currentDate)),

        formatDay = date.getDate().toString().length === 1 ?
            '0' + date.getDate().toString() : date.getDate(),

        month = date.getMonth() + 1,

        formatMonth = month.toString().length === 1 ?
            '0' + month.toString() : month,

        format = `${formatDay}/${formatMonth}/${date.getFullYear()}`

    return format
}