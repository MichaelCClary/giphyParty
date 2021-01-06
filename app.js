const searchBtn = document.querySelector('#gifSearch');
const clearBtn = document.querySelector('#gifClear')

searchBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const searchTerm = document.querySelector('#gifText').value;
    searchForGiphy(searchTerm);
});

clearBtn.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#gifDiv').innerHTML = '';
    document.querySelector('#gifText').value = '';
});


async function searchForGiphy(tag) {
    const res = await axios.get(`http://api.giphy.com/v1/gifs/random?api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym&tag=${tag}`)
    console.log(res.data.data)
    addImgToDOM(res.data.data.image_url);
}

function addImgToDOM(imgURL) {
    const imgDiv = document.querySelector('#gifDiv');
    const img = document.createElement('img');
    img.src = imgURL;
    imgDiv.append(img);
}

