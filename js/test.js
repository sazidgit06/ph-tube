// const num = 1672656000;
// const year = parseInt(1672656000/31536000)
// console.log(`${year} year`)
// const rem1 = 1672656000 % 31536000
// const day = parseInt(rem1 / 86400)
// console.log(`${day} day`)
// const rem3 = rem1 % 86400
// const hour = parseInt(rem3 / 3600);
// console.log(`${hour} hour`);
// const rem = rem3 % 3600;
// const minute = parseInt(rem / 60);
// console.log(`${minute} minute`)
// const rem2 = rem % 60;
// console.log(`${rem2} second`)
const time = (num) => {
    const hour = parseInt(num / 3600);
    const rem = num % 3600;
    const minute = parseInt(rem / 60);
    return `${hour} hrs ${minute} min ago`
}

console.log(time(200));