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

// categories
const displayCategory = (data) => {
    // console.log(data);
    const categoryContainer = document.getElementById('category');
    for (const cat of data) {
        // console.log(cat.category);
        const btn = document.createElement('btn');
        btn.classList.add('btn');
        btn.innerText = cat.category;
        categoryContainer.appendChild(btn);
    }
}

// display videos
const displayVideos = (videos) => {
    const videoContainer = document.getElementById('videos');
    for (const video of videos) {
        console.log(video);
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <figure>
        <img
          src=${video.thumbnail}
          alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Card Title</h2>
        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
        `
        videoContainer.append(div);
    }
}


loadCategory();
loadVideos();