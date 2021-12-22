document.addEventListener('DOMContentLoaded', () => {
    const developerBlock = document.querySelector('.developer_block'),
          noGames = document.querySelector('.no_games');

    if (localStorage.devNameGame) {
        developerBlock.innerHTML = `
            <div class="plus">
                <input type="file" onchange="donwload(this)">
            </div>
            <div class="shop_item">
                <img src="${localStorage.devLinkGame}">
                <p class="game_name">${localStorage.devNameGame}</p>
            </div>
        `;
    }



    
    noGames.style.display = 'flex';
});



let wrapper = document.querySelector('.img_wrapper'),
    developerBlock = document.querySelector('.developer_block')

function donwload(input) {
    let file = input.files[0],
        rowFileName = input.files[0].name,
        fileName = rowFileName.substring(0, rowFileName.length - 4),
        reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = function () {
        developerBlock.innerHTML = `
            <div class="img_wrapper">
                <img src="${reader.result}">
                <span>${fileName}</span>
                <div class="dev_add_game">Add game</div>
            </div>
        `;

        let imgWrapper = document.querySelector('.img_wrapper');
        imgWrapper.style.display = 'flex';





        const devAddGame = document.querySelector('.dev_add_game');

        devAddGame.addEventListener('click', () => {
            localStorage.devNameGame = fileName;
            localStorage.devLinkGame = reader.result;
            window.location.href="developer.html";
        });
    }

    
}