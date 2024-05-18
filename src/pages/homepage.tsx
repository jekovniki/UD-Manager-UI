const Homepage = () => {
    return (<main>
    Ето лист с всички налични страници. Към момента компонентите се имплементират единствено статично:
    <div className="mt-4">
        <a href="/login" >Login</a>
    </div>
    <div className="mt-4">
        <a href="/register" >Company Register</a>
    </div>
    <div className="mt-4">
        <a href="/register/user" >User Register</a>
    </div>
</main>)
}

export default Homepage;