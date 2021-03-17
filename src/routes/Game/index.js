
const GamePage = ({onChangePage}) => {
    const toHomeButton = () => {
        onChangePage && onChangePage('app');
    }

    return (
        <>
            <button
                onClick={toHomeButton}
            >
                Go To Home
            </button>
        </>
    )
}

export  default GamePage;