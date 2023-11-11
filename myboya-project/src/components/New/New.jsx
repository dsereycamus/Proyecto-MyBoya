import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from '@react-three/cannon'
import './New.css'
import { Ground } from "./Ground";
import { Fpv } from "./FPV";
import { Player } from "./Player";
import { Cubes } from "./Cubes";
function New() {
  return (
    <div className="boyacraft">
      <Canvas>
        <Sky sunPosition={[100,100,0]} />
        <ambientLight intensity={1} />
        <Fpv />
        <Physics>
          <Cubes />
          <Player />
          <Ground />
        </Physics>
      </Canvas>
      <div className="pointer">+</div>
    </div>
  );
}
export default New;
