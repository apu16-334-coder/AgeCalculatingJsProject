document.getElementById("ageForm").addEventListener("submit", calculatingAge)

const ageInputField = document.querySelector('input[type="datetime-local"]')

const resultDom = document.getElementById("result");

function calculatingAge(event) {
    event.preventDefault()
    const birthDateTime = new Date(ageInputField.value)
    const now = new Date()
    const result = diffDateTime(birthDateTime)
    showResult(result)
}

function showResult(result) {
    resultDom.innerHTML = `
    You are ${result.year>1? result.year+"years": result.year+"year"},
    ${result.month>1? result.month+"months": result.month+"month"},
    ${result.day>1? result.day+"days": result.year+"day"},
    ${result.hour>1? result.hour+"hours": result.year+"hour"},
    ${result.min>1? result.min+"minutes": result.year+"minutes"}
    `;
}

function diffDateTime(birthDateTime, now = new Date()) {
    let year = now.getFullYear() - birthDateTime.getFullYear();
    let month = now.getMonth() - birthDateTime.getMonth();
    

    let day = now.getDate() - birthDateTime.getDate();
    let hour = now.getHours() - birthDateTime.getHours();
    let min = now.getMinutes() - birthDateTime.getMinutes();


    if (min < 0) { min += 60; hour--; }
    if (hour < 0) { hour += 24; day--; }
    if (day < 0) {
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        console.log(prevMonth.getDate())
        console.log(prevMonth)
        day += prevMonth.getDate();
        month--;
    }
    if (month < 0) { month += 12; years-- }
    return { year, month, day, hour, min }
}




