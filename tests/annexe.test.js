/** @vitest-environment jsdom */
const Main = require('../main.js');
const { Vec } = Main;
const getTimeStr = Main.getTimeStr; 

import { describe, it, expect } from 'vitest';

describe('Tests officiels (Annexe)', () => {

  it('new Vec(1, 2) returns {x: 1, y: 2}', () => {
    const v = new Vec(1, 2);
    expect(v.x).toBe(1);
    expect(v.y).toBe(2);
  });

  it('new Vec(1, 2).add(new Vec(3, 4)) returns {x: 4, y: 6}', () => {
    const res = new Vec(1, 2).add(new Vec(3, 4));
    expect(res.x).toBe(4);
    expect(res.y).toBe(6);
  });

  it('new Vec(1, 2).mul(-2, 3) returns {x: -2, y: 6}', () => {
    const res = new Vec(1, 2).mul(-2, 3); 
    expect(res.x).toBe(-2);
    expect(res.y).toBe(6);
  });

  it('new Vec(1, 2).dot(new Vec(2, 1)) returns 4', () => {
    expect(new Vec(1, 2).dot(new Vec(2, 1))).toBe(4);
  });

  it('new Vec(1, 2).cross(new Vec(3, 4).mul(-2, 3)) returns 24', () => {
    const v1 = new Vec(1, 2);
    const v2 = new Vec(3, 4).mul(-2, 3);
    expect(v1.cross(v2)).toBe(24);
  });

  it('Test complexe combiné (dot/cross/add) returns 57', () => {
    const dotVal = new Vec(1, 2).dot(new Vec(2, 1)); // 4
    const crossVal = new Vec(3, 4).mul(-2, 3); // Vec(-6, 12)
    const crossRes = new Vec(1, 2).cross(crossVal); // 24
    
    const combinedVec = new Vec(dotVal, crossRes); // Vec(4, 24)
    const finalAdd = new Vec(1, 2).add(combinedVec); // Vec(5, 26)
    
    const result = new Vec(1, 2).dot(finalAdd); // (1*5) + (2*26) = 5 + 52 = 57
    expect(result).toBe(57);
  });

  it('new Vec(1, 2).add(3) returns {x: NaN, y: NaN}', () => {
    const res = new Vec(1, 2).add(3);
    expect(res.x).toBeNaN();
    expect(res.y).toBeNaN();
  });

  it('new Vec(1, 1).cross(new Vec(-42, -42)) returns 0', () => {
    expect(new Vec(1, 1).cross(new Vec(-42, -42))).toBe(0);
  });

  it('getTimeStr(424242) returns "7:04.24"', () => {
    expect(getTimeStr(424242)).toBe("7:04.24");
  });

  it('getTimeStr(-123456) returns "-3:-4.-4"', () => {
    expect(getTimeStr(-123456)).toBe("-3:-4.-4");
  });

});