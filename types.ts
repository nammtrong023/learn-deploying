import { Comment, Location, Room, User } from '@prisma/client';

export type Tokens = {
  accessToken: string;
  refreshToken: string;
};

export type JwtPayload = {
  id: number;
  email: string;
};

export type JwtPayloadWithRtToken = JwtPayload & { refreshToken: string };

export type JwtPayloadWithAtToken = JwtPayload & { accessToken: string };

export type JwtPayloadWithTokens = JwtPayload & Tokens;

export type FilterType = {
  itemsPerPage?: number;
  page?: number;
  search?: string;
};

type PaginationType = {
  total: number;
  currentPage?: number;
  itemsPerPage?: number;
};

export type UserPaginationType = PaginationType & {
  data: User[];
};

export type CommentPaginationType = PaginationType & {
  data: Comment[];
};

export type LocationPaginationType = PaginationType & {
  data: Location[];
};

export type RoomPaginationType = PaginationType & {
  data: Room[];
};
