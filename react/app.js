const Title = (props) => {
    return <h1>Hi from react</h1>
}
const Separator = () => {
    return <hr />
}
const Main = (props) => {
    return (
        <main>
            <p>Main content</p>
        </main>)
}
const List = (props) => {
    return (
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>

        </ul>
    )
}


const shows = [
    'Movie',
    'Serie',
    'Standup'
]

const ShowItem = (props) => {
    return <p>{props.name}</p>
}

const ShowList = (props) => {
    return props.showList.map((showName) => {
        return <ShowItem name={showName} />
    })
}


const App = (props) => {
    return (
        <div>
            <Title text="First title" />
            <Separator />
            <Main />
            <List />
            <ShowList showList={[
                'Movie',
                'Serie',
                'Standup'
            ]} />
        </div>

    )
}


const rootElement = document.querySelector('.root')
ReactDOM.render(<App />, rootElement)