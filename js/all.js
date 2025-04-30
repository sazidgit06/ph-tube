// categories
const loadCategory = () => {
    try {
        fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
            .then(res => res.json())
            .then(data => displayCategory(data.categories))
    }
    catch (err) {
        console.log(err);
    }
}
// videos
const loadVideos = () => {
    try {
        fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
            .then(res => res.json())
            .then(data => displayVideos(data.videos))
    }
    catch (err) {
        console.log(err);
    }
}

// loadbsedoncategory
const loadbsedoncategory = (id) => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then(res => res.json())
    .then(data => displayVideos(data.category))
}

// categories
const displayCategory = (data) => {
    // console.log(data);
    const categoryContainer = document.getElementById('category');
    for (const cat of data) {
        // console.log(cat.category);
        const buttoncontainer = document.createElement('div');
        buttoncontainer.innerHTML = 
        `
            <button onclick="loadbsedoncategory(${cat.category_id})" class="btn">${cat.category}</button>
        `
        categoryContainer.appendChild(buttoncontainer);
    }
}

// time calculation

const time = (num) => {
    const hour = parseInt(num / 3600);
    const rem = num % 3600;
    const minute = parseInt(rem / 60);
    return `${hour} hrs ${minute} min ago`
}

// display videos
const displayVideos = (videos) => {
    const videoContainer = document.getElementById('videos');
    videoContainer.innerHTML = ""
    for (const video of videos) {
        console.log(video);
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <figure class="h-[200px] relative">
            <img
                src=${video.thumbnail}
                class="h-full w-full object-cover"
                alt="Shoes" />

                ${
                    video.others.posted_date?.length === 0 ? "" : `<span class="absolute right-2 bottom-2 bg-black text-white rounded p-1 text-xs">${time(video.others.posted_date)}</span>`
                }
         
        </figure>
        <div class="px-0 py-2 flex gap-2">
            <div>
                <img src=${video.authors[0].profile_picture} class="h-10 w-10 rounded-full object-cover" />
            </div>
            <div>
                <h2 class="font-bold">${video.title}</h2>
                <div class="flex gap-2 items-center">
                    <p class="text-gray-400">${video.authors[0].profile_name}</p>
                    ${video.authors[0].verified === true ? `<img src="https://img.icons8.com/fluency/48/instagram-check-mark.png" class="w-5"/>` : ""}
                </div>
                <p class = "text-gray-400" >${video.others.views} views</p>
            </div>
        </div>
        `
        videoContainer.append(div);
    }
}


loadCategory();
loadVideos();