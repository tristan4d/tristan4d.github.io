import './Display.css'

export default function Display({ gameOver = false, text }) {

    return (
        <div className='Display' style={{
            color: gameOver ? 'red' : 'white'
        }}>{text}</div>
    )
}