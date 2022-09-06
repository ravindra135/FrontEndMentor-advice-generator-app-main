const fetchAdvice = async () => {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json()

    console.log(data);
    document.querySelector('.advice-id').innerHTML = data.slip.id
    document.querySelector('.advice').innerHTML = data.slip.advice

}

fetchAdvice()

document.querySelector('.btn').addEventListener('click', fetchAdvice);