"use strict";

function Grid(width, height, robot) {
  this.width = width;
  this.height = height;
  this.robot = robot;
}

function Robot(position, facing) {
  this.position = null;
  this.facing = null;
};

function place(grid, position, facing) {};
function move(grid) {};
function turn(grid, direction) {};
function report(grid) {};