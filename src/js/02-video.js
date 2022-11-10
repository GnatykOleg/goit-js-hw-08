import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const TIME_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const onPlay = function ({ seconds }) {
  console.log('Time:', seconds);
  localStorage.setItem(TIME_KEY, JSON.stringify(seconds));
};

player.on('timeupdate', throttle(onPlay, 1000));

const savedSettings = localStorage.getItem(TIME_KEY);
if (savedSettings) {
  const parsedSettings = JSON.parse(savedSettings);
  player.setCurrentTime(parsedSettings);
}
