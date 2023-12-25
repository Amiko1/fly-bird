import Phaser, { Scene } from "phaser";
import PlayScene from "./scenes/PlayScene";
import MenuScene from "./scenes/MenuScene";
import PreloadScene from "./scenes/preloadScene";
import ScoreScene from './scenes/ScoreScene';
import PauseScene from './scenes/PauseScene';

const WIDTH = 600;
const HEIGHT = 600;
const BIRD_POSITION = { x: WIDTH * 0.1, y: HEIGHT / 2 };

const SHARED_CONFIG = {
  width: WIDTH,
  height: HEIGHT,
  startPosition: BIRD_POSITION,
};

const Scenes = [PreloadScene, MenuScene, ScoreScene,PlayScene , PauseScene];
const createScene = (Scene) => new Scene(SHARED_CONFIG);

const initScenes = () => Scenes.map(createScene);

const config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT, // Adjust scaling mode as needed
    ...SHARED_CONFIG,
    autoCenter: Phaser.Scale.CENTER_BOTH,

  },
  pixelArt: true,
  physics: {
    // Arcade physics plugin, manages physics simlatuion
    default: "arcade",
    arcade: {
      //  debug: true,
    },
  },
  scene: initScenes(),
};

new Phaser.Game(config);
