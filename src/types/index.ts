export interface MorphologyData {
  root: string;
  pattern: string;
  forms: {
    [key: string]: { ar: string; id: string } | undefined;
  };
}

export interface Word {
  word: string;
  meaning: string;
  type: string;
  irab: string;
  morphology?: MorphologyData;
}

export interface Chapter {
  id: number;
  titleTrans: string;
  titleAr: string;
  refPage: number;
  paragraphs: {
    arabic: Word[];
    translation: string;
  }[];
}
