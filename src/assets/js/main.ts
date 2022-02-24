const loginBase = 'https://id.twitch.tv/oauth2/authorize';
const loginClientId = 'bswjnitlemb553jejwba2uyjdk72qw';
// const loginRedirect = `${window.location.href}/`;
const loginRedirect = `http://localhost:3000`;
const loginResponseType = 'token';
const loginScope = 'openid';

const accessToken = new URLSearchParams(window.location.hash).get('#access_token');
const lekkerspelenID = 52385053;
const robbsnorID = 23611469;

// set login url
const login = document.getElementById('login') as HTMLAnchorElement
login.href = `${loginBase}?client_id=${loginClientId}&redirect_uri=${loginRedirect}&response_type=${loginResponseType}&scope=${loginScope}`;


// fetch sicko streams
fetch(`https://api.twitch.tv/helix/videos?user_id=${lekkerspelenID}&first=100`, {
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'Client-Id': `${loginClientId}`
  }
})
.then(res => res.json())
.then(res => {
    console.log(res)
    renderStreamers(res.data)
})

const renderStreamers = (streamData: any) => {
    streamData.forEach((stream: any) => {
        const image = stream.thumbnail_url ? stream.thumbnail_url.replace('%{width}', '320').replace('%{height}', '180') : '';

        document.querySelector('.streams').innerHTML += `
            <a href="${stream.url}" target="_blank" class="stream">
                <div class="stream__thumbnail">
                    <img src="${image}" class="stream__image">
                    <div class="stream__duration">${stream.duration}</div>
                </div>
                <div class="stream__content">
                    <h2 class="stream__title">${stream.title}</h2>
                    <div class="stream__date">${stream.published_at}</div>
                </div>
            </a>
        `;
    });
}