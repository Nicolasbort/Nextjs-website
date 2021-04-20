
export default (req, res) => {
    if ( req.method == "POST" )
    {
        let { email, password } = req.body

        if (!email || !password) res.status(400).send({ error: "Request body incomplete!" });

        res.send({ message: `User '${email}' logged` });
    }
}