const PADDING_PERCENT = 0.1;
type emojiProps = {
  ctx: CanvasRenderingContext2D;
  xPos: number;
  yPos: number;
  radius: number;
};

const drawRoundEye = ({ ctx, xPos, yPos, radius }: emojiProps) => {
  const eyeOffsetX = radius * 0.4;
  const eyeOffsetY = radius * 0.2;
  const eyeX1 = xPos - eyeOffsetX;
  const eyeX2 = xPos + eyeOffsetX;
  const eyeY = yPos - eyeOffsetY;
  const eyeRadius = radius * 0.05;

  ctx.moveTo(eyeX1 + eyeRadius, eyeY);
  ctx.arc(eyeX1, eyeY, eyeRadius, 0, Math.PI * 2, true);

  ctx.moveTo(eyeX2 + eyeRadius, eyeY);
  ctx.arc(eyeX2, eyeY, eyeRadius, 0, Math.PI * 2, true);
};

const drawSquishEye = ({ ctx, xPos, yPos, radius }: emojiProps) => {
  const eyeOffsetX = radius * 0.4;
  const eyeOffsetY = radius * 0.2;
  const eyeX1 = xPos - eyeOffsetX;
  const eyeX2 = xPos + eyeOffsetX;
  const eyeY = yPos - eyeOffsetY;
  const eyeRadius = radius * 0.05;
  const lineEyeY1 = eyeY + yPos * 0.05;
  const lineEyeY2 = eyeY + yPos * 0.05 * 2;

  ctx.moveTo(eyeX1, eyeY);
  ctx.lineTo(eyeX1 + eyeRadius * 3, lineEyeY1);
  ctx.lineTo(eyeX1, lineEyeY2);

  ctx.moveTo(eyeX2, eyeY);
  ctx.lineTo(eyeX2 - eyeRadius * 3, lineEyeY1);
  ctx.lineTo(eyeX2, lineEyeY2);
};

const drawAngryEye = ({ ctx, xPos, yPos, radius }: emojiProps) => {
  const eyeOffsetX = radius * 0.4;
  const eyeOffsetY = radius * 0.2;
  const eyeX1 = xPos - eyeOffsetX;
  const eyeX2 = xPos + eyeOffsetX;
  const eyeY = yPos - eyeOffsetY;
  const eyeRadius = radius * 0.05 * 1.25;
  const lineEyeY = eyeY + yPos * 0.1;

  ctx.moveTo(eyeX1, eyeY);
  ctx.lineTo(eyeX1 + eyeRadius * 2.8, lineEyeY);
  ctx.arc(
    eyeX1 + eyeRadius * 1.8,
    lineEyeY,
    eyeRadius,
    Math.PI * 1.35,
    Math.PI * 2,
    true
  );

  ctx.moveTo(eyeX2, eyeY);
  ctx.lineTo(eyeX2 - eyeRadius * 2.8, lineEyeY);
  ctx.arc(
    eyeX2 - eyeRadius * 1.8,
    lineEyeY,
    eyeRadius,
    Math.PI,
    Math.PI * 1.65,
    true
  );
};

const happy = ({ ctx, xPos, yPos, radius }: emojiProps) => {
  const mouthRadius = radius * 0.55;
  const mouthStartAngle = Math.PI * 0.15;
  const mouthEndAngle = Math.PI * 0.85;
  const mouthOffsetX = xPos + Math.cos(mouthStartAngle) * mouthRadius;
  const mouthOffsetY = yPos + Math.sin(mouthStartAngle) * mouthRadius;

  ctx.moveTo(mouthOffsetX, mouthOffsetY);
  ctx.arc(xPos, yPos, mouthRadius, mouthStartAngle, mouthEndAngle, false);
};

const smile = ({ ctx, xPos, yPos, radius }: emojiProps) => {
  const mouthRadius = radius * 0.55;
  const mouthStartAngle = Math.PI * 0.15;
  const mouthEndAngle = Math.PI * 0.85;
  const mouthOffsetX = xPos + Math.cos(mouthStartAngle) * mouthRadius;
  const mouthOffsetY = yPos + Math.sin(mouthStartAngle) * mouthRadius;

  ctx.moveTo(mouthOffsetX, mouthOffsetY);
  ctx.arc(xPos, yPos, mouthRadius, mouthStartAngle, mouthEndAngle, false);
};

const sad = ({ ctx, xPos, yPos, radius }: emojiProps) => {
  const mouthRadius = radius * 0.55;
  const mouthStartAngle = Math.PI * -0.15;
  const mouthEndAngle = Math.PI * -0.85;
  const mouthOffsetX = xPos - Math.cos(mouthEndAngle) * mouthRadius;
  const mouthOffsetY = yPos - Math.sin(mouthEndAngle) * 2 * mouthRadius;

  ctx.moveTo(mouthOffsetX, mouthOffsetY);
  ctx.arc(
    xPos,
    yPos - Math.cos(mouthEndAngle) * 1.5 * mouthRadius,
    mouthRadius,
    mouthStartAngle,
    mouthEndAngle,
    true
  );
};

const angry = ({ ctx, xPos, yPos, radius }: emojiProps) => {
  const mouthRadius = radius * 0.55;
  const mouthStartAngle = Math.PI * -0.25;
  const mouthEndAngle = Math.PI * -0.75;
  const mouthOffsetX = xPos - Math.cos(mouthEndAngle) * mouthRadius;
  const mouthOffsetY = yPos - Math.sin(mouthEndAngle) * 1 * mouthRadius;

  ctx.moveTo(mouthOffsetX, mouthOffsetY);
  ctx.arc(
    xPos,
    yPos - Math.sin(mouthStartAngle) * 2 * mouthRadius,
    mouthRadius,
    mouthStartAngle,
    mouthEndAngle,
    true
  );
};

const cry = ({ ctx, xPos, yPos, radius }: emojiProps) => {
  const mouthRadius = radius * 0.55;
  const mouthStartAngle = Math.PI * -0.15;
  const mouthEndAngle = Math.PI * -0.85;
  const mouthOffsetX = xPos - Math.cos(mouthEndAngle) * mouthRadius;
  const mouthOffsetY = yPos - Math.sin(mouthEndAngle) * 2 * mouthRadius;

  ctx.moveTo(mouthOffsetX, mouthOffsetY);
  ctx.arc(
    xPos,
    yPos - Math.cos(mouthEndAngle) * 1.5 * mouthRadius,
    mouthRadius,
    mouthStartAngle,
    mouthEndAngle,
    true
  );
};

const createEmoji = (context: CanvasRenderingContext2D, emotion: EmojiFace) => {
  const xCenter = context.canvas.width * 0.5;
  const yCenter = context.canvas.height * 0.5;
  const smallSide = Math.min(xCenter, yCenter);
  const radius = smallSide - smallSide * PADDING_PERCENT;

  context.beginPath();
  context.arc(xCenter, yCenter, radius, 0, Math.PI * 2, true);
  switch (emotion) {
    case 'happy':
      drawRoundEye({ ctx: context, xPos: xCenter, yPos: yCenter, radius });
      happy({ ctx: context, xPos: xCenter, yPos: yCenter, radius });
      break;
    case 'smile':
      drawSquishEye({ ctx: context, xPos: xCenter, yPos: yCenter, radius });
      smile({ ctx: context, xPos: xCenter, yPos: yCenter, radius });
      break;
    case 'sad':
      drawRoundEye({ ctx: context, xPos: xCenter, yPos: yCenter, radius });
      sad({ ctx: context, xPos: xCenter, yPos: yCenter, radius });
      break;
    case 'angry':
      drawAngryEye({ ctx: context, xPos: xCenter, yPos: yCenter, radius });
      angry({ ctx: context, xPos: xCenter, yPos: yCenter, radius });
      break;
    case 'cry':
      drawSquishEye({ ctx: context, xPos: xCenter, yPos: yCenter, radius });
      cry({ ctx: context, xPos: xCenter, yPos: yCenter, radius });
      break;
    default:
      break;
  }

  context.stroke();
};

export default createEmoji;
