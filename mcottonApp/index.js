const express = require('express')
const app = express();
const PORT = 3000;

app.use( express.json() );

app.listen(
   PORT,
   () => console.log(`it's alive on http://localhost:${PORT}`)
)

app.get('/job', (req, res) => {
  res.status(200).send({
	job: 'Web Dev',
	description: 'Fun group projects'
  })
});
app.post('/job/:id', (req, res) => {

    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
	res.status(418).send({ message: 'No logo found!' })
    }

    res.send({
	job: 'Job with your ${logo} and ID of ${id}',
    });
});
