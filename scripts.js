var bloglist = document.querySelector(".BlogList");
var SearchInput = document.getElementById("SearchInput");

if (document.getElementById("Addblog")) {
    document.getElementById("Addblog").addEventListener("submit", async (event) => {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const author = document.getElementById('author').value;
        const image = document.getElementById('titleImage').files[0];
        const formData = new FormData();
        formData.append('author', author);
        formData.append('title', title);
        formData.append('content', content);
        formData.append('image', image);
        await AddBlog(formData);
        window.location.href = `${window.location.origin}/Index.html`;
    });
}

if (document.getElementById("Updateblog")) {
    document.getElementById("Updateblog").addEventListener("submit", async (event) => {
        event.preventDefault();
        const id = document.getElementById('id').value;
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const author = document.getElementById('author').value;
        const image = document.getElementById('titleImage').files[0];
        const formData = new FormData();
        formData.append("id", id);
        formData.append('author', author);
        formData.append('title', title);
        formData.append('content', content);
        formData.append('image', image);
        await UpdateBlog(formData);
    });
}

async function UpdateBlogInput(id, event) {
    event.stopPropagation();
    var blog = await GetBlogById(id);
    document.querySelector(".HomeSection").classList.add("display-none");
    document.querySelector(".AddOrUpdateBlogSection").classList.remove("display-none");
    document.getElementById('id').value = blog.id;
    document.getElementById('title').value = blog.title;
    document.getElementById('content').value = blog.content;
    document.getElementById('author').value = blog.author;
    document.getElementById('titleImage').files[0];
}

function ListBlogToPage(Blogs) {
    let text = "";
    Blogs.map(blog => {
        text += `<a href="javascript:void()" onclick="GetBlog('${blog.id}')"> <div class="box">
        <div class="TitleImg">
            <img src="${url}/${blog.titleImage}">
        </div>
        <div class="BlogTitle">
            <h3>${blog.title}</h3>
        </div>
        <div class="BlogContent">
            <p>${blog.content}</p>
        </div>
        <div class="boxFooter">
            <button onclick="RemoveBlog('${blog.id}')">Sil</button>
            <button onclick="UpdateBlogInput('${blog.id}',event)" >Güncelle</button>
        </div>
    </div> </a>`;
    });
    bloglist.innerHTML = text;
}

async function GetBlog(id) {
    var blog = await GetBlogById(id);
    text = `<div class="TitleImage">
    <img src="${url}/${blog.titleImage}">
    </div>
    <div class="Title">
    <h1>${blog.title}</h1>
    <hr>
     </div>
     <div class="Content">
    <p>${blog.content}</p>
    </div>`;
    document.querySelector(".HomeSection").classList.add("display-none");
    document.querySelector(".BlogView").innerHTML = text;
}

async function SearchBlog() {
    if (SearchInput.value != "") {
        await SearchBlogs(SearchInput.value);
    }
    else {
        await GetBlogs();
    }
}





