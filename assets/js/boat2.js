function calculatePrice() {
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');
    const priceDisplay = document.getElementById('priceDisplay');
    const endDisplay = document.getElementById('endDisplay');

    const startDate = new Date(startDateInput.value);
    const endDate = new Date(endDateInput.value);

    const startTimestamp = startDate.getTime();
    const endTimestamp = endDate.getTime();

    const today = new Date();
    const todayTimestamp = today.getTime();

    if (endTimestamp < startTimestamp) {
        endDateInput.value = startDateInput.value;
    }

    const startDay = startDate.getDay();
    const endDay = endDate.getDay();
    let totalPrice = 1400;
    SwPrice = 0;
    SsPrice = 0;
    EwPrice = 0;
    EsPrice = 0;
    if (startDay === 5 || startDay === 6) {
        SwPrice = 150;
    }

    if (endDay === 0 || endDay === 1) {
        EwPrice = 150;
    }

    const specialDates = [
        [new Date('2024-04-04').getTime(), new Date('2024-04-07').getTime()],
        [new Date('2024-06-08').getTime(), new Date('2024-06-10').getTime()]
    ];

    const isSpecialDate = specialDates.some(dateRange => {
        return startTimestamp >= dateRange[0] && startTimestamp <= dateRange[1];
    });

    if (isSpecialDate) {
        SsPrice = 250;
    }

    const isSpecialEndDate = specialDates.some(dateRange => {
        return endTimestamp >= dateRange[0] && endTimestamp <= dateRange[1];
    });

    if (isSpecialEndDate) {
        EsPrice = 250;
    }
    totalPrice = Math.max(SwPrice, SsPrice) + Math.max(EwPrice, EsPrice) + totalPrice;
    priceDisplay.textContent = `成人(12歲以上) NT$${totalPrice.toLocaleString()}`;
    formatendDate= formatDate(endDate);
    endDisplay.textContent=`${formatendDate}`;
}

function updateMinEndDate() {
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');

    endDateInput.min = startDateInput.value;
    endDateInput.value = startDateInput.value; // 设置回程日期为出发日期

    calculatePrice();
}

function updateMinReturnDate() {
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');

    const today = new Date();
    const todayFormatted = formatDate(today);

    startDateInput.min = todayFormatted;
    startDateInput.value = todayFormatted;

    endDateInput.min = todayFormatted;
    endDateInput.value = todayFormatted; // 设置回程日期初始值为今天

    calculatePrice();
}

function formatDate(date) {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
}

updateMinReturnDate();