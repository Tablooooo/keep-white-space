/** @vitest-environment jsdom */
const { Vec } = require('../main.js');
import { describe, it, expect } from 'vitest';

describe('Tests officiels (Annexe)', () => {
  it('new Vec(1, 2) doit retourner {x: 1, y: 2}', () => {
    const v = new Vec(1, 2);
    expect(v.x).toBe(1);
    expect(v.y).toBe(2);
  });

  it('addition : new Vec(1, 2).add(new Vec(3, 4)) doit retourner {x: 4, y: 6}', () => {
    const v1 = new Vec(1, 2);
    const v2 = new Vec(3, 4);
    const res = v1.add(v2);
    expect(res.x).toBe(4);
    expect(res.y).toBe(6);
  });

  it('dot product : new Vec(1, 2).dot(new Vec(2, 1)) doit retourner 4', () => {
    const v1 = new Vec(1, 2);
    const v2 = new Vec(2, 1);
    expect(v1.dot(v2)).toBe(4);
  });

  it('erreur addition : new Vec(1, 2).add(3) doit retourner NaN', () => {
    const v = new Vec(1, 2);
    const res = v.add(3);
    expect(res.x).toBeNaN();
    expect(res.y).toBeNaN();
  });
});