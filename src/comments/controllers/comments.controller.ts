import { Controller, Get } from '@nestjs/common';
import { CommentsService } from '../comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) { }

  @Get("")
  async getAllComments() {
    return this.commentsService.getAllComments();

    
  }
}
