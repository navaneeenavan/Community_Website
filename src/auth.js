

function Auth() {
    const val = localStorage.getItem("email")
    console.log(val)
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center">
            hello {val}
        </div>
    )
}

export default Auth