import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    

    <rect x="99" y="122" rx="0" ry="0" width="1" height="0" /> 
    <rect x="92" y="309" rx="0" ry="0" width="0" height="1" /> 
    <rect x="0" y="281" rx="10" ry="10" width="280" height="28" /> 
    <rect x="91" y="303" rx="0" ry="0" width="1" height="0" /> 
    <rect x="42" y="373" rx="0" ry="0" width="47" height="0" /> 
    <rect x="0" y="339" rx="10" ry="10" width="280" height="88" /> 
    <rect x="3" y="454" rx="10" ry="10" width="95" height="30" /> 
    <rect x="54" y="480" rx="0" ry="0" width="25" height="5" /> 
    <rect x="125" y="447" rx="23" ry="23" width="152" height="45" /> 
    <rect x="138" y="107" rx="0" ry="0" width="0" height="1" /> 
    <circle cx="134" cy="128" r="125" />
  </ContentLoader>
)

export default Skeleton