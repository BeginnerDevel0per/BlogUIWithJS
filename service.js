const url = "http://localhost:3000";
document.addEventListener("DOMContentLoaded", GetBlogs());

async function GetBlogs() {
    let response = await fetch(url + "/blogs");
    try {
        if (response.ok) {
            let Blogs = await response.json();
            ListBlogToPage(Blogs);
        }
    } catch (error) {
        console.log(error);
    }
}
async function GetBlogById(id) {
    let response = await fetch(url + `/Blogs/${id}`);
    try {
        if (response.ok) {
            let Blog = await response.json();
            return Blog;
        }
    } catch (error) {
        console.log(error);
    }
}
async function SearchBlogs(Keyword) {
    let response = await fetch(`${url}/Search/${Keyword}`);
    try {
        if (response.ok) {
            let Blogs = await response.json();
            ListBlogToPage(Blogs);
        }
    } catch (error) {
        console.log(error);
    }
}

async function AddBlog(Blog) {
    try {
        console.log(Blog)
        let response = await fetch(url + "/blogs", {
            method: "POST",
            body: Blog
        });
        if (response.ok) {
            let result = await response.json();
            return result;
        }
    } catch (error) {
        console.log(error);
    }
}
async function RemoveBlog(id) {
    try {
        let response = await fetch(`${url}/blogs/${id}`,
            {
                method: "DELETE"
            }
        );
        if (response.ok) {
            await GetBlogs();
        }
    } catch (error) {
        console.log(error);
    }
}
async function UpdateBlog(Blog) {
    try {
        let response = await fetch(`${url}/blogs`,
            {
                method: "PUT",
                body: Blog
            }
        );
        if (response.ok) {
            let Blogs = await response.json();
            return Blogs;
        }
    } catch (error) {
        console.log(error);
    }
}









