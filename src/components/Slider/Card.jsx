import React from "react";

import {TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter} from 'react-icons/ti';
import { BsArrowRight } from 'react-icons/bs';

const Card = (props)=>{
    return(
     
<div class=" md:max-w-[340px] mx-0 my-4 md:shadow-2xl">
  

  <div className="w-full" >
    <img src={props.img} className="w-full" alt="/"/>
    <div className=" w-full flex justify-between items center py-5">
<p className="text-[#A5A5A5] font-bold">06.11.2021</p>
<div className="flex justify-around items-center">
    <TiSocialFacebook className="mr-4 text-xl text-[#1D61A1]"/>
    <TiSocialLinkedin className="mr-4 text-xl text-[#1D61A1]"/>
    <TiSocialTwitter  className="mr-3.5 text-xl text-[#1D61A1]"/>
</div>
    </div>
      <div class="p-4">
        <h3 class="text-2xl font-bold  mb-2 ">Transhumancë of Albania to UNESCO</h3>
        <p className="text-base py-3">Albania’s cultural heritage is more than its vast physical heritage of castle, archaeological ruins, museum and remote monuments. It is about people and their practices, representations, expressions, as well as the knowledge and skills (including instruments, objects, artifacts, cultural spaces).</p>
        <a href="/" class="pr-2 py-2 inline-block mt-4 text-sm font-bold">Read more</a>
        <BsArrowRight className="inline-block text-sm font-bold" />
      </div>
  </div>
  
</div>
        
    )
}

export default Card;