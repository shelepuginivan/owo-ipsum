export type OwoifyOptions = {
  owoifyMap?: Record<string, string>;
  actionList?: string[];
  faceList?: string[];
  probabilities: {
    stutter?: number;
    action?: number;
    face?: number;
  };
};
