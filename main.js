let area = document.getElementById('area');
let rangeInput = document.getElementById('range');

let changeImageSize = () => {
    document.getElementById('image').style.width = rangeInput.value + '%';
};

let dropHandler = (e) => {
    e.preventDefault();

    let photo = e.dataTransfer.files[0];
    let fileReader = new FileReader();

    fileReader.readAsDataURL(photo);
    fileReader.onload = (e) => {
        area.innerHTML = `<img id="image" src="${e.target.result}">`;
        rangeInput.style.display = 'block';

        rangeInput.addEventListener('input', changeImageSize);
    };
};

area.addEventListener('dragover', (e) => {e.preventDefault()});
area.addEventListener('drop', dropHandler.bind(this));
//area.addEventListener('drop', (e) => {dropHandler.bind(e)});