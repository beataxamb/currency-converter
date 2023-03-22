{
    const calculateResult = (amount, currency) => {
        const currencyEur = 0.21;
        const currencyGbp = 0.19;
        const currencyUsd = 0.22;

        switch (currency) {
            case "EUR":
                return amount * currencyEur;

            case "GBP":
                return amount * currencyGbp;

            case "USD":
                return amount * currencyUsd;
        };
    };

    const updateResultText = (currency, result) => {
        const resultElement = document.querySelector(".js-result");
        const currencyName = document.querySelector(".js-currencyName");
        currencyName.innerText = ` ${currency}`;
        resultElement.innerHTML = result.toFixed(2);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const currency = currencyElement.value;
        const amount = amountElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(currency, result);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit)
    };

    init();

}
