import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');


const iframe = document.querySelector('iframe');

player.on('timeupdate', throttle(function(event) {

  localStorage.setItem('videoplayer-current-time', event.seconds);
}, 1000));


const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  player.setCurrentTime(currentTime);
}
