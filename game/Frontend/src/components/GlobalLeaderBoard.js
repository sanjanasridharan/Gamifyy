import React,{useContext} from 'react';
import '../LeaderBoard.css'
import {CheckStatus} from '../context/CheckStatus'


export default function GlobalLeaderBoard({props}) {
  // console.log(props)
  const user = useContext(CheckStatus)
  const username=user.user.userid
  const rank=user.user.rank
  const score=user.user.rewardpoints
  return (
   
    <div class="center">
    <div class="top3">
      <div class="two item">
        <div class="pos">
          2
        </div>
        <div class="pic"></div>
        <div class="name">
          Edgar Soto
        </div>
        <div class="score">
          6453
        </div>
      </div>
      <div class="one item">
        <div class="pos">
          1
        </div>
        <div class="pic" ></div>
        <div class="name">
          Clifford James
        </div>
        <div class="score">
          6794
        </div>
      </div>
      <div class="three item">
        <div class="pos">
          3
        </div>
        <div class="pic" ></div>
        <div class="name">
          Nevaeh Silva
        </div>
        <div class="score">
          6034
        </div>
      </div>
    </div>
    <div class="list">
      <div class="item">
        <div class="pos">
          4
        </div>
        <div class="pic" ></div>
        <div class="name">
          Clayton Watson
        </div>
        <div class="score">
          5980
        </div>
      </div>
      <div class="item">
        <div class="pos">
          5
        </div>
        <div class="pic" ></div>
        <div class="name">
          Debbie Lane
        </div>
        <div class="score">
          5978
        </div>
      </div>
      <div class="item">
        <div class="pos">
          6
        </div>
        <div class="pic"></div>
        <div class="name">
          Gabriella Steward
        </div>
        <div class="score">
          5845
        </div>
      </div>
      <div class="item">
        <div class="pos">
          7
        </div>
        <div class="pic"></div>
        <div class="name">
          Nina Perkins
        </div>
        <div class="score">
          5799
        </div>
      </div>
      <div class="item" id="h">
        <div class="pos">
         {rank}
        </div>
        <div class="pic" ></div>
        <div class="name">
          {username}
        </div>
        <div class="score">
          {score}
        </div>
      </div>
      
     
    
    </div>
  </div>
		
     
  );
}