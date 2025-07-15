import React, { useRef, useMemo } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'

// css
import '../css/top.css'

// 文字画像からターゲット座標を抽出する関数 
function getTextTargets(text, targetCount, width = 1920, height = 1080) {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, width, height)
  ctx.font = 'bold 32px sans-serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = 'white'
  ctx.fillText(text, width / 2, height / 2)

  const imageData = ctx.getImageData(0, 0, width, height).data
  const points = []
  console.log(imageData[0], 'imageData')
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const i = (y * width + x) * 4
      if (imageData[i] > 20) {
        points.push([
          (x - width / 2) / 20,
          -(y - height / 2) / 20,
          0
        ])
      }
    }
  }
  console.log(points.length, 'points found')
  // ランダムにcount個選ぶ
  while (points.length < targetCount) points.push([0, 0, 0])
  return points.sort(() => Math.random() - 0.5)
}

function createCircleTexture(size=64) {
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = 'white'
  ctx.beginPath()
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2)
  ctx.fill()
  return new THREE.CanvasTexture(canvas)
}

const Particles = ({attract, targetPosition}) => {
  // パーティクル数を定義
  const particleCount = 2000;
  // パーティクル群の参照を作成
  const particleRef = useRef();
  // const circleTexture = useLoader(THREE.TextureLoader, "/particle_transparent.png");
  const circleTexture = useMemo(() => createCircleTexture(32), []);


  // パーティクルの位置配列を生成（初期化時のみ）
  const positions = useMemo(() => {
    const arr = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, [particleCount]);

  // 毎フレームスクロールが発生するごとに移動する
  useFrame(() => {
    const positionAttr = particleRef.current.geometry.attributes.position
    for (let i = 0; i < particleCount; i++) {
      if (targetPosition != null) {
        const target = targetPosition[i];
        // 目標位置と現在位置の差を計算
        positionAttr.array[i * 3 + 0] += (target[0] - positionAttr.array[i * 3 + 0]) * 0.05
        positionAttr.array[i * 3 + 1] += (target[1] - positionAttr.array[i * 3 + 1]) * 0.05
        positionAttr.array[i * 3 + 2] += (target[2] - positionAttr.array[i * 3 + 2]) * 0.05
      }
    }
    positionAttr.needsUpdate = true;
  });

  attract = false;

  // パーティクル群を描画
  return (
    <points ref={particleRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.425} map={circleTexture} transparent alphaTest={0.8} depthWrite={false} color={0xffffff} />
    </points>
  )
}

const Top = () => {
  const targetCount = 2000;
  // attract: パーティクルを集めるかどうかの状態
  const attract = useRef(true);
  // targetPosition: パーティクルが集まる目標座標
  const targetPosition = useMemo(() => getTextTargets("Welcome!", targetCount), [targetCount]);
  console.log(targetPosition, 'targetPosition')

  return (
    <div className="top">
      <Canvas camera={{ position: [0, 0, 15], fov: 30 }}>
        <Particles attract={attract} targetPosition={attract ? targetPosition :  null} />
      </Canvas>
    </div>
  )
}

export default Top
