import React from "react"
import atlassian from "../../assets/atlassian.png"
import dropbox from "../../assets/dropbox.png"
import google from '../../assets/google.png'
import shopify from "../../assets/shopify.png"
import slack from "../../assets/slack.png"
import "./Brand.css"

function Brand(){
    return(
        <div className="brand section__padding">
            <img src={google} alt="" />
            <img src={slack} alt="" />
            <img src={atlassian} alt="" />
            <img src={dropbox} alt="" />
            <img src={shopify} alt="" />
        </div>
    )
}
export default Brand