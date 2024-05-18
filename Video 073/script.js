function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    views = convertViewsToShorthand(views);

    const cardHTML = `
        <div class="card">
            <div class="thumbnail">
                <img src="${thumbnail}" alt="">
                <p class="duration">${duration}</p>
            </div>
            <div class="content">
                <p class="title">${title}</p>
                <div class="stats">
                    <p class="channel-name">${cName}</p>
                    <p class="dot">•</p>
                    <p class="views">${views} views</p>
                    <p class="dot">•</p>
                    <p class="uploaded">${monthsOld} months ago</p>
                </div>
            </div>
        </div>
    `;
    
    const container = document.querySelector('.container');
    container.insertAdjacentHTML('beforeend', cardHTML);
}

function convertViewsToShorthand(views) {
    if (views < 1000) {
        return views;
    } else if (views < 1000000) {
        return (views / 1000).toFixed(1).replace(/\.0$/, '') + "K";
    } else if (views < 1000000000) {
        return (views / 1000000).toFixed(1).replace(/\.0$/, '')  + "M";
    } else if (views < 1000000000000) {
        return (views / 1000000000).toFixed(1).replace(/\.0$/, '')  + "B";
    } else {
        return (views / 1000000000000).toFixed(1).replace(/\.0$/, '')  + "T";
    }
}

createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 5610000000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")