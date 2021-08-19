const string = `
.skin * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
.skin *::before {
    box-sizing: border-box;
  }
  .skin {
    position: relative;
    background: #ffe600;
    min-height: 50vh;
  }
  .nose {
    border: 10px solid black;
    border-color: black transparent;
    border-bottom: none;
    width: 0px;
    height: 0px;
    position: relative;
    left: 50%;
    top: 150px;
    margin-left: -10px;
    z-index: 10;
  }
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    30% {
      transform: rotate(5deg);
    }
    68% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  .nose:hover {
    transform-origin: center bottom;
    animation: wave 300ms infinite linear;
  }
  .yuan {
    width: 20px;
    height: 6px;
    position: absolute;
    top: -16px;
    right: -10px;
    border-radius: 10px 10px 0 0;
    background: black;
  }
  .eye {
    border: 2px solid #000;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: #2e2e2e;
    border-radius: 50%;
  }
  .eye::before {
    content: "";
    display: block;
    border: 2px solid #000;
    width: 32px;
    height: 32px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    left: 8px;
    top: 2px;
  }
  .eye.left {
    transform: translateX(-100px);
  }
  .eye.right {
    transform: translateX(100px);
  }
  .mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
  }
  .mouth .up {
    position: relative;
    top: -20px;
    z-index: 1;
  }
  .mouth .up .lip {
    border: 3px solid black;
    height: 30px;
    width: 100px;
    border-top-color: transparent;
    position: relative;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    background: #ffe600;
  }
  .mouth .up .lip.left {
    border-radius: 0 0 0 50px;
    border-left-color: transparent;
    transform: rotate(-15deg) translateX(-53px);
  }
  .mouth .up .lip.right {
    border-radius: 0 0 50px 0;
    border-right-color: transparent;
    transform: rotate(15deg) translateX(53px);
  }
  .mouth .up .lip::before {
    content: "";
    display: block;
    width: 10px;
    height: 30px;
    position: absolute;
    bottom: 0;
    background: #ffe600;
  }
  .mouth .up .lip.left::before {
    right: -5px;
  }
  .mouth .up .lip.right::before {
    left: -5px;
  }
  .mouth .down {
    width: 100%;
    height: 180px;
    position: absolute;
    position: relative;
    top: 5px;
    overflow: hidden;
  }
  .mouth .down .yuan1 {
    border: 2px solid black;
    position: absolute;
    width: 150px;
    height: 1000px;
    bottom: 0;
    left: 0;
    border-radius: 75px/300px;
    left: 50%;
    margin-left: -75px;
    background: #9b000a;
    overflow: hidden;
  }
  .mouth .down .yuan1 .yuan2 {
    width: 200px;
    height: 300px;
    background: #ff484f;
    position: absolute;
    bottom: -155px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
  }
  .face {
    position: absolute;
    left: 50%;
    border: 1px solid black;
    width: 88px;
    height: 88px;
    top: 200px;
    margin-left: -44px;
    z-index: 3;
  }
  .face > img {
    position: absolute;
    top: 50%;
    left: 50%;
    display: none;
  }
  .face:hover > img {
    display: block;
  }
  .face.left {
    transform: translateX(-180px);
    background: #ff0000;
    border: 1px solid black;
    border-radius: 50%;
  }
  .face.left > img {
    transform: rotateY(180deg);
    transform-origin: 0 0;
  }
  .face.right {
    transform: translateX(180px);
    background: #ff0000;
    border: 1px solid black;
    border-radius: 50%;
  }
`
export default string;