
import React,{useContext} from 'react';
import Score from '../data/Score.json'
import '../LeaderBoard.css'

import {CheckStatus} from '../context/CheckStatus'

export default function GroupLeaderBoard({props}) {
 const props1=props
 var sortJsonArray = require('sort-json-array');
 const user = useContext(CheckStatus)
 const username=user.user.userid
 let r=4

{props1.map((ele)=>(
  Score.push(ele)
))}
sortJsonArray(Score, 'rewardpoints','des')

console.log(Score.slice(3,))

  return (
    
    <div class="center">
    <div class="top3">
      <div class="two item">
        <div class="pos">
          2
        </div>
        <div class="pic"></div>
        <div class="name">
        {Score[1].userid}
        </div>
        <div class="score">
        {Score[1].rewardpoints}
        </div>
      </div>
      <div class="one item">
        <div class="pos">
          1
        </div>
        <div class="pic" ></div>
        <div class="name">
       {Score[0].userid}
        </div>
        <div class="score">
          {Score[0].rewardpoints}
        </div>
      </div>
      <div class="three item">
        <div class="pos">
          3
        </div>
        <div class="pic" ></div>
        <div class="name">
        {Score[2].userid}
        </div>
        <div class="score">
        {Score[2].rewardpoints}
        </div>
      </div>
    </div>
    <div class="list">
    {(Score.slice(3,8)).map((movie,index) => (

                
                   <div class="item" id={movie.userid===username ? "h": "ha" } >
                <div class="pos">
                  {r+index}
                </div>
                <div class="pic" ></div>
                <div class="name" >
                  {movie.userid}
                </div>
                <div class="score">
                  {movie.rewardpoints}
                </div>
              </div>
              ))}
    
     
    
    </div>
  </div>
    
     
  );
}
