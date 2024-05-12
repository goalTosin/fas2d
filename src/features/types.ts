// the fas 2d app data that controls the entire app
type AppData = {
  frames: Frame[];
  framesOpacity?: number;
  frameNumber?: number;
  projectTitle?: string;
  toolData?: {
    brush?: {
      color: string;
      width: number;
    };
  };
  openTabSet: [OpenTabSet, OpenTabSet, OpenTabSet];
};

type OpenTab = { name: string; icon: string | null };
type OpenTabSet = OpenTab[];

type Frame = {
  camera: Camera;
  background:
    | Background
    | {
        color: Color;
      };
  scene: Group;
};

type Group = {
  positon?: Vec2;
  scale?: number;
  rotation?: number;
  children?: (Shape | Group)[];
};

type Shape = {
  position?: Vec2;
  path: Path;
  fill?: Paint;
  stroke?: Paint;
} & Group;

type Vec2 = {
  x: number;
  y: number;
};

type Color =
  | {
      r?: number;
      g?: number;
      b?: number;
    }
  | string
  | number;

type Background = {
  x: number;
  y: number;
  gap: number;
  image: string;
  repeatX: number;
  repeatY: number;
};

type Camera = {
  width: number;
  height: number;
} & Vec2;

type Paint = {
  color: Color;
}| {
  background: Background;
};

type MoveDrawChunk = {
  type: "move";
} & Vec2;
type LineDrawChunk = {
  type: "line";
} & Vec2;
type BezierCurveDrawChunk = {
  type: "bezier-curve";
} & Vec2;
type QuadraticCurveDrawChunk = {
  type: "quadratic-curve";
} & Vec2;
type ArcDrawChunk = {
  type: "arc";
  x: number;
  y: number;
  r: number;
  startAngle: number;
  endAngle: number;
  counterclockwise: boolean;
};
type DrawChunk =
  | ArcDrawChunk
  | LineDrawChunk
  | BezierCurveDrawChunk
  | MoveDrawChunk
  | QuadraticCurveDrawChunk;
type Path = DrawChunk[] | string;

type DDMOption =
  | {
      name: string;
      function?: () => void;
      options?: DDMOption[];
    }
  | "hr";
type DDMProps = {
  onFocusedCallback: () => void;
  focused: boolean;
  globalFocus: boolean;
  onBlurCallback: () => void;
} & DDMPropsWithoutFocusData;
type DDMPropsWithoutFocusData = { name: string; options: DDMOption[] };
type Matcher = RegExp | string;
type Grammer = {
  start: Matcher;
  disclaimer?: Matcher;
  class: string;
  charOffsetStart?: number;
  charOffsetEnd?: number;
  score?: number;
  end: Matcher;
};
type CodeColorData = {
  grammers: Grammer[];
};
const eg: CodeColorData = {
  grammers: [
    {
      start: "//",
      end: "\n",
      class: "comment",
    },
    {
      start: /\bvar\b /,
      end: "=",
      charOffsetStart: 4,
      charOffsetEnd: 1,
      class: "declaration.variable-name",
    },
    {
      start: /\bconst\b /,
      end: "=",
      charOffsetStart: 6,
      charOffsetEnd: 1,
      class: "declaration.variable-name",
    },
  ],
};

export type {
  DDMOption,
  DDMProps,
  DDMPropsWithoutFocusData,
  AppData,
  OpenTab,
  OpenTabSet,
  Background,
  Camera,
  CodeColorData,
  Frame,
  Grammer,
  Group,
  Matcher,
  Shape,
  Path,
  ArcDrawChunk,
  DrawChunk,
  LineDrawChunk,
  MoveDrawChunk,
  BezierCurveDrawChunk,
  Color,
  Paint,
  QuadraticCurveDrawChunk,
  Vec2,
};
