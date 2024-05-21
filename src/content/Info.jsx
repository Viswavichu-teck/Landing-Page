import React from 'react'

let data = [
    {
        title : "Fully Responsive Design",
        des : "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
        url : "https://media.idownloadblog.com/wp-content/uploads/2021/04/iPhone-7-Plus-dual-lense-rear-camera-led-flash-1536x1025.jpg"
    },
    {
        title : "Updated For Bootstrap 5",
        des : "Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
        url : "https://vanseodesign.com/blog/wp-content/uploads/2018/08/source-code.jpg"
    },
    {
        title : "Easy to Use & Customize",
        des : "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
        url : "https://ezwebnow.com/wp-content/uploads/2022/11/blog-2.jpg"
    }
]
function Info() {
    return (
        <>
            {data.map((e, i) => (
                <section className="showcase" key={i}>
                    <div className="container-fluid p-0">
                        <div className="row g-0">
                            <div className={`col-lg-6 ${i % 2 === 0 ? 'order-lg-2' : ''} text-white showcase-img`} style={{ backgroundImage: `url(${e.url})` }}></div>
                            <div className="col-lg-6 my-auto showcase-text">
                                <h2>{e.title}</h2>
                                <p className="lead mb-0">{e.des}</p>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
}

export default Info