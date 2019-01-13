import React from 'react'
import './style.css';
import ImageBox from '../ImageBox'


var characters = [
  {
      "id": 1,
      "name": "Apu Nahasapeemapetilon",
      "imgUrl": "http://www.electricferret.com/static/images/cbub/cbub_contender_image/3/1064/1064.gif"
  },
  {
      "id": 2,
      "name": "Homer Simpson",
      "imgUrl": "https://yt3.ggpht.com/a-/AAuE7mDEaK0Ljq18zbzY1QpLhX6MZjElJSKiBOH_=s900-mo-c-c0xffffffff-rj-k-no"
  },
  {
      "id": 3,
      "name": "Bart Simpson",
      "imgUrl": "https://vignette.wikia.nocookie.net/de.simpsons/images/6/65/Bart_Simpson.png/revision/latest?cb=20171106184048"
  },
  {
      "id": 4,
      "name": "Marge Simpson",
      "imgUrl": "https://bloximages.chicago2.vip.townnews.com/rapidcityjournal.com/content/tncms/assets/v3/editorial/6/58/658e16f3-5067-5f4c-b571-fa3527eaff9a/658e16f3-5067-5f4c-b571-fa3527eaff9a.image.jpg?resize=400%2C400"
  },
  {
      "id": 5,
      "name": "Lisa Simpson",
      "imgUrl": "http://i.imgur.com/4LClmI1.png"
  },
  {
      "id": 6,
      "name": "Mr. Burns",
      "imgUrl": "https://i26.photobucket.com/albums/c101/BlueDjinn/mrburns.jpg"
  },
  {
      "id": 7,
      "name": "Ned Flanders",
      "imgUrl": "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-the-simpsons-harry-shearer-ned-flanders.jpg"
  },
  {
      "id": 8,
      "name": "Milhouse Van Houten",
      "imgUrl": "https://img.discogs.com/EZ4nupCgHRZKrMckr1Ch3S_Dz1k=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-1400315-1266496119.png.jpg"
  },
  {
      "id": 9,
      "name": "Moe Szyslak",
      "imgUrl": "https://imgix.ranker.com/user_node_img/81/1604131/original/moe-szyslak-film-characters-photo-u3?w=280&h=280&fit=crop&crop=faces&q=50&fmt=jpg"
  },
  {
      "id": 10,
      "name": "Krusty the Clown",
      "imgUrl": "https://vignette.wikia.nocookie.net/villains/images/7/7a/Killer_Krusty_Doll.png/revision/latest?cb=20150704205839"
  },
  {
      "id": 11,
      "name": "Nelson Muntz",
      "imgUrl": "http://images6.fanpop.com/image/photos/36300000/Nelson-Muntz-image-nelson-muntz-36388753-1000-1000.png"
  },
  {
      "id": 12,
      "name": "Waylon Smithers",
      "imgUrl": "http://www.quoteswarehouse.com/img/famous/waylon-smithers.gif"
  }
]

function index () {
  console.log(characters)
    return characters.map((character) => (
        <ImageBox key={character.id} imgUrl={character.imgUrl}/>
    ));
}

export default index;
