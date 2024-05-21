import React from 'react'

let data = [
    {
        title : "Margaret E.",
        des :  `"This is fantastic! Thanks so much guys!"`,
        url : "https://www.dfweyes.com//files/2017/06/lasik_last_blog.jpg"
    },
    {
        title : "Fred S.",
        des : `"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."`,
        url : "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-2.jpg"
    },
    {
        title : "Sarah W.",
        des : `"Thanks so much for making these free resources available to us!"`,
        url : "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-3.jpg"
    }
]
function People() {
  return <>
          <section className="testimonials text-center bg-light">
            <div className="container">
                <h2 className="mb-5">What people are saying...</h2>
                <div className="row">
                    {data.map((e,i)=>(
                    <div className="col-lg-4" key={i}>
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src={e.url} alt="..." />
                            <h5>{e.title}</h5>
                            <p className="font-weight-light mb-0">{e.des}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section></>
}

export default People