import { PixiComponent } from '@inlet/react-pixi';
import * as PIXI from 'pixi.js';
import { Graphics } from 'pixi.js';

type PropsType = {
  x: number;
  y: number;
  radius: number;
  fill: number;
  stroke?: number;
};

export const Circle = PixiComponent<PropsType, Graphics>('Circle', {
  create: () => new PIXI.Graphics(),
  applyProps: (instance, _, props) => {
    const { x, y, radius, fill, stroke } = props;

    instance.clear();
    instance.lineStyle(1, stroke);
    instance.beginFill(fill);
    instance.drawCircle(x, y, radius);
    instance.endFill();
  },
});
