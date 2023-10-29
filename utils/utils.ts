export const MARGIN = 8;
export const SIZE = 30;

export const getPosition = (index: number) => {
  'worklet';
  switch (index) {
    case 1:
      return { x: 0, y: 0 };
    case 2:
      return { x: 0, y: 30 };
    case 3:
      return { x: 0, y: 60 };
    default:
      return { x: 0, y: 60 };
  }
};

export const getOrder = (x: number, y: number) => {
  'worklet';
  if (y < 15)
    return 1;
  else if (y >= 15 && y < 30)
    return 2;
  else
    return 3;
};