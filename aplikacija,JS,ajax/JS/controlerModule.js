import { fetchUsers } from './dataModule'
import { getSearchText, displayList } from './uiModule'


const controllerModule = (function (ui, data) {
    const $button = document.querySelector('.button');
    const $list = document.querySelector('.search-result')

    $button.addEventListener('click', function () {
        const text = ui.getSearchText()

        data.fetchUsers(text, function (users) {
            ui.displayList(users)

        })
    })

})(uiModule, dataModule)