export default function Slider(){
    return(
<div id="carouselExample" className="carousel slide">
    <div className="carousel-inner">
        <div className="carousel-item active">
        <img src="https://th.bing.com/th/id/OIP.JfmZujC-oxQfceBsssqgjwHaEl?w=305&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="d-block w-100 height-300" alt="..."/>
        </div>
        <div className="carousel-item">
        <img src="https://th.bing.com/th/id/OIP.sjq_8d7hEOd8a3zmzCQsbgHaE7?w=283&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="d-block w-100 height-300" alt="..."/>
        </div>
        <div className="carousel-item">
        <img src="https://th.bing.com/th/id/OIP.ulgIUOumRK4Bvqeddju7mwHaFQ?w=265&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="d-block w-100 height-300" alt="..."/>
        </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
</div>
    )
}