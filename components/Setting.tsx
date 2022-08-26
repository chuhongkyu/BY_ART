// import { useEffect } from "react";
// import Player from "./Player";

// export default function keyCheck() {
//   if (typeof window !== "undefined") {
//     const windowEvent = () => {
//       window.addEventListener("keydown", (e) => {
//         let keyDown = e.key;
//         console.log(keyDown);
//         player.keyMotion();
//       });

//       window.addEventListener("keyup", (e) => {
//         let keyUp = e.key;
//         console.log("키 업", keyUp);
//         player.keyMotion();
//       });
//     };
//     let player;
//     const init = () => {
//       player = new Player(".player");
//       windowEvent();
//     };
//     window.onload = () => {
//       init();
//     };
//   }
// }
