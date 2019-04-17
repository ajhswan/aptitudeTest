
document.getElementById('filterScorePercentage').addEventListener('change', () => {
    updateScoreTable()
})

function setDate() {
    let startDateInput = document.getElementById('startDate').value
    let startDate = '1970-01-01'
    let endDateInput = document.getElementById('endDate').value
    let endDate = '2099-12-31'
    if (startDateInput !== "") {
        startDate = startDateInput
    }
    if (endDateInput !== "") {
        endDate = endDateInput
    }
    return [startDate, endDate]
}

/**
 * checks the start and end date input and assigns a default value if no value set
 * checks the start date is earlier than the end date; if it is, runs AJAX request, if not error
 *
 * @returns run results function or alert to error
 */
document.getElementById('startDate').addEventListener("change", ()=>{
    let dates = setDate()
    if (dates[0] <= dates[1]) {
        updateScoreTable()
    } else {
        alert("Please enter a valid date range")
    }
})

/**
 * checks the start and end date input and assigns a default value if no value set
 * checks the start and end date is earlier than the end date; if it is, runs AJAX request, if not error
 *
 * @returns run results function or alert to error
 */
document.getElementById('endDate').addEventListener("change", ()=> {
    let dates = setDate()
    if (dates[0] <= dates[1]) {
        updateScoreTable()
    } else {
        alert("Please enter a valid date range")
    }
})

/**
 * filters the resultArray to display scores between two specified dates
 *
 * @param resultArray of scores
 *
 * @return newResultArray containing the filtered data
 */
function date(resultArray) {
    let dates = setDate()
    let newResultArray = []
    resultArray.forEach(data => {
        if (data.dateCreated > dates[0] && data.dateCreated < dates[1]) {
            newResultArray.push(data)
        }
    })
    return newResultArray
}

