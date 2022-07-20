import React from "react";
import { Resource } from "../casl/interfaces";
import { BreadcrumbsType } from "../components/breadcrumb/interfaces";

export type ROLES = "admin" | "user" | "leader";

export interface RoutesConfig {
  pathName: string;
  resource?: Resource;
  routes: RoutesConfig[];
  component: React.FC;
}
export interface UserType {
  name: string;
  age: string;
  address: string;
}
export interface LeftMenuConfig {
  label: string;
  icon?: any;
  pathName?: string;
  authority: ROLES[];
  isHiddenOnLeftMenu?: boolean;
  isActive?: boolean;
  isParent?: boolean;
  children: LeftMenuConfig[];
  resources?: Resource;
}

export interface ICommonInitialState {
  breadcrumbConfigs: BreadcrumbsType[];
}
export interface Thumbnail {
  key: string;
  bucket: string;
  type: string;
  uploaderId: string;
  deletedAt?: string;
  createdAt: string;
  updatedAt: string;
  version: number;
  id: string;
  size: number;
  verified: number;
  url?: string;
}

export interface PresignHeader {
  url: string;
  fields: {
    acl: string;
    bucket: string;
    "X-Amz-Algorithm": string;
    "X-Amz-Credential": string;
    "X-Amz-Date": string;
    key: string;
    Policy: string;
    "X-Amz-Signature": string;
  };
}
export interface PresignRes {
  image: Thumbnail;
  presign: PresignHeader;
}
