
let $search = document.querySelector('.search');

let $users = document.querySelector('#users');


function getSearchValue() {
    let place = $search.value;
    $search.value = "";
    return place;
}

function generateDisplay(userList) {
    $users.innerHTML = '';
    for (let i = 0; i < userList.length; i++) {
        let $link = document.createElement('a');
        $link.setAttribute('href', userList[i].github);
        $link.setAttribute('target', '_blank')

        let $image = document.createElement('img');
        $image.setAttribute('src', userList[i].image);

        $link.appendChild($image);

        let $name = document.createElement('h2');
        $name.textContent = userList[i].username;

        $div = document.createElement('div');
        $div.setAttribute('class', 'user');

        $div.appendChild($link);

        $div.appendChild($name);

        $users.appendChild($div);
    }

}

function generateDisplayRepo(repo, index) {
    let $parent = document.querySelectorAll('.user')[index]

    let $repoInfo = document.createElement('li');
    $repoInfo.textContent = `${repo.name.toUpperCase()} ${repo.description} ${repo.stars} ${repo.language}`;

    $parent.appendChild($repoInfo);
}

let canvas = document.getElementById('languageDistribution');
let ctx = canvas.getContext('2d');

let canvas_height = 500;
let canvas_width = 900;


function displayLanguageDistribution(languages) {
    function pastelColors() {
        var r = (Math.round(Math.random() * 127) + 127).toString(16);
        var g = (Math.round(Math.random() * 127) + 127).toString(16);
        var b = (Math.round(Math.random() * 127) + 127).toString(16);
        return '#' + r + g + b;
    }


    let languagesMatrix = [];
    let languageFrq = [];
    let counter = 0;

    languages.forEach(function (language, i) {
        languagesMatrix[counter] = [];
        languagesMatrix[counter][0] = i;
        languagesMatrix[counter][1] = language;
        languageFrq[counter] = language;
        counter++;
    });

    // for (var i in languages) {
    //     languagesMatrix[counter] = [];
    //     languagesMatrix[counter][0] = i;
    //     languagesMatrix[counter][1] = languages[i];
    //     languageFrq[counter] = languages[i];
    //     counter++;
    //     console.log(counter);
    // }


    console.log(languageFrq);
    let max_frq = Math.max(...languageFrq);
    console.log(max_frq);
    /*  let widthOfColumn = canvas_width / languageFrq.length; */

    /* 
    
            for (let i = 0; i < languageFrq.length; i++) {
                let heightOfColumn = languages[i] * canvas_height / max_frq;
    
                ctx.fillStyle = pastelColors();
                ctx.fillRect(i * widthOfColumn, canvas_height - heightOfColumn, widthOfColumn, heightOfColumn);
    
                            ctx.fillStyle = '#000000';
                            ctx.save();
                            context.rotate(-Math.PI / 2);
                            context.textAlign = "center";
                            context.fillText(`${languagesMatrix[i][0]}`, i * widthOfColumn, 0);
                            context.restore();
                 
    
    
                
            }
        }
     */
    export {
        getSearchValue,
        generateDisplay,
        generateDisplayRepo,
        displayLanguageDistribution
    }
}