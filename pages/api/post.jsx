export default (req, res) => {

    if (req.method == "POST")
    {
        // Add post
        let { title, body } = req.body;

        if (!title || !body) res.status(400).send({ error: "Request body incomplete!" })

        res.send({ message: `Post '${title}' adicionado!` })
    }
    else
    {
        res.status(400).send({ error: "Method not allowed!" })
    }
}