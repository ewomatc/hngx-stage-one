const express = require('express')
const app = express()
const PORT = 8080;

// handle get request
app.get('/api', (req, res) => {
	// get query params
	const { slack_name, track } = req.query;

	// check if the query parameters are given
	if (!slack_name || !track) {
		return res.status(400).json({
			error: 'Please rovide a valid slack_name and track'
		})
	}

	// get the information needed in the response
	const current_day = new Date().toLocaleString('en-US', { weekday: 'long' })
	const utc_time = new Date().toISOString()
	const githubFileUrl = 'https://github.com/ewomatc/hngx-stage-one/blob/main/app.js'
	const githubRepoUrl = 'https://github.com/ewomatc/hngx-stage-one'

	// send json response
	res.status(200).json({
		slack_name,
		current_day,
		utc_time,
		track,
		github_file_url: githubFileUrl,
		github_repo_url: githubRepoUrl,
		status_code: 200
	})
})

app.listen(PORT, () => {
	console.log(`Server started on port: ${PORT}`);
})