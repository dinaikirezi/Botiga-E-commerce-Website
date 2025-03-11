import React from "react";
import Blog1 from "../assets/Blog1.jpeg";
import Blog2 from "../assets/Blog2.jpeg";
import Blog3 from "../assets/Blog3.jpeg";
import Blog4 from "../assets/Blog4.jpeg";
import Blog5 from "../assets/Blog5.jpeg";
import Blog6 from "../assets/Blog6.jpeg";

import "../styles/Blog.css";

const blogPosts = [
    {
      id: 1,
      image: Blog1,
      date: "July 18, 2021",
      title: "Sed magna dui, dignissim id felis vitae, consectetur",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]",
    },
    {
      id: 2,
      image: Blog2,
      date: "July 18, 2021",
      title: "Fusce suscipit risus tempor, blandit urna at, laoreet ex",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]",
    },
    {
      id: 3,
      image: Blog3,
      date: "July 18, 2021",
      title: "Pellentesque varius, diam vitae mattis luctus, mi mi cursus",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]",
    },
    {
      id: 4,
      image:Blog4,
      date: "July 18, 2021",
      title: "Aliquam erat volutpat, nunc ut rhoncus efficitur, lectus sem",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]",
    },
    {
      id: 5,
      image: Blog5,
      date: "July 18, 2021",
      title: "Vestibulum eget nisl quis libero laoreet tincidunt eu non",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]",
    },
    {
      id: 6,
      image: Blog6,
      date: "July 18, 2021",
      title: "Curabitur accumsan, odio et pharetra interdum, dui purus",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]",
    },
  ];
  
  const Blog = () => {
    return (
      <div className="blog-container">
        <h1 className="blog-title">Blog</h1>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div className="blog-card" key={post.id}>
              <img src={post.image} alt="Blog" className="blog-image" />
              <p className="blog-date">{post.date}</p>
              <h2 className="blog-heading">{post.title}</h2>
              <p className="blog-description">{post.description}</p>
              <a href="#" className="blog-link">Read more</a>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Blog;
  