export type BoardSize = '3x3' | '4x4' | '5x5';

export interface Objective {
    title: string,
    isDone?: boolean
}