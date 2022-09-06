const fetchAdvice = async () => {
    const res = await fetch('https://api.adviceslip.com/advice', { cache: 'no-cache' });
    const data = await res.json()

    document.querySelector('.advice-id').innerHTML = data.slip.id
    document.querySelector('.advice').innerHTML = data.slip.advice

}

fetchAdvice()

document.querySelector('.btn').addEventListener('click', fetchAdvice);