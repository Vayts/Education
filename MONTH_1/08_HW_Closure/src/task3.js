function getQuantityPostsByAuthor (arr, name) {

    if (!Array.isArray(arr) || typeof name !== 'string') {
        return 'Invalid input data'
    }

    const resultArr = resultCounter(arr,name);


    // Функция, которая возвращает массив с постами. Если по запросу будут найдены и комментарии к постам, то в массиве появится вложенный массив.
    // (*Хотел поиграться с рекурсией*)
    function resultCounter (arr,name) {
        let result = []
        let comments = [];
        for (let i = 0; i < arr.length; i++) {
            let obj = arr[i]

            for (key in obj) {
                if (obj[key] === name) {
                    result.push(obj[key])
                }
                if (typeof obj[key] === 'object') {
                    let subObj = resultCounter(obj[key], name)

                    if (subObj.length !== 0) {
                        comments.push(subObj)
                    }

                }
            }
        }

        if (comments.length > 0) {
            result.push(comments.join(',').split(','))
            return result
        }
        return result
    }

    // Объявляются переменные
    let postCounter = 0;
    let commentsCounter = 0;

    for (let i = 0; i < resultArr.length; i++) {

        if (typeof resultArr[i] === 'object') {
            commentsCounter = resultArr[i].length
        } else {
            postCounter++
        }

    }


    return `posts -> ${postCounter}, comments -> ${commentsCounter}`
}
module.exports = getQuantityPostsByAuthor;