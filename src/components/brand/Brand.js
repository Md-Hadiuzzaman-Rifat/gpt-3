import React from "react"
import atlassian from "../../assets/atlassian.png"
import dropbox from "../../assets/dropbox.png"
import google from '../../assets/google.png'
import shopify from "../../assets/shopify.png"
import slack from "../../assets/slack.png"

function Brand(){
    return(
        <div>
            <img src={google} alt="" />
            <img src={slack} alt="" />
            <img src={atlassian} alt="" />
            <img src={dropbox} alt="" />
            <img src={shopify} alt="" />
        </div>
    )
}
export default Brand