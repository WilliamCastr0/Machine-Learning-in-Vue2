<template>
    <div id="vue-canvas"></div>
</template>

<script>
import auth from '@/logic/auth.js';
import * as ml5 from "ml5";

let capture;
let poseNet;
let pose;
let skeleton;

export default {
    name: "VueCanvas",
    mounted() {
    const script = function (p5) {
    // Setup section

        p5.setup = () => {
        const canvas = p5.createCanvas(640, 480);
        canvas.parent("vue-canvas");
        capture = p5.createCapture(p5.VIDEO);
        capture.hide();
        poseNet = ml5.poseNet(capture, modelLoaded);       
        poseNet.on("pose", gotPoses);
        };

        function modelLoaded() {
            console.log("poseNet ready");
        }         

        function gotPoses(poses) {
            if (poses.length > 0) {
                pose = poses[0].pose;
                skeleton = poses[0].skeleton;
                addPoints(skeleton);
            }

        }
    // Draw section

        p5.draw = () => {
            p5.image(capture, 0, 0);

            if (pose) {
                p5.fill(255, 255, 255);
                p5.ellipse(pose.rightWrist.x, pose.rightWrist.y, 20);
                p5.ellipse(pose.leftWrist.x, pose.leftWrist.y, 20);

            for (let i = 0; i < pose.keypoints.length; i++) {
                let x = pose.keypoints[i].position.x;
                let y = pose.keypoints[i].position.y;
                p5.fill(26, 122, 135);
                p5.ellipse(x, y, 16, 16);
            }

            for (let i = 0; i < skeleton.length; i++) {
                let a = skeleton[i][0];
                let b = skeleton[i][1];
                p5.strokeWeight(2);
                p5.stroke(255);
                p5.line(a.position.x, a.position.y, b.position.x, b.position.y);
            }
            }
        };
    };
    // Use p5 as an script 
    const P5 = require("p5");
    new P5(script);
    console.log(P5);

    async function addPoints(skeleton) {
        if (skeleton.length != 0){
            const responsePoints = await auth.addPoints(skeleton);
            console.log(responsePoints);
        }    
    }
    },
};
</script>

<style lang="scss" scoped>
#vue-canvas {
    display: block;
    margin: 0 auto;
    padding: 0;
    width: 500px;
    height: 500px;
    border-radius: 20px;
    overflow: hidden;
}
</style>

