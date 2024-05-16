//Функция для отправки данных в файл db.json
const postData = async (url, data) => {
	const res = await fetch(url, {
		method: 'POST', // каким образом
		headers: {
			'Content-type': 'application/json'
		},
		body: data
	})
	return await res.json() // теперь с информация будет приходить в файл db.json
}


const getResource = async (url) => {
	const res = await fetch(url)

	if (!res.ok) {
		throw new Error(`Could not fetch ${url}, status: ${res.status}`) // throw - выкидываем ошибку
	}

	return await res.json()
}

export { postData, getResource }