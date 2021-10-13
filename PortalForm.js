// portal submission form renderer
function portalForm() {
    return( 
        `<div>
        <form action="/" method="POST">
        <div>
        <label for="s_number">Studend Number:</label><br>
        <input type="text" id="s_number" name="s_number" required min="7" value="">
        </div>
        <div>
        <label for="s_pin">Studend pin:</label><br>
        <input type="text" id="s_pin" name="s_pin" required min="6" value="">
        </div>
        <input type="submit">
        </form>
        </div>`
    )
}
module.exports = portalForm