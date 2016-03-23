import {FirebaseData} from './firebase-data';

export interface FirebaseModel0<T> {
  new(
    obj: FirebaseData
  ): T;
}
export interface FirebaseModel1<T> {
  new(
    obj: FirebaseData,
    b: any
  ): T;
}
export interface FirebaseModel2<T> {
  new(
    obj: FirebaseData,
    b: any,
    c: any
  ): T;
}
export interface FirebaseModel3<T> {
  new(
    obj: FirebaseData,
    b: any,
    c: any,
    d: any
  ): T;
}
export interface FirebaseModel4<T> {
  new(
    obj: FirebaseData,
    b: any,
    c: any,
    d: any,
    e: any
  ): T;
}
export interface FirebaseModel5<T> {
  new(
    obj: FirebaseData,
    b: any,
    c: any,
    d: any,
    e: any,
    f: any
  ): T;
}
export interface FirebaseModel6<T> {
  new(
    obj: FirebaseData,
    b: any,
    c: any,
    d: any,
    e: any,
    f: any,
    g: any
  ): T;
}
export interface FirebaseModel7<T> {
  new(
    obj: FirebaseData,
    b: any,
    c: any,
    d: any,
    e: any,
    f: any,
    g: any,
    h: any
  ): T;
}
export interface FirebaseModel8<T> {
  new(
    obj: FirebaseData,
    b: any,
    c: any,
    d: any,
    e: any,
    f: any,
    g: any,
    h: any,
    i: any
  ): T;
}
export interface FirebaseModel9<T> {
  new(
    obj: FirebaseData,
    b: any,
    c: any,
    d: any,
    e: any,
    f: any,
    g: any,
    h: any,
    i: any,
    j: any
  ): T;
}

export type FirebaseModel<T> =  FirebaseModel0<T> |
                                FirebaseModel1<T> |
                                FirebaseModel2<T> |
                                FirebaseModel3<T> |
                                FirebaseModel4<T> |
                                FirebaseModel5<T> |
                                FirebaseModel6<T> |
                                FirebaseModel7<T> |
                                FirebaseModel8<T> |
                                FirebaseModel9<T>;
