import React from 'react'
let data = [
    {
        title : "Fully Responsive",
        des : "This theme will look great on any device, no matter the size!",
       icon : "bi-window"
    },
    {
        title : "Bootstrap 5 Ready",
        des : "Featuring the latest build of the new Bootstrap 5 framework!",
        icon : "bi-layers"
    },
    {
        title : "Easy to Use & Customize",
        des : "Ready to use with your own content, or customize the source files!",
        icon : "bi-terminal"
    }
]
function Bhead() {
    return <>
            <section className="features-icons bg-light text-center">
              <div className="container">
                  <div className="row">
                  {data.map((e,i)=>(
                      <div className="col-lg-4"  key ={i}>
                          <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                              <div className="features-icons-icon d-flex"><i className={`${e.icon} m-auto text-primary`}></i></div>
                              <h3>{e.title}</h3>
                              <p className="lead mb-0">{e.des}</p>
                          </div>
                      </div>
                          ))}
                  </div>
              </div>
          </section>

    </>
  }

export default Bhead