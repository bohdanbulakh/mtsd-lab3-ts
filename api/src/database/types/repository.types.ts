import { Prisma } from '@prisma/client';

export type TModels = Prisma.TypeMap['meta']['modelProps'];

export type TUpdate<Model extends TModels> = Prisma.TypeMap['model'][Capitalize<Model>]['operations']['update']['args']['data'];

export type TCreate<Model extends TModels> = Prisma.TypeMap['model'][Capitalize<Model>]['operations']['create']['args']['data'];

export type TSort<Model extends TModels> = Prisma.TypeMap['model'][Capitalize<Model>]['operations']['findFirst']['args']['orderBy'];

export type TWhere<Model extends TModels> = Prisma.TypeMap['model'][Capitalize<Model>]['operations']['findFirst']['args']['where'];

export type TWhereUnique<Model extends TModels> = Prisma.TypeMap['model'][Capitalize<Model>]['operations']['findUnique']['args']['where'];
