require('dotenv').config()
const express = require('express')
const app = express()
const port = 7000

const githubData={
  "login": "Amitv83",
  "id": 128900060,
  "node_id": "U_kgDOB67b3A",
  "avatar_url": "https://avatars.githubusercontent.com/u/128900060?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Amitv83",
  "html_url": "https://github.com/Amitv83",
  "followers_url": "https://api.github.com/users/Amitv83/followers",
  "following_url": "https://api.github.com/users/Amitv83/following{/other_user}",
  "gists_url": "https://api.github.com/users/Amitv83/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Amitv83/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Amitv83/subscriptions",
  "organizations_url": "https://api.github.com/users/Amitv83/orgs",
  "repos_url": "https://api.github.com/users/Amitv83/repos",
  "events_url": "https://api.github.com/users/Amitv83/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Amitv83/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Amit Kumar Vishwakarma",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "NIT Raipur (B.Tech.-Information Technology)\r\n2026\r\n",
  "twitter_username": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2023-03-25T10:34:04Z",
  "updated_at": "2024-06-01T09:35:23Z"
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('akvamitdotcom')
})
app.get('/login', (req, res) => {
  res.send('<h1>please login at thanda and code</h1>')
})
app.get('/github', (req, res) => {
  res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
