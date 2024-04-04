export const convertNumberToMoney = (number) => {
    return Intl.NumberFormat().format(number)
}

export function formatDate(dateISO) {
    const date = new Date(dateISO)
    const days = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
    const dayOfWeek = days[date.getDay()];

    let day = date.getDate();
    day = day.toString().padStart(2, '0');  
   
    let month = date.getMonth() + 1;  
    month = month.toString().padStart(2, '0');  
   
    const year = date.getFullYear();
   
    return `${dayOfWeek}, ngày ${day}/${month}/${year}`;
}