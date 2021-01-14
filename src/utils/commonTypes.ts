export type HeaderType =
  | "ResumeHeader"
  | "ResumeSubHeader"
  | "ResumeAvatar"
  | "ResumeText";

export interface onePostType {
  blockType: HeaderType;
  id: number;
  text: string;
}

export interface oneCommentType {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}

export interface logedUserType {
  displayName: string;
  email: string;
  emailVerified: boolean;
  uid: string;
}
