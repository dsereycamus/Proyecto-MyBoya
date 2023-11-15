import {
  grassImg,
  dirtImg,
  logImg,
  glassImg,
  woodImg} from './images.js'
import {TextureLoader, RepeatWrapping, NearestFilter} from 'three'

const dirtTexture = new TextureLoader().load(dirtImg)
const grassTexture = new TextureLoader().load(grassImg)
const glassTexture = new TextureLoader().load(glassImg)
const woodTexture = new TextureLoader().load(woodImg)
const logTexture = new TextureLoader().load(logImg) 


const groundTexture = new TextureLoader().load(grassImg)

groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping

groundTexture.magFilter = NearestFilter
dirtTexture.magFilter = NearestFilter
grassTexture.magFilter = NearestFilter
glassTexture.magFilter = NearestFilter
woodTexture.magFilter = NearestFilter
logTexture.magFilter = NearestFilter
export {
  groundTexture,
  dirtTexture,
  grassTexture,
  glassTexture,
  woodTexture,
  logTexture
}