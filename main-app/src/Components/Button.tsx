
const Button = () => {
    return (
        <div>
        {/* <input type="button">aaa</input> */}
        <button
        className={`px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 disabled:opacity-50 transition duration-300`}    
        >Basic Button</button>
        </ div>
    )
}

export default Button