import { Fragment } from "react";
// import { Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
    <Fragment>
      {/* <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="*" element={<Navigate to="/products" replace />} />
      </Routes> */}

      <div className="selection:bg-pink-300 selection:text-white">
        <p
          className="first-letter:text-blue ml-4 
          first-letter:float-left
         first-letter:mr-3 first-letter:text-7xl first-letter:font-bold"
        >
          So I started to walk into the water. I won't lie to you boys, I was
          terrified. But I pressed on, and as I made my way past the breakers a
          strange calm came over me. I don't know if it was divine intervention
          or the kinship of all living things but I tell you Jerry at that
          moment, I <em>was</em> a marine biologist.
        </p>
      </div>
    </Fragment>
  );
}
