// import React from "react";

// function Universe() {
//   return (
//     <div className="container mt-5">
//       <div className="row text-center">
//         <h1>The Zerodha Universe</h1>
//         <p>
//           Extend your trading and investment experience even further with our
//           partner platforms
//         </p>

//         <div className="col-4 p-3 mt-5">
//           <img src="https://zerodha.com/static/images/partners/zerodhafundhouse.png" />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="https://zerodha.com/static/images/products/sensibull-logo.svg" />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="https://zerodha.com/static/images/partners/tijori.svg" />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="https://zerodha.com/static/images/products/streak-logo.png" />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="https://zerodha.com/static/images/products/smallcase-logo.png" />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="https://zerodha.com/static/images/products/ditto-logo.png" />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <button
//           className="p-2 btn btn-primary fs-5 mb-5"
//           style={{ width: "20%", margin: "0 auto" }}
//         >
//           Signup Now
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Universe;
import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row mt-4">
        {[
          {
            src: "https://zerodha.com/static/images/partners/zerodhafundhouse.png",
            alt: "Zerodha Fund House",
          },
          {
            src: "https://zerodha.com/static/images/products/sensibull-logo.svg",
            alt: "Sensibull",
          },
          {
            src: "https://zerodha.com/static/images/partners/tijori.svg",
            alt: "Tijori",
          },
          {
            src: "https://zerodha.com/static/images/products/streak-logo.png",
            alt: "Streak",
          },
          {
            src: "https://zerodha.com/static/images/products/smallcase-logo.png",
            alt: "Smallcase",
          },
          {
            src: "https://zerodha.com/static/images/products/ditto-logo.png",
            alt: "Ditto",
          },
        ].map((item, index) => (
          <div key={index} className="col-md-4 col-sm-6 col-12 p-3 text-center">
            <img
              src={item.src}
              alt={item.alt}
              className="img-fluid mb-2"
              style={{ maxHeight: "80px", objectFit: "contain" }}
            />
            <p className="text-muted">Thematic investment platform</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-4 mb-5">
        <button className="btn btn-primary fs-5 px-4 py-2">Signup Now</button>
      </div>
    </div>
  );
}

export default Universe;
