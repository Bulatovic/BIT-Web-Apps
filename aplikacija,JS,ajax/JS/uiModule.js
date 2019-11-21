
    const $searchInput = $('.input')
    const $list = $('.search-result')

    function getSearchText() {
        return $searchInput.val()
    }

    function displayList(users) {
        for (let i = 0; i < users.length; i++) {
            const user = users[i];

            const li = $(`<li>`);

            const img = $(`<img>`);
            img.attr(`src`, user.image);
            li.append(img);


            const p = $(`<p>`);
            p.text(user.username);
            li.append(p);


            $list.append(li);
        }


    }

    export {
        getSearchText, displayList
    }

