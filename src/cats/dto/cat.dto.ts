import { ApiProperty, PickType } from '@nestjs/swagger';
import { Cat } from '../cats.schema';


/**
 * 여기는 받을 때의 type을 지정함.
 */
export class ReadOnlyCatDto extends PickType(Cat, ['email', 'name'] as const){
  @ApiProperty({
    example: '12345678',
    description: 'id',
    required: true,
  })
  id: string;

}