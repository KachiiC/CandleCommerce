import moment from 'moment'

export const TotalAmount = input => input.reduce((prev, cur) => prev + cur).toFixed(2)

export const Compare = (a, b) => {
    if (b.date > a.date) return 1;
    if (b.date < a.date) return -1;
    return 0;
}

export const MomentFunc = input => moment(input).format('MMMM Do YYYY, h:mm a')

export const searchWord = (input, search_word) => input.toLowerCase().includes(search_word.toLowerCase())

export const Targeter = (event, input) => event.target[input].value