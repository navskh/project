import { PickType } from '@nestjs/swagger';
import { Cat } from '../cats.schema';

/**
 * 여기는 요청할 때의 data type
 */
export class CatRequestDto extends PickType(Cat, [
  'email',
  'name',
  'password',
] as const) {}
