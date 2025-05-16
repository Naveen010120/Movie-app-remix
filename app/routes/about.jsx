

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";




export default function About() {
  const images = [
    "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/11/greatest-movies-of-all-time.jpg ",
    "https://wallpaperaccess.com/full/329583.jpg",
    "https://wallpapercave.com/wp/wp2162835.jpg",
  ];


 
  return (
    <>
      <div className="w-full max-w-screen-xl h-[500px]  overflow-hidden mx-auto mt-6">
        <Carousel showThumbs={false} autoPlay infiniteLoop>
          {images.map((src, index) => (
            <div key={index} className="w-100 ">
              <img src={src} alt={`slide ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>
      <div>
        <h1 className="m-3 text-3xl font-bold text-black underline font-serif ">
          About OurPage :
        </h1>
        <p className="mx-6 text-justify">
          Welcome to our Movie Explorer — a sleek, user-friendly platform built
          with Remix that helps you discover movies across various genres.
          Whether you're a fan of action, drama, romance, or thrillers, this app
          allows you to browse trending titles, view detailed movie information,
          and search for your favorites effortlessly. We integrate with the TMDB
          (The Movie Database) API to provide up-to-date movie data, including
          posters, ratings, overviews, and release details. The app is designed
          with performance in mind, leveraging the power of modern frontend
          technologies, reusable components, and clean UI. Enjoy a smooth
          experience as you dive into the world of cinema — one genre at a time!
        </p>
        <p className="mx-6 text-justify indent-12 my-3">
          Movie Explorer is a modern, feature-rich web application designed to
          provide movie enthusiasts with an immersive and intuitive browsing
          experience. Built using the Remix framework, this app integrates
          seamlessly with the TMDB (The Movie Database) API to deliver real-time
          information about movies across multiple genres. Whether you're
          interested in the latest blockbusters, indie gems, or all-time
          classics, Movie Explorer helps you search, discover, and explore
          movies with ease.
        </p>
      </div>
      

        
    </>
  );
}
